"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const benefits = [
  { title: "Danh xưng chính thống", text: "Được ghi nhận là Builder tiên phong của cộng đồng VIFC — bảo chứng bởi các đơn vị đồng hành uy tín." },
  { title: "Ưu tiên tiếp cận tri thức", text: "Bản tin nội bộ, tài liệu chuyên đề và các buổi làm việc kín với chuyên gia trong nước và quốc tế." },
  { title: "Mạng lưới đúng người", text: "Kết nối với chủ doanh nghiệp, founder, nhà đầu tư và cố vấn cùng khát vọng vươn ra khu vực." },
  { title: "Đặc quyền tại các sự kiện", text: "Ưu tiên chỗ ngồi, khu vực networking riêng và cơ hội tham gia các hoạt động trải nghiệm tại VIFC." },
];

type PioneerSectionProps = {
  formOpen: boolean;
  onFormOpenChange: (open: boolean) => void;
};

export default function PioneerSection({ formOpen, onFormOpenChange }: PioneerSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          primaryGoal: formData.get("primaryGoal"),
          interests: formData.get("interests"),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể gửi đăng ký.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi gửi đăng ký.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative flex min-h-[430px] w-full items-center overflow-hidden bg-[#0a0b18] px-6 py-16 text-white md:aspect-[1680/942] md:min-h-0 md:px-10 md:py-12 lg:px-14">
        <Image
          src="/pioneer/vifc-light-up-banner.png"
          alt="Tòa nhà VIFC được thắp sáng"
          fill
          quality={95}
          sizes="100vw"
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,36,0.08)_20%,rgba(4,8,36,0.4)_62%,rgba(4,8,36,0.82)_100%)]" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="relative ml-auto w-full text-right text-[clamp(1.35rem,4vw,4.5rem)] font-semibold leading-[1.08] tracking-tight drop-shadow-[0_3px_20px_rgba(0,0,0,0.6)]">
          <span className="block whitespace-nowrap">Hãy cùng nhau đến sớm</span>
          <span className="block whitespace-nowrap">và thắp sáng VIFC</span>
        </motion.h2>
      </section>

      <section className="grid grid-cols-1 border-b border-black/10 bg-[#f1ede3] text-[#17130d] lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative flex min-h-[620px] items-center justify-center overflow-hidden border-b border-black/10 bg-[#e5e0d6] p-10 lg:border-b-0 lg:border-r">
          <div className="absolute h-80 w-80 rounded-full bg-[#d6aa56]/20 blur-3xl" />
          <div className="relative aspect-[1.5/1] w-full max-w-xl rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-[1.025]">
            <Image
              src="/pioneer/ifc-pass-pioneer-card-transparent.png"
              alt="Thẻ IFC Pass The Pioneer"
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-contain object-center drop-shadow-[0_35px_45px_rgba(23,19,13,0.22)]"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75 }} className="flex min-h-[620px] flex-col justify-center bg-[#f1ede3] px-6 py-20 md:px-10 lg:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9b6b20]">The Pioneer</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">Không phải một tấm thẻ,<br />mà một vị thế</h2>

          <ul className="mt-8">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4 border-b border-black/10 py-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#9b6b20]/45 text-[#9b6b20]"><Check size={12} /></span>
                <div><h3 className="text-sm font-bold">{benefit.title}</h3><p className="mt-1 text-xs leading-relaxed text-black/50 md:text-sm">{benefit.text}</p></div>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-sm text-black/60"><strong className="text-black">Miễn phí.</strong> Giới hạn <strong className="text-black">10.000</strong>. Xét duyệt theo đợt.</p>
          <button
            type="button"
            aria-expanded={formOpen}
            aria-controls="pioneer-registration-form"
            onClick={() => onFormOpenChange(true)}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d6aa56] px-7 py-4 text-sm font-bold text-[#17130d] transition-colors hover:bg-[#e7c979]"
          >
            Đăng ký ngay
            <ArrowRight size={17} />
          </button>

          <AnimatePresence initial={false}>
            {formOpen && (
              <motion.div
                id="pioneer-registration-form"
                role="dialog"
                aria-modal="true"
                aria-labelledby="pioneer-registration-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 md:p-8"
              >
                <button type="button" aria-label="Đóng biểu mẫu đăng ký" onClick={() => onFormOpenChange(false)} className="absolute inset-0 bg-black/75 backdrop-blur-md" />
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative my-auto max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-black/10 bg-[#f1ede3] p-5 text-[#17130d] shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:max-h-[calc(100vh-4rem)] md:p-8"
                >
                  <button type="button" aria-label="Đóng" onClick={() => onFormOpenChange(false)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 transition hover:bg-white md:right-6 md:top-6">
                    <X size={18} />
                  </button>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9b6b20]">Thông tin đăng ký</p>
                    <h3 id="pioneer-registration-title" className="mt-2 pr-12 text-2xl font-bold tracking-tight md:text-3xl">Gia nhập cộng đồng VIFC</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/50">Điền thông tin để chúng tôi hiểu rõ hơn về nhu cầu kết nối của bạn.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-black/65">
                      Họ và tên <span className="text-[#9b6b20]">*</span>
                      <input required name="fullName" autoComplete="name" placeholder="Nguyễn Văn A" className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20" />
                    </label>
                    <label className="text-xs font-semibold text-black/65">
                      Tên doanh nghiệp
                      <input name="company" autoComplete="organization" placeholder="Tên doanh nghiệp" className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20" />
                    </label>
                    <label className="text-xs font-semibold text-black/65">
                      Email <span className="text-[#9b6b20]">*</span>
                      <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20" />
                    </label>
                    <label className="text-xs font-semibold text-black/65">
                      Số điện thoại <span className="text-[#9b6b20]">*</span>
                      <input required type="tel" name="phone" autoComplete="tel" placeholder="09xx xxx xxx" className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20" />
                    </label>
                  </div>

                  <label className="mt-4 block text-xs font-semibold text-black/65">
                    Mục tiêu chính của bạn khi tham gia cộng đồng VIFC là gì? <span className="text-[#9b6b20]">*</span>
                    <select required name="primaryGoal" defaultValue="" className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20">
                      <option value="" disabled>Chọn một nhu cầu</option>
                      <option>Kết nối đối tác và nhà đầu tư</option>
                      <option>Tiếp cận kiến thức và chuyên gia</option>
                      <option>Tìm kiếm cơ hội kinh doanh quốc tế</option>
                      <option>Tham gia dự án và hoạt động cộng đồng</option>
                      <option>Khác</option>
                    </select>
                  </label>

                  <label className="mt-4 block text-xs font-semibold text-black/65">
                    Bạn đang quan tâm nhất đến chủ đề hoặc cơ hội nào tại VIFC?
                    <textarea name="interests" rows={4} placeholder="Chia sẻ ngắn về lĩnh vực, dự án hoặc kết nối bạn đang tìm kiếm..." className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm leading-relaxed text-black outline-none transition focus:border-[#9b6b20]/60 focus:ring-2 focus:ring-[#d6aa56]/20" />
                  </label>

                  <button disabled={submitting} type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#17130d] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#9b6b20] disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? "Đang gửi..." : "Gửi đăng ký"}
                    {!submitting && <ArrowRight size={17} />}
                  </button>

                  {submitted && (
                    <p role="status" className="mt-4 rounded-xl border border-[#9b6b20]/20 bg-[#d6aa56]/10 px-4 py-3 text-center text-xs leading-relaxed text-black/70">
                      Đăng ký thành công! Thông tin của bạn đã được ghi nhận.
                    </p>
                  )}

                  {submitError && (
                    <p role="alert" className="mt-4 rounded-xl border border-red-700/20 bg-red-700/10 px-4 py-3 text-center text-xs leading-relaxed text-red-800">
                      {submitError}
                    </p>
                  )}
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
