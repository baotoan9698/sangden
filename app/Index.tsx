"use client";

import { useCallback, useRef, useState } from "react";
import ServicesSection from "./components/ServicesSection";
import PartnersStatsSection from "./components/PartnersStatsSection";
import StoriesStackSection from "./components/StoriesStackSection";
import WaitlistSection from "./components/WaitlistSection";
import FirstSessionsSection from "./components/FirstSessionsSection";
import TracksSection from "./components/TracksSection";
import PioneerSection from "./components/PioneerSection";
import Footer from "./components/Footer";

const HERO_VIDEO = "/hero-video.mp4?v=1080p-slow90";

export default function Index() {
  const [registrationOpen, setRegistrationOpen] = useState(false);
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
        <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover object-center" style={{ opacity: 0 }} src={HERO_VIDEO} muted autoPlay playsInline preload="auto" onLoadedData={handleCanPlay} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/55" />

        <nav className="relative z-20 flex justify-center px-5 py-7 md:px-8 md:py-8" aria-label="Main navigation">
          <a href="#" className="flex flex-col items-center text-center" aria-label="Chiến Dịch Sáng Đèn home">
            <h1 className="whitespace-nowrap bg-gradient-to-b from-white via-[#fff1b3] to-[#e7b928] bg-clip-text py-2 text-[clamp(1.55rem,3.4vw,3.5rem)] font-extrabold uppercase leading-[1.2] tracking-[0.035em] text-transparent drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)]">
              Chiến Dịch Sáng Đèn
            </h1>
            <span className="mt-2.5 whitespace-nowrap text-[clamp(0.55rem,0.95vw,0.9rem)] font-semibold tracking-[0.01em] text-white/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.75)]">
              Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM
            </span>
          </a>
        </nav>
      </section>
      <PartnersStatsSection />
      <StoriesStackSection />
      <WaitlistSection onJoin={() => setRegistrationOpen(true)} />
      <FirstSessionsSection />
      <TracksSection />
      <ServicesSection />
      <PioneerSection formOpen={registrationOpen} onFormOpenChange={setRegistrationOpen} />
      <Footer />
    </main>
  );
}
