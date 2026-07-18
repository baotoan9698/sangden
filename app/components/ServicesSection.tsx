"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const reasons = [
  {
    image: "/reasons/domestic-market-saturation.png",
    title: "Thị trường trong nước đang bão hòa",
    description: "Cạnh tranh nội địa ngày càng khốc liệt, biên lợi thế thu hẹp. Người đi trước cần một sân chơi mới có quy chuẩn quốc tế.",
  },
  {
    image: "/reasons/vifc-global-gateway.png",
    title: "VIFC là cánh cửa go-global",
    description: "Trung tâm Tài chính Quốc tế đặt tại TP.HCM mở ra hạ tầng, mạng lưới và chuẩn mực để doanh nghiệp Việt vươn ra khu vực.",
  },
  {
    image: "/reasons/early-leadership.png",
    title: "Ai hiểu trước, dẫn trước",
    description: "Chuẩn bị năng lực, quan hệ và vị thế sớm là cách bền vững nhất để không bị bỏ lại trong chu kỳ chuyển dịch tiếp theo.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={seen ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Vì sao là lúc này?</h2>
          <p className="mt-4 text-sm text-white/45 md:text-base">Ba lý do chiến lược để bạn có mặt trong đợt đầu tiên.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article key={reason.title} initial={{ opacity: 0, y: 50 }} animate={seen ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.15 }} className="liquid-glass group overflow-hidden rounded-3xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="relative z-10 min-h-[210px] p-6 md:p-7">
                <h3 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">{reason.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{reason.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
