"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IncrementsPage() {
    return (
        <section className="w-full h-[100dvh] bg-foreground text-background overflow-y-auto md:overflow-hidden no-scrollbar relative">
            <div className="w-full min-h-full md:h-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 pb-12 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative w-full h-[50vh] md:h-[75vh] flex justify-start items-center"
                >
                    <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out cursor-pointer">
                        <Image
                            src="/assets/images/vol-one/vol-1-cover.webp"
                            alt="Increments Agency"
                            fill
                            className="object-contain object-left md:object-center"
                        />
                    </div>
                </motion.div>

                <div className="flex flex-col justify-start md:justify-center items-start h-full pb-10 md:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="max-w-xl space-y-6 md:space-y-8"
                    >
                        <p className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight">
                            Jason launched Increments in 2025, his well rounded creative agency and production company to provide himself full creativity and space to fully express the ideas that weren&#39;t being brought to life. It&#39;s a full expression and insight into his mind, with his styling & directing being the focus in the imagery, assuring that there&#39;s something to leave with when being a witness to his work.
                        </p>

                        <div className="pt-1 md:pt-4">
                            <motion.a
                                href="https://instagram.com/in.crements"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="block font-mono font-bold text-base md:text-lg tracking-tight cursor-pointer"
                            >
                                @in.crements
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div
                className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
                style={{ backgroundImage: 'url("/assets/noise.png")' }}
            />
        </section>
    );
}