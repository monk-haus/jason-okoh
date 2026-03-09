"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const incrementsProjects = projects.filter((p) => p.tag === "INCREMENTS");

export default function IncrementsPage() {
    useEffect(() => {
        document.documentElement.style.background = "#1A1A1A";
        document.body.style.background = "#1A1A1A";
        return () => {
            document.documentElement.style.background = "";
            document.body.style.background = "";
        };
    }, []);

    return (
        <main className="fixed inset-0 overflow-y-auto bg-foreground text-background no-scrollbar">

            <section className="min-h-[100dvh] md:h-[100dvh] relative">
                <div className="w-full min-h-full md:h-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 pb-12 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative w-full h-[50vh] md:h-[75vh]"
                    >
                        <Image
                            src="/assets/images/dvany-cruz/cover.webp"
                            alt="Increments Vol. 3"
                            fill
                            className="object-contain object-left md:object-center"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col justify-center gap-6 md:gap-8 pb-10 md:pb-0"
                    >
                        <p className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight">
                            Jason launched Increments in 2025, his well rounded creative agency and production company to provide himself full creativity and space to fully express the ideas that weren&#39;t being brought to life. It&#39;s a full expression and insight into his mind, with his styling & directing being the focus in the imagery, assuring that there&#39;s something to leave with when being a witness to his work.
                        </p>

                        <motion.a
                            href="https://instagram.com/in.crements"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="font-mono font-bold text-base tracking-tight"
                        >
                            @in.crements
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {incrementsProjects.map((project) => (
                <section
                    key={project.id}
                    className="relative h-[100dvh] flex flex-col pt-16 pb-6 gap-6"
                >
                    <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-y-0 inset-x-6 md:inset-x-0">
                            <Image
                                src={project.hero}
                                alt={project.title}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                    <div className="flex shrink-0 w-full items-end justify-between pb-8 px-6 md:px-10 lg:px-16">
                        <h2 className="font-mono text-[9px] font-bold tracking-normal uppercase text-background">
                            {project.title} for {project.client}
                        </h2>
                        <Link
                            href={`/projects/${project.id}`}
                            className="font-mono text-[9px] font-bold tracking-normal uppercase text-background/40 transition-colors hover:text-accent"
                        >
                            View
                        </Link>
                    </div>
                </section>
            ))}

            <div
                className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
                style={{ backgroundImage: 'url("/assets/noise.png")' }}
            />
        </main>
    );
}
