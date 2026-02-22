"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function InformationPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const [collapsedHeight, setCollapsedHeight] = useState<number>(0);
    const [buttonText, setButtonText] = useState("READ MORE");

    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const checkTruncation = () => {
            if (paragraphRef.current) {
                const computedStyle = window.getComputedStyle(paragraphRef.current);
                const lineHeight = parseFloat(computedStyle.lineHeight);

                const targetHeight = window.innerHeight * 0.3;

                const maxLines = Math.floor(targetHeight / lineHeight);

                const exactHeight = maxLines * lineHeight;

                if (paragraphRef.current.scrollHeight > exactHeight + 5) {
                    setIsTruncated(true);
                    setCollapsedHeight(exactHeight);
                } else {
                    setIsTruncated(false);
                }
            }
        };

        checkTruncation();
        setTimeout(checkTruncation, 100);
        window.addEventListener("resize", checkTruncation);
        return () => window.removeEventListener("resize", checkTruncation);
    }, []);

    const handleToggle = () => {
        if (isExpanded) {
            setIsExpanded(false);
            setTimeout(() => setButtonText("READ MORE"), 800);
        } else {
            setIsExpanded(true);
            setButtonText("READ LESS");
        }
    };

    return (
        <section className="w-full min-h-[100dvh] bg-background text-foreground flex flex-col justify-start px-6 md:px-10 lg:px-16 pt-[60px] pb-12 relative overflow-x-hidden">

            <div className="w-full flex flex-col items-start relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full"
                >
                    <div
                        className="relative overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                        style={{ maxHeight: isExpanded ? "2000px" : (collapsedHeight ? `${collapsedHeight}px` : "30vh") }}
                    >
                        <p
                            ref={paragraphRef}
                            className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight pb-1"
                        >
                            Jason Okoh is a creative director and stylist focusing on finding vulnerability in visual direction and brand identity.
                            This is a placeholder paragraph. You should replace this with your actual biography or information.
                            Make sure to add enough text here so that it naturally wraps and exceeds the thirty percent viewport height threshold on desktop screens,
                            which will then automatically trigger the truncation logic and display the read more button below.
                            Believing that significant impact is the result of small, deliberate, and continuous improvements,
                            Jason bridges the gap between raw authentic aesthetic and elevated editorial execution.
                        </p>
                    </div>

                    {isTruncated && (
                        <button
                            onClick={handleToggle}
                            className="mt-6 font-mono font-bold text-sm tracking-widest uppercase text-foreground/30 hover:text-foreground transition-colors duration-300"
                        >
                            {buttonText}
                        </button>
                    )}

                    <div className="pt-8 md:pt-12">
                        <motion.a
                            href="https://instagram.com/jaseokoh"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block font-mono font-bold text-base md:text-lg tracking-tight cursor-pointer"
                        >
                            @jaseokoh
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div
                className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
                style={{ backgroundImage: 'url("/assets/noise.png")' }}
            />
        </section>
    );
}