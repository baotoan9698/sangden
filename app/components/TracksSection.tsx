"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const tracks = [
  {
    number: "01",
    label: "Hợp phần 01 · Roundtable Series",
    title: "Sáng Đèn Event Series",
    description: "Chuỗi roundtable chuyên sâu kết nối câu hỏi đầu tư, thị trường và những cánh cửa đang mở trong VIFC. Mỗi buổi là một điểm gặp giữa chuyên gia, doanh nghiệp và cộng đồng Builder.",
    bullets: ["Bi-weekly · 90 phút · Miễn phí", "Chủ đề: VIFC · Tài sản số · Hàng hóa · RWA", "Co-host cùng chuyên gia và doanh nghiệp dẫn đầu", "Nội dung chuyên sâu trên Zalo và LinkedIn"],
    action: "Đăng ký tham dự",
  },
  {
    number: "02",
    image: "/tracks/vifc-challenge.png",
    imageAlt: "VIFC Challenge",
    label: "Hợp phần 02 · Innovation Challenge",
    title: "VIFC Challenge",
    description: "Cuộc thi xây dựng giải pháp tài chính số cho VIFC. Không chỉ pitch ý tưởng — các đội phát triển prototype thật, kết nối Champion thật và hướng tới khả năng pilot thực tế.",
    bullets: ["6 vòng phát triển và cố vấn chuyên sâu", "Team Formation Day dành cho Builder", "Champion doanh nghiệp cam kết bài toán thật", "Demo Day tại BNI Summit 2026"],
    action: "Khám phá thử thách",
  },
  {
    number: "03",
    image: "/tracks/vifc-builder-network.png",
    imageAlt: "VIFC Builder Network",
    label: "Hợp phần 03 · Builder Network",
    title: "VIFC Builder Network",
    description: "Mạng lưới dành cho 10.000 Builder tiên phong — nơi nguồn lực, tri thức và cơ hội hợp tác được kết nối để cùng xây dựng hệ sinh thái tài chính quốc tế tại TP.HCM.",
    bullets: ["Cộng đồng Builder có chọn lọc", "Mentor Office Hours hàng tháng", "Cơ hội dự án, việc làm và hợp tác", "Kết nối trực tiếp cùng mạng lưới VIFC"],
    action: "Gia nhập cộng đồng",
  },
];

export default function TracksSection() {
  return (
    <section className="overflow-hidden bg-[#f1ede3] text-[#17130d]">
      <div className="border-b border-black/10 px-6 py-20 md:px-10 md:py-24 lg:px-14">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
          Ba track vận hành song song,<br /><em className="font-normal italic text-black/40">nuôi nhau.</em>
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

            <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75 }} className={`flex flex-col justify-center bg-[#f1ede3] px-6 py-16 md:px-10 lg:px-14 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d6aa56]">{track.label}</p>
              <h3 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">{track.title}</h3>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">{track.description}</p>

              <ul className="mt-8 max-w-2xl">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4 border-b border-black/10 py-3 text-xs text-black/65 md:text-sm">
                    <span className="text-[#d6aa56]">—</span><span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="mt-9 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b6b20] transition-colors hover:text-black">
                {track.action} <ArrowRight size={14} />
              </a>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}
