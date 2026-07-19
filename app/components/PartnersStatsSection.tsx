"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const partnerLine = "Tổ chức bởi: IFC Pass In Việt Nam · Bảo trợ bởi: VIFC-HCMC và GOE Alliance · Tài trợ bởi: Tether, Mexc Venture · Đồng hành bởi: MBV, BNI, SFV";

const stats = [
  { value: 3, suffix: "", lineOne: "Buổi đã", lineTwo: "diễn ra" },
  { value: 100, suffix: "+", lineOne: "Chuyên gia", lineTwo: "đã tham dự" },
  { value: 12, suffix: "+", lineOne: "Episodes", lineTwo: "Q3 · 2026" },
];

export default function PartnersStatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-black/10 bg-[#f1efe8] text-black">
      <div className="flex h-20 items-stretch overflow-hidden border-b border-black/10 md:h-24">
        <div className="partner-marquee flex min-w-0 flex-1 items-center overflow-hidden" aria-label={partnerLine}>
          <div className="partner-marquee-track flex w-max items-center">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center pr-20" aria-hidden={group === 1}>
                <span className="whitespace-nowrap text-base font-extrabold uppercase tracking-[0.055em] text-black/80 md:text-xl lg:text-2xl">
                  {partnerLine}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat) => (
          <article key={`${stat.value}${stat.suffix}`} className="group relative flex min-h-52 items-center border-b border-black/10 px-8 py-10 last:border-b-0 md:min-h-64 md:border-b-0 md:border-r md:px-12 md:last:border-r-0 lg:min-h-72">
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#9b6b20] transition-transform duration-500 group-hover:scale-x-100" />
            <div>
              <p className="font-instrument text-7xl leading-none tracking-tight text-[#9b6b20] md:text-8xl lg:text-9xl">
                <CountUp target={stat.value} start={statsVisible} />{stat.suffix}
              </p>
              <p className="mt-5 text-xs leading-relaxed text-black/50 md:text-sm">
                {stat.lineOne}<br />{stat.lineTwo}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountUp({ target, start }: { target: number; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const duration = 1600;
    const startedAt = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}
