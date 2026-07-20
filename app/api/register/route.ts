import { NextResponse } from "next/server";

type RegistrationPayload = {
  fullName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  primaryGoal?: unknown;
  interests?: unknown;
};

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RegistrationPayload;
    const registration = {
      fullName: asText(payload.fullName),
      company: asText(payload.company),
      email: asText(payload.email),
      phone: asText(payload.phone),
      primaryGoal: asText(payload.primaryGoal),
      interests: asText(payload.interests),
    };

    if (
      !registration.fullName ||
      !registration.email ||
      !registration.phone ||
      !registration.primaryGoal
    ) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập đầy đủ thông tin bắt buộc." },
        { status: 400 },
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      console.error("Missing GOOGLE_SCRIPT_URL or GOOGLE_SCRIPT_SECRET");
      return NextResponse.json(
        { success: false, message: "Hệ thống đăng ký chưa được cấu hình." },
        { status: 503 },
      );
    }

    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...registration, secret }),
      cache: "no-store",
      redirect: "follow",
    });

    const responseText = await googleResponse.text();
    let result: { success?: boolean; message?: string };

    try {
      result = JSON.parse(responseText) as typeof result;
    } catch {
      throw new Error("Google Sheets trả về dữ liệu không hợp lệ.");
    }

    if (!googleResponse.ok || !result.success) {
      throw new Error(result.message || "Không thể lưu thông tin đăng ký.");
    }

    return NextResponse.json({
      success: true,
      message: result.message || "Đăng ký thành công.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Có lỗi xảy ra khi gửi đăng ký.",
      },
      { status: 500 },
    );
  }
}
