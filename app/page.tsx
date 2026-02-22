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
          className="relative h-[100dvh] snap-start flex flex-col md:flex-row md:px-10 lg:px-16 pt-16 pb-6 gap-6 md:gap-0"
        >
          <div
            className="relative flex-1 w-full md:h-full md:w-[65%] overflow-hidden flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              opacity: preloaderDone ? 1 : 0,
              transform: preloaderDone ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
              transitionDelay: i === 0 ? "200ms" : "0ms",
            }}
          >
            <Image
              src={project.hero}
              alt={project.title}
              fill
              className="object-contain object-center"
              priority={i === 0}
            />
          </div>

          <div
            className="flex shrink-0 w-full md:w-[35%] md:h-full flex-col items-center justify-end pb-8 md:justify-center md:pb-0 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              opacity: preloaderDone ? 1 : 0,
              transform: preloaderDone ? "translateY(0)" : "translateY(20px)",
              transitionDelay: i === 0 ? "400ms" : "0ms",
            }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-foreground/40 transition-colors hover:text-accent"
            >
              VIEW CASE
            </Link>
            <h2 className="mt-4 font-mono text-[13px] font-bold tracking-[0.15em] uppercase text-foreground text-center">
              {project.title}
            </h2>
            <p className="mt-1 font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-foreground text-center">
              FOR {project.client}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}