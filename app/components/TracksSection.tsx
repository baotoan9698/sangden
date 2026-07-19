"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const tracks = [
  {
    number: "01",
    image: "/tracks/vifc-101-series-event.png",
    imageAlt: "VIFC 101 Series Event",
    label: "Hợp phần 01 - Series event",
    title: "VIFC 101 SERIES EVENT",
    description: "Chuỗi sự kiện chuyên đề thuộc Chiến dịch Sáng Đèn, cung cấp kiến thức nền tảng về Trung tâm Tài chính Quốc tế — từ khung pháp lý và chính sách ưu đãi đến cơ hội kinh doanh và lộ trình tham gia thực tế cho từng nhóm ngành — đồng thời kết nối doanh nghiệp Việt Nam với các quỹ đầu tư, tập đoàn quốc tế, tổ chức tài chính, đại sứ và chuyên gia trong và ngoài nước, nhằm thúc đẩy hợp tác, đầu tư và mở rộng thị trường — dành cho doanh nghiệp và nhà đầu tư muốn đưa ra quyết định có thông tin, không chờ thị trường dẫn đường.",
    bullets: ["Bi-weekly · 90 phút · Miễn phí", "Chủ đề: VIFC · Tài sản số · Hàng hóa · RWA", "Co-host cùng chuyên gia và doanh nghiệp dẫn đầu"],
    action: "Đăng ký tham dự",
  },
  {
    number: "02",
    image: "/tracks/vifc-challenge.png",
    imageAlt: "VIFC Challenge",
    label: "Hợp phần 02 · Hackathon",
    title: "VIFC Challenge",
    description: "Cuộc thi xây dựng giải pháp tài chính số cho VIFC. Không chỉ pitch ý tưởng — các đội phát triển prototype thật, kết nối Champion thật và hướng tới khả năng pilot thực tế.",
    bullets: ["6 vòng phát triển và cố vấn chuyên sâu", "Team Formation Day dành cho Builder", "Champion doanh nghiệp cam kết bài toán thật", "Demo Day tại BNI Summit 2026"],
    action: "NỘP HỒ SƠ",
  },
  {
    number: "03",
    image: "/tracks/vifc-talent-blue.png",
    imageAlt: "VIFC Talent",
    label: "Hợp phần 03 · Student Program",
    title: "VIFC Talent",
    description: "Chương trình kiến thức tài chính VIFC theo chuẩn CFA — dành riêng cho sinh viên năm 3–4 ngành Tài chính, Ngân hàng, Kinh tế. Ba cấp độ progressive, từ online MCQ đến Written + Oral tại BNI Summit.",
    bullets: ["Level 1 — Foundations: 40 MCQ · Online · 60 phút · Pass 60%", "Level 2 — Applied: Vignette scenarios · 90 phút · Pass 65%", "Level 3 — Expert: Written 90' + Oral 10' · BNI Summit offline", "Chứng chỉ: VIFC Foundations / Applied / Expert Certificate"],
    action: "ĐĂNG KÝ THI",
  },
];

export default function TracksSection() {
  return (
    <section className="overflow-hidden bg-[#f1ede3] text-[#17130d]">
      <div className="border-b border-black/10 px-6 py-20 md:px-10 md:py-24 lg:px-14">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="whitespace-nowrap text-[clamp(1.65rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight">
          Ba track vận hành song song
        </motion.h2>
      </div>

      <div>
        {tracks.map((track, index) => (
          <article key={track.number} className="grid grid-cols-1 border-b border-black/10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className={`group relative flex aspect-square w-full self-start items-center justify-center overflow-hidden bg-[#e5e0d6] ${index % 2 === 1 ? "md:order-2" : ""}`}>
              {track.image && track.imageAlt ? (
                <Image
                  src={track.image}
                  alt={track.imageAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                />
              ) : (
                <>
                  <div className="absolute h-72 w-72 rounded-full bg-[#d6aa56]/10 blur-3xl" />
                  <span className="relative text-[9rem] font-semibold leading-none tracking-tighter text-[#1a2f5d]/[0.07] md:text-[13rem] lg:text-[16rem]">{track.number}</span>
                </>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75 }} className={`flex flex-col justify-center bg-[#f1ede3] px-6 py-10 md:px-8 md:py-8 lg:px-10 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d6aa56]">{track.label}</p>
              <h3 className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl ${index === 0 ? "whitespace-nowrap" : ""}`}>
                {index === 2 ? <>VIFC <em className="font-normal italic">Talent</em></> : track.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/55">{track.description}</p>

              <ul className="mt-5 max-w-2xl">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 border-b border-black/10 py-2 text-xs leading-5 text-black/65 md:text-sm">
                    <span className="text-[#d6aa56]">—</span><span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="mt-5 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b6b20] transition-colors hover:text-black">
                {track.action} <ArrowRight size={14} />
              </a>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}
