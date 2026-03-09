"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useMenu } from "@/components/menu-context";
import { projects } from "@/lib/projects";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { menuOpen, preloaderDone, setHeroActive } = useMenu();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight);
      setCurrentIndex(index);
      setHeroActive(index === 0);
    };

    setHeroActive(true);
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      setHeroActive(false);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className={`h-[100dvh] snap-y snap-mandatory overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "md:translate-y-0 translate-y-[50vh]" : "translate-y-0"
        }`}
    >
      {/* Hero section */}
      <section className="relative h-[100dvh] snap-start overflow-hidden">
        <video
          src="/assets/images/goddy-q/vid-1.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-white text-2xl md:text-3xl font-bold tracking-normal uppercase">Jason Okoh</span>
            <span className="text-white/60 text-[9px] font-bold tracking-normal uppercase" style={{ fontFamily: "var(--font-pt-mono)" }}>Stylist & Director</span>
            <span className="text-white/60 text-[9px] font-bold tracking-normal uppercase" style={{ fontFamily: "var(--font-pt-mono)" }}>London, UK</span>
          </div>
        </div>
      </section>

      {projects.map((project, i) => (
        <section
          key={i}
          className="relative h-[100dvh] snap-start flex flex-col pt-16 pb-6 gap-6"
        >
          <div
            className="relative flex-1 w-full overflow-hidden flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              opacity: preloaderDone ? 1 : 0,
              transform: preloaderDone ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
              transitionDelay: i === 0 ? "200ms" : "0ms",
            }}
          >
            <div className="absolute inset-y-0 inset-x-6 md:inset-x-0">
              {/\.(webm|mp4|mov)$/i.test(project.hero) ? (
                <video
                  src={project.hero}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain object-center"
                />
              ) : (
                <Image
                  src={project.hero}
                  alt={project.title}
                  fill
                  className="object-contain object-center"
                  priority={i === 0}
                />
              )}
            </div>
          </div>

          <div
            className="flex shrink-0 w-full items-end justify-between pb-8 px-6 md:px-10 lg:px-16 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              opacity: preloaderDone ? 1 : 0,
              transform: preloaderDone ? "translateY(0)" : "translateY(20px)",
              transitionDelay: i === 0 ? "400ms" : "0ms",
            }}
          >
            <h2 className="font-mono text-[9px] font-bold tracking-normal uppercase text-foreground">
              {project.title} for {project.client}
            </h2>
            <Link
              href={`/projects/${project.id}`}
              className="font-mono text-[9px] font-bold tracking-normal uppercase text-foreground/40 transition-colors hover:text-accent"
            >
              View
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
}