const partners = ["VIFC HCMC", "SGGP", "TTXVN", "BNI Việt Nam", "SVF", "MBV", "FTU"];

const stats = [
  { value: "3", lineOne: "Buổi đã", lineTwo: "diễn ra" },
  { value: "100+", lineOne: "Chuyên gia", lineTwo: "đã tham dự" },
  { value: "12+", lineOne: "Episodes", lineTwo: "Q3 · 2026" },
];

export default function PartnersStatsSection() {
  return (
    <section className="border-y border-black/10 bg-[#f1efe8] text-black">
      <div className="flex h-16 items-stretch overflow-hidden border-b border-black/10 md:h-20">
        <div className="relative z-10 flex shrink-0 items-center border-r border-black/10 bg-[#f1efe8] px-5 md:px-10 lg:px-12">
          <p className="max-w-[115px] text-[9px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-black/45 md:max-w-none md:text-[10px]">
            Được bảo trợ và đồng hành bởi
          </p>
        </div>

        <div className="partner-marquee flex min-w-0 flex-1 items-center overflow-hidden" aria-label={`Đối tác: ${partners.join(", ")}`}>
          <div className="partner-marquee-track flex w-max items-center">
            {[...partners, ...partners].map((partner, index) => (
              <span key={`${partner}-${index}`} className="mx-8 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-black/70 md:mx-12 md:text-sm">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.value} className="group relative flex min-h-52 items-center border-b border-black/10 px-8 py-10 last:border-b-0 md:min-h-64 md:border-b-0 md:border-r md:px-12 md:last:border-r-0 lg:min-h-72">
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#9b6b20] transition-transform duration-500 group-hover:scale-x-100" />
            <div>
              <p className="font-instrument text-7xl leading-none tracking-tight text-[#9b6b20] md:text-8xl lg:text-9xl">{stat.value}</p>
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
