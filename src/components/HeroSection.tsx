"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Code, Database, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import PortfolioImage from "./PortfolioImage";

const icons = [
    { Icon: Code, color: "text-brand-purple", x: -150, y: -100 },
    { Icon: Database, color: "text-brand-blue", x: 150, y: -120 },
    { Icon: Server, color: "text-green-400", x: -180, y: 100 },
    { Icon: Smartphone, color: "text-pink-400", x: 120, y: 80 },
];

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    const rotateX = useTransform(springY, [0, 1000], [2, -2]);
    const rotateY = useTransform(springX, [0, 1920], [-2, 2]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Ultra-Premium Mesh Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                    className="absolute w-[800px] h-[800px] bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
                />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 dark:bg-brand-blue/15 rounded-full blur-[150px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/10 dark:bg-brand-purple/15 rounded-full blur-[150px] animate-float opacity-50 [animation-delay:2s]" />
            </div>

            {/* Premium Grain Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-1" />

            {/* Floating Tech Arsenal */}
            {icons.map(({ Icon, color, x, y }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1, x, y }}
                    style={{
                        rotateX,
                        rotateY,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 50
                    }}
                    className={`absolute hidden md:block ${color} z-10 pointer-events-none`}
                >
                    <Icon size={44} className="animate-float" />
                </motion.div>
            ))}

            <div className="z-20 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center lg:text-left flex-1"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-brand-purple font-medium text-sm mb-8 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                        </span>
                        Available for Work
                    </motion.div>

                    <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-10 select-none">
                        <motion.span
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            animate={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="block bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground to-foreground/40"
                        >
                            MUKSHITH
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-3xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-tight font-medium tracking-tight"
                    >
                        Crafting <span className="text-foreground">immaculate digital experiences</span> with precision and modern aesthetics.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group overflow-hidden rounded-full shadow-2xl"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

                            <Link
                                href="/projects"
                                className="px-12 py-5 bg-foreground text-background font-bold text-lg flex items-center justify-center gap-3 transition-colors"
                            >
                                View Portfolio <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground), 0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full overflow-hidden"
                        >
                            <a
                                href="https://drive.google.com/file/d/1NEfpcgCZXVi8icxU9Ekbu8TizbTOGmue/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 border-[1.5px] border-foreground/10 text-foreground font-bold text-lg flex items-center justify-center gap-3 transition-all hover:border-foreground"
                            >
                                Get Resume <ArrowRight size={20} className="rotate-90" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <PortfolioImage />
                </div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-16 bg-linear-to-b from-foreground/0 via-foreground to-foreground/0"
                />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
            </motion.div>
        </section>
    );
}

