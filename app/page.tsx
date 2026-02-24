"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useMenu } from "@/components/menu-context";
import { projects } from "@/lib/projects";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { menuOpen, preloaderDone } = useMenu();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={containerRef}
      className={`h-[100dvh] snap-y snap-mandatory overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "md:translate-y-0 translate-y-[50vh]" : "translate-y-0"
        }`}
    >
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
            className="flex shrink-0 w-full flex-col items-center justify-end pb-8 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              opacity: preloaderDone ? 1 : 0,
              transform: preloaderDone ? "translateY(0)" : "translateY(20px)",
              transitionDelay: i === 0 ? "400ms" : "0ms",
            }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="font-mono text-xs font-bold tracking-normal text-foreground/40 transition-colors hover:text-accent"
            >
              View
            </Link>
            <h2 className="mt-0.5 font-mono text-[13px] font-bold tracking-normal text-foreground text-center">
              {project.title} for {project.client}
            </h2>
          </div>
        </section>
      ))}
    </main>
  );
}