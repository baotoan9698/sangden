export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07090d] px-6 py-20 text-white md:px-10 md:py-24 lg:px-14">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(43,86,160,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute -right-52 -top-52 h-[560px] w-[560px] rounded-full border-[28px] border-white/[0.025]" />
      <div className="pointer-events-none absolute -bottom-72 right-8 h-[520px] w-[520px] rounded-full border-[28px] border-white/[0.02]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.7fr] md:gap-20 lg:grid-cols-[0.9fr_1.5fr] lg:gap-32">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Stay connected</h2>
          <p className="mt-5 text-base text-white/50 md:text-lg">Read our blogs for updates &amp; project highlights</p>
        </div>

        <div className="grid gap-14 sm:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-white/35 md:text-base">Get in touch</p>
            <div className="mt-5 flex flex-col items-start gap-2 text-xl font-semibold tracking-tight md:text-2xl">
              <a href="tel:+84964931661" className="transition-colors hover:text-[#d6aa56]">(+84) 964 93 1661</a>
              <a href="mailto:partner@goealliance.org" className="break-all transition-colors hover:text-[#d6aa56]">partner@goealliance.org</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/35 md:text-base">Address</p>
            <p className="mt-5 text-lg font-semibold md:text-xl">GOE Alliance Office</p>
            <address className="mt-3 max-w-xl text-base not-italic leading-relaxed text-white/50 md:text-lg">
              IFC Building, 8 Nguyen Hue Street, Saigon Ward, Ho Chi Minh City
            </address>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 GOE Alliance</span>
        <span>VIFC · Sáng Đèn</span>
      </div>
    </footer>
  );
}
