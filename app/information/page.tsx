"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InformationPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("READ MORE");

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
                    className="w-full md:max-w-[80%]"
                >
                    <p
                        className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight pb-1"
                    >
                        Jason Okoh is a Guyanese and Nigerian Stylist & Director from London whose work highlights not only the nostalgia and memorabilia of his interests now and growing up, but draws out inspiration from different visuals and locations; with some being London, New York & Japanese street culture and style.
                    </p>

                    <div
                        className="relative overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                        style={{ maxHeight: isExpanded ? "2000px" : "0px" }}
                    >
                        <p
                            className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight pt-6 pb-1"
                        >
                            Jason also launched Increments in 2025, his well rounded creative agency and production company to provide himself full creativity and space to fully express the ideas that weren&#39;t being brought to life. It&#39;s a full expression and insight into his mind, with his styling & directing being the focus in the imagery, assuring that there&#39;s something to leave with when being a witness to his work.
                        </p>
                    </div>

                    <button
                        onClick={handleToggle}
                        className="mt-6 font-mono font-bold text-sm tracking-widest uppercase text-foreground/30 hover:text-foreground transition-colors duration-300"
                    >
                        {buttonText}
                    </button>

                    <div className="pt-8 md:pt-12 flex flex-col gap-2">
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
                        <motion.a
                            href="https://instagram.com/in.crements"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block font-mono font-bold text-base md:text-lg tracking-tight cursor-pointer"
                        >
                            @in.crements
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
