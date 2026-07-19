"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sessions = [
  {
    number: "01",
    day: "VIFC Day 1",
    date: "19 / 06 / 2026",
    title: "Miền đất hứa vừa mở",
    description: "Buổi workshop đầu tiên định hình VIFC là gì và tại sao những người đến sớm là người quan trọng nhất?",
    guests: "Mirae Asset · MEXC · Deloitte · EY · Shinhan",
    gallery: [
      "/events/session-01/vifc-day-1-01.jpg",
      "/events/session-01/vifc-day-1-02.jpg",
      "/events/session-01/vifc-day-1-03.jpg",
    ],
  },
  {
    number: "02",
    day: "VIFC Day 2",
    date: "03 / 07 / 2026",
    title: "Dòng vốn gặp tầm nhìn",
    description: "Các nhà đầu tư, chuyên gia và doanh nghiệp cùng giải mã dòng vốn mới, hạ tầng số và những cơ hội tiên phong tại TP.HCM.",
    guests: "Vietcombank · BNI Việt Nam · SVF · MBV",
    gallery: [
      "/events/session-02/vifc-day-2-networking.jpg",
      "/events/session-02/vifc-day-2-audience.jpg",
      "/events/session-02/vifc-day-2-presentation.jpg",
    ],
  },
];

export default function FirstSessionsSection() {
  return (
    <section className="overflow-hidden bg-[#f1efe8] text-[#15151b]">
      <div className="border-b border-black/10 px-6 pb-20 pt-24 md:px-10 md:pb-24 md:pt-28 lg:px-14">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b6b20]/70">
          02 · Từ những buổi đầu tiên
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-7 text-center text-[clamp(1.8rem,6vw,6rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block whitespace-nowrap">Sáng Đèn đã bắt đầu.</span>
          <em className="mt-2 block font-normal italic text-black/40">Và tiếp tục sáng.</em>
        </motion.h2>
      </div>

      <div>
        {sessions.map((session, index) => (
          <motion.article key={session.number} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.08 }} className="group border-b border-black/10">
            <div className="flex min-h-[310px] flex-col items-center justify-center bg-[#f1efe8] px-6 py-16 text-center md:min-h-[350px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a2f5d]/60">Buổi {session.number} · {session.day}</p>
              <p className="mt-2 text-xs font-medium tracking-[0.1em] text-[#9b6b20]">{session.date}</p>
              <h3 className="mt-4 text-3xl font-semibold italic tracking-tight text-[#9b6b20] md:text-4xl">{session.title}</h3>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-black/55 md:text-base">{session.description}</p>
              <p className="mt-5 max-w-3xl text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/40">{session.guests}</p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-[#f1efe8] sm:grid-cols-3">
              {session.gallery.map((image, imageIndex) => (
                <div key={`${session.number}-${image}`} className="group/photo relative aspect-video overflow-hidden bg-[#17254a]">
                  <Image src={image} alt={`Hình ảnh buổi ${session.number} số ${imageIndex + 1}`} fill quality={90} sizes="(min-width: 640px) 80vw, 100vw" className="object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b18]/45 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
