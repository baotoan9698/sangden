"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative flex min-h-[850px] items-start justify-center overflow-hidden bg-[#050606] px-6 pb-48 pt-28 text-center text-white md:min-h-[920px] md:pt-36">
      <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_34%,rgba(255,255,255,.6)_0_1px,transparent_1.5px),radial-gradient(circle_at_75%_22%,rgba(255,255,255,.45)_0_1px,transparent_1.5px),radial-gradient(circle_at_62%_46%,rgba(255,255,255,.35)_0_1px,transparent_1.5px)] [background-size:190px_170px,230px_210px,160px_200px]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[radial-gradient(ellipse_at_center_bottom,_rgba(55,85,115,0.54)_0%,_rgba(32,57,68,0.28)_29%,_rgba(9,10,14,0)_68%)]" />
      <div className="absolute -bottom-[25vw] left-1/2 h-[42vw] w-[120vw] -translate-x-1/2 rounded-[50%] border-t-2 border-white/80 bg-[#020303] shadow-[0_-6px_28px_rgba(207,235,255,0.45)]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
      >
        <p className="liquid-glass mb-7 rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 md:text-xs">
          <span className="relative z-10">VIFC Builders · Early Access</span>
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
          Trở thành 1 trong <span className="font-instrument italic text-[#d6aa56]">10.000 Builder</span><br className="hidden md:block" /> tiên phong của VIFC
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          Cộng đồng đầu tiên của Trung tâm Tài chính Quốc tế Việt Nam tại TP.HCM — chính thống, chuyên nghiệp, được bảo trợ.
        </p>

        <div className="mt-9 flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-left backdrop-blur-md">
          <Users size={20} className="text-[#d6aa56]" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.12em] text-white/45">Đã có</p>
          <strong className="font-instrument text-2xl font-normal text-white">2.847</strong>
          <p className="text-xs uppercase tracking-[0.12em] text-white/45">người đăng ký</p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-[#d6aa56]/35 bg-[#d6aa56]/10 px-7 py-4 text-sm text-[#efd18e]">
            Cảm ơn bạn! Thông tin tham gia waitlist đã được ghi nhận.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/45 p-1.5 shadow-2xl backdrop-blur-xl sm:flex-row" aria-label="Đăng ký VIFC waitlist">
            <label htmlFor="waitlist-email" className="sr-only">Email của bạn</label>
            <input id="waitlist-email" name="email" type="email" required autoComplete="email" placeholder="Nhập địa chỉ email của bạn" className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/35" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-[#eadcb9]">
              Tham gia ngay <ArrowRight size={17} />
            </motion.button>
          </form>
        )}

        <p className="mt-5 text-xs text-white/30">Không spam. Chỉ những cập nhật quan trọng từ cộng đồng VIFC.</p>
      </motion.div>
    </section>
  );
}
