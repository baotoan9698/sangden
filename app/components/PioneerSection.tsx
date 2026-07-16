"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  { title: "Danh xưng chính thống", text: "Được ghi nhận là Builder tiên phong của cộng đồng VIFC — bảo chứng bởi các đơn vị đồng hành uy tín." },
  { title: "Ưu tiên tiếp cận tri thức", text: "Bản tin nội bộ, tài liệu chuyên đề và các buổi làm việc kín với chuyên gia trong nước và quốc tế." },
  { title: "Mạng lưới đúng người", text: "Kết nối với chủ doanh nghiệp, founder, nhà đầu tư và cố vấn cùng khát vọng vươn ra khu vực." },
  { title: "Đặc quyền tại các sự kiện", text: "Ưu tiên chỗ ngồi, khu vực networking riêng và cơ hội tham gia các hoạt động trải nghiệm tại VIFC." },
];

export default function PioneerSection() {
  return (
    <>
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-[#0a0b18] px-6 py-24 text-white md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#0a0b18_0%,#1a3157_45%,#9b6b20_100%)] opacity-95" />
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#d6aa56]/25 blur-3xl" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="relative max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
          Hãy cùng nhau đến sớm<br />và thắp sáng VIFC
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
          <a href="#" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d6aa56] px-7 py-4 text-sm font-bold text-[#17130d] transition-colors hover:bg-[#e7c979]">Đăng ký ngay <ArrowRight size={17} /></a>
        </motion.div>
      </section>
    </>
  );
}
