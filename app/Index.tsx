"use client";

import { useCallback, useRef } from "react";
import { Globe } from "lucide-react";
import AboutSection from "./components/AboutSection";
import FeaturedVideoSection from "./components/FeaturedVideoSection";
import PhilosophySection from "./components/PhilosophySection";
import ServicesSection from "./components/ServicesSection";

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

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

        <nav className="relative z-20 px-6 py-6" aria-label="Main navigation">
          <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
            <div className="relative z-10 flex items-center">
              <Globe size={24} aria-hidden="true" />
              <span className="ml-2 text-lg font-semibold">Asme</span>
              <div className="ml-8 hidden gap-8 md:flex">
                {['Features', 'Pricing', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/80 hover:text-white">{item}</a>)}
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <button className="text-sm font-medium">Sign Up</button>
              <button className="liquid-glass rounded-full px-6 py-2 text-sm font-medium"><span className="relative z-10">Login</span></button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-white/65 md:text-sm">Chiến dịch cộng đồng · GOE Alliance · 2026</p>
          <h1 className="font-instrument whitespace-nowrap text-7xl leading-[0.82] tracking-tight md:text-8xl lg:text-9xl">Chiến dịch  <em className="italic">sáng đèn</em>.</h1>
          <p className="mt-9 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM</p>
        </div>
      </section>
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  );
}
