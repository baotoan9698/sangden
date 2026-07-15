"use client";

import { useCallback, useRef } from "react";
import { Menu, Sparkles } from "lucide-react";
import AboutSection from "./components/AboutSection";
import FeaturedVideoSection from "./components/FeaturedVideoSection";
import PhilosophySection from "./components/PhilosophySection";
import ServicesSection from "./components/ServicesSection";
import PartnersStatsSection from "./components/PartnersStatsSection";
import StoriesStackSection from "./components/StoriesStackSection";

const HERO_VIDEO = "/hero-video.mp4";

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fadeTo = useCallback((target: number, duration = 500) => {
    const video = videoRef.current;
    if (!video) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const startOpacity = Number.parseFloat(video.style.opacity || "0");
    const startTime = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      video.style.opacity = String(startOpacity + (target - startOpacity) * progress);
      if (progress < 1) animationRef.current = requestAnimationFrame(frame);
    };
    animationRef.current = requestAnimationFrame(frame);
  }, []);

  const handleCanPlay = () => {
    videoRef.current?.play().catch(() => undefined);
    fadingOutRef.current = false;
    fadeTo(1);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    if (video.duration - video.currentTime <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      fadeTo(0);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    window.setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => undefined);
      fadingOutRef.current = false;
      fadeTo(1);
    }, 100);
  };

  return (
    <main className="bg-black text-white">
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover object-bottom" style={{ opacity: 0 }} src={HERO_VIDEO} muted autoPlay playsInline preload="auto" onCanPlay={handleCanPlay} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/55" />

        <nav className="relative z-20 grid grid-cols-2 items-start px-6 py-7 md:grid-cols-3 md:px-8" aria-label="Main navigation">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white md:text-sm">
            <Sparkles size={25} strokeWidth={1.6} aria-hidden="true" />
            <span>GOE Alliance · 2026</span>
          </div>

          <a href="#" className="font-instrument hidden justify-self-center text-3xl leading-none tracking-wide text-white md:block" aria-label="Sáng Đèn home">
            Sáng <em className="italic">Đèn</em>
          </a>

          <button className="flex items-center gap-3 justify-self-end text-sm font-semibold uppercase tracking-wider text-white md:text-base" aria-label="Open menu">
            <span>Menu</span><Menu size={21} strokeWidth={1.5} />
          </button>
        </nav>

        <div className="relative z-10 mt-auto px-6 pb-8 md:px-8 md:pb-7">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white md:text-sm">Chiến dịch cộng đồng</p>
            <h1 className="font-instrument max-w-xl text-5xl leading-[0.94] tracking-tight text-white md:text-6xl lg:text-7xl">
              Chiến dịch <em className="italic">Sáng Đèn</em>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM</p>
          </div>
        </div>
      </section>
      <PartnersStatsSection />
      <StoriesStackSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  );
}
