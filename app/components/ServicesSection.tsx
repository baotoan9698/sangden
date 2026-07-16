"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    title: "Thị trường trong nước đang bão hòa",
    description: "Cạnh tranh nội địa ngày càng khốc liệt, biên lợi thế thu hẹp. Người đi trước cần một sân chơi mới có quy chuẩn quốc tế.",
  },
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
    title: "VIFC là cánh cửa go-global",
    description: "Trung tâm Tài chính Quốc tế đặt tại TP.HCM mở ra hạ tầng, mạng lưới và chuẩn mực để doanh nghiệp Việt vươn ra khu vực.",
  },
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
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
                <video src={reason.video} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" muted autoPlay loop playsInline preload="auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex min-h-[270px] flex-col p-6 md:p-7">
                <div className="flex justify-end">
                  <span className="liquid-glass rounded-full p-2">
                    <ArrowUpRight className="relative z-10" size={17} />
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{reason.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
