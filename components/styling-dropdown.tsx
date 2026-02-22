"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "./menu-context";

const stylingProjects = [
  { id: "vol-1", title: "Vol. One", client: "Increments", image: "/assets/images/vol-one/vol-1-cover.webp" },
  { id: "vol-2", title: "Vol. Two", client: "Increments", image: "/assets/images/vol-two/vol-2-cover.webp" },
  { id: "vol-3", title: "Vol. Three", client: "Increments", image: "/assets/images/vol-three/vol-3-cover.webp" },
];

export default function StylingDropdown() {
  const { stylingOpen, setStylingOpen, menuOpen } = useMenu();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  const pathname = usePathname();
  const isDark = pathname === "/increments";

  const bgColor = isDark ? "bg-foreground" : "bg-background";
  const textColor = isDark ? "text-background" : "text-foreground";
  const washColor = isDark ? "text-background/40" : "text-wash";

  useEffect(() => {
    if (stylingOpen && markerRef.current) {
      setLeftOffset(markerRef.current.getBoundingClientRect().left);
    }
  }, [stylingOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (markerRef.current) {
        setLeftOffset(markerRef.current.getBoundingClientRect().left);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!stylingOpen) return null;

  return (
    <div className={`fixed inset-x-0 top-[42px] bottom-0 z-30 ${bgColor} transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "md:translate-y-0 translate-y-[50vh]" : "translate-y-0"
      }`}>
      <div className="hidden md:block h-full w-full">
        {hoveredIndex !== null && (
          <div className="absolute left-10 lg:left-16 top-2 w-[300px] h-[420px]">
            <Image
              src={stylingProjects[hoveredIndex].image}
              alt={stylingProjects[hoveredIndex].title}
              fill
              className="object-contain object-top transition-opacity duration-300"
            />
          </div>
        )}

        <div className="flex justify-between w-full px-10 lg:px-16 pt-2 h-0 overflow-hidden">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase invisible">JASON OKOH</span>
          <span ref={markerRef} className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase invisible">STYLING</span>
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase invisible">EXPERTISE</span>
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase invisible">INCREMENTS</span>
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase invisible">INQUIRY</span>
        </div>

        <div
          className="absolute top-2 flex flex-col items-start"
          style={{ left: `${leftOffset}px` }}
        >
          {stylingProjects.map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.id}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setStylingOpen(false)}
              className={`font-mono text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 leading-loose ${hoveredIndex === null
                ? textColor
                : hoveredIndex === i
                  ? textColor
                  : washColor
                }`}
            >
              {project.title} — {project.client}
            </Link>
          ))}
        </div>
      </div>

      <nav className="md:hidden flex flex-col px-6 pt-6">
        {stylingProjects.map((project, i) => (
          <Link
            key={i}
            href={`/projects/${project.id}`}
            onClick={() => setStylingOpen(false)}
            className={`font-mono text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 leading-loose ${hoveredIndex === null
              ? textColor
              : hoveredIndex === i
                ? textColor
                : washColor
              }`}
          >
            {project.title} — {project.client}
          </Link>
        ))}
      </nav>
    </div>
  );
}