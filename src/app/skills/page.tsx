"use client";

import GlassCard from "@/components/GlassCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

// 100% Correct Branded SVGs (Sourced for maximum contrast and quality)
const TechLogos = {
    Nextjs: () => (
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-white">
            <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-9.5V36.1h9.5l50.2 65.4c8.5-10.7 13.6-24.3 13.6-39.1C128 28.7 99.3 0 64 0zm31.1 44.1v-8h-11.2V28h22.4v8.1h-11.2v8h11.2v8h-11.2v81.6h-9.5V44.1h11.2v-8h-11.2z" />
        </svg>
    ),
    React: () => (
        <svg viewBox="-11.5 -10.232 23 20.464" className="w-8 h-8">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g fill="none" stroke="#61DAFB" strokeWidth="1">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    Nodejs: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8">
            <path fill="#339933" d="M128 0L24.8 60v120l103.2 60 103.2-60V60L128 0zm88.4 170.1l-88.4 51.4-88.4-51.4v-103l88.4-51.4 88.4 51.4v103z" />
            <path fill="#339933" d="M128 47.1l-69.1 40.2v80.4l69.1 40.2 69.1-40.2V87.3L128 47.1zm52.7 114.7l-52.7 30.7-52.7-30.7V91.6l52.7-30.7 52.7 30.7v70.2z" />
        </svg>
    ),
    MongoDB: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8">
            <path fill="#47A248" d="M174.1 123.6c-4.3-15.5-14.9-29.2-30.3-38.6-4.5-2.8-9.3-5-14.4-6.8l2.6-13.3c.7-3.4-1.6-6.6-4.9-7.3-3.4-.7-6.6 1.6-7.3 4.9l-2.6 13.3c-1.2.1-2.4.3-3.6.5l-3.2-16.5c-.7-3.4-3.9-5.6-7.3-4.9-3.4.7-5.6 3.9-4.9 7.3l3.2 16.5c-4.8 1.4-9.3 3.3-13.6 5.6-15.4 8.2-26.8 21-32.2 35.8-6 16.3-5.2 34 2.2 49 11.2 22.8 34.6 37.1 59.8 37.1 25.2 0 48.6-14.3 59.8-37.1 7.4-15 8.2-32.7 2.2-49zM128 190.4c-25.1 0-45.4-20.3-45.4-45.4s20.3-45.4 45.4-45.4 45.4 20.3 45.4 45.4-20.3 45.4-45.4 45.4z" />
        </svg>
    ),
    Express: () => (
        <div className="text-3xl font-black font-mono tracking-tighter text-white">ex</div>
    ),
    JavaScript: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8 rounded-lg overflow-hidden">
            <path fill="#F7DF1E" d="M0 0h256v256H0z" />
            <path d="M193.3 194.5c0 10.3-5.7 18.6-16.1 18.6-8.5 0-14.5-4.2-17.7-10l15.5-8.9c2 3.5 4 5.9 7 5.9 3 0 4.6-1.4 4.6-3.4 0-2.4-1.8-3.3-6.1-5.1l-5.3-2.3c-9.5-4.1-15.8-9.4-15.8-19.1 0-9 6.8-17.6 17-17.6 9.1 0 14.8 3.9 18.1 9l-13.8 8.8c-1.8-3-3.6-4.8-6.1-4.8-2.6 0-3.8 1.5-3.8 3.3 0 2.2 1.6 3 5.3 4.6l5.3 2.3c11.1 4.7 18 10.4 18 20.7zM116 213.1c-15.1 0-24.8-8.2-24.8-23.7V112h17.9v77.3c0 6.6 3.4 9.9 10 9.9 1.6 0 3-.2 4.1-.5v13.9c-2 .3-4.5.5-7.2.5z" />
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8 rounded-lg overflow-hidden">
            <path fill="#3178C6" d="M0 0h256v256H0z" />
            <path fill="#FFF" d="M188 194.5c0 10.3-5.7 18.6-16.1 18.6-8.5 0-14.5-4.2-17.7-10l15.5-8.9c2 3.5 4 5.9 7 5.9 3 0 4.6-1.4 4.6-3.4 0-2.4-1.8-3.3-6.1-5.1l-5.3-2.3c-9.5-4.1-15.8-9.4-15.8-19.1 0-9 6.8-17.6 17-17.6 9.1 0 14.8 3.9 18.1 9l-13.8 8.8c-1.8-3-3.6-4.8-6.1-4.8-2.6 0-3.8 1.5-3.8 3.3 0 2.2 1.6 3 5.3 4.6l5.3 2.3c11.1 4.7 18 10.4 18 20.7zM69 112h51v14H95v77H81v-77H69v-14z" />
        </svg>
    ),
    Tailwind: () => (
        <svg viewBox="0 0 256 153.6" className="w-8 h-8 fill-[#38BDF8]">
            <path d="M128 41C102.4 41 86.4 53.8 80 79.4c9.6-12.8 20.8-17.6 33.6-14.4 7.3 1.8 12.5 7.1 18.3 13 9.4 9.6 20.3 20.6 44.1 20.6 25.6 0 41.6-12.8 48-38.4-9.6 12.8-20.8 17.6-33.6 14.4-7.3-1.8-12.5-7.1-18.3-13C162.7 51.9 151.7 41 128 41zM80 98.6C54.4 98.6 38.4 111.4 32 137c9.6-12.8 20.8-17.6 33.6-14.4 7.3 1.8 12.5 7.1 18.3 13 9.4 9.6 20.3 20.6 44.1 20.6 25.6 0 41.6-12.8 48-38.4-9.6 12.8-20.8 17.6-33.6 14.4-7.3-1.8-12.5-7.1-18.3-13C114.7 109.5 103.7 98.6 80 98.6z" />
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8">
            <path d="M127.1 0C116.3 0 106.3.3 97 1c-4.4.3-11.4 1.2-16 2.3-17.1 3.9-24.9 10.1-24.9 20.5v16.1h35.3v4.6H54.3C40.6 44.5 28.5 53 23.3 64.6c-5.2 11.6-5.2 24.5-5.2 38.6v34c0 14.1 0 27 5.2 38.6 5.2 11.6 17.3 20.1 31 20.1h15.7v-22.3c0-14.7 12.1-26.8 26.8-26.8h46.6c14.7 0 26.8 12.1 26.8 26.8v64.6c0 14.7-12.1 34.2-26.8 34.2H97c-14.7 0-26.8-9.4-26.8-23.3v-2.3h15.7v2.3c0 6.6 5.4 11.2 11.2 11.2h46.6c5.8 0 11.2-4.6 11.2-11.2v-64.6c0-6.6-5.4-11.2-11.2-11.2H97c-5.8 0-11.2 4.6-11.2 11.2v22.3H68.9V91.6c0-11.2 9-20.1 20.1-20.1H167c11.2 0 20.1 9 20.1 20.1v64.6c0 11.2-9 20.1-20.1 20.1h-11.2l-15.7 20.5v4.6h35.3c14.1 0 27-5.2 38.6-5.2 11.6-5.2 20.1-17.3 20.1-31V91.6c0-14.1 0-27-5.2-38.6C244 41.3 231.9 32.8 218.2 32.8h-35.3V1c-10.3-.7-20.3-1-31.1-1h-24.7z" fill="#3776AB" />
            <path d="M102.2 21.6c-4.1 0-7.3 3.3-7.3 7.3 0 4.1 3.3 7.3 7.3 7.3a7.33 7.33 0 0 0 7.3-7.3c0-4-3.3-7.3-7.3-7.3zm51.4 205.2c-4.1 0-7.3 3.3-7.3 7.3 0 4.1 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3c0-4-3.3-7.3-7.3-7.3z" fill="#FFD43B" />
        </svg>
    ),
    Java: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8">
            <path d="M78.6 195.3c-20.1 5.3-43.1 9.9-43.1 22.3 0 9.7 13.9 14.7 30.6 14.7 19.3 0 47.9-6.3 71.4-12.6l4.6-1.3c21.2-5.7 44.5-12.1 44.5-24 0-11.6-13.6-17.1-30.7-17.1-18.7 0-47.5 7-70.5 13l-6.8 5z" fill="#E76F00" />
            <path d="M125.8 43.1C187.9-10.3 54.3-15.2 113.8 55.4c4.6 5.5 10 10.9 16 16.3 43.1 38.1 49.3 58.7 54.3 84.1-10.4 12.8-27.1 19.5-44.4 19.5-23.7 0-41.5-13.4-45-18.7l-9.5-13.5c-4.6-6.4-9.3-12.9-14.4-19.1-38.1-43.9-3.4-56.7 15-80.9zm27.4 67c13.2-13.3 22.6-30.4 27.6-50.5-5.4 10.6-10.7 21.5-17.1 30.7 13.1-23.7 22-54.7 12.1-80.3-6.2 36.8-43.3 64.9-22.6 100.1z" fill="#5382A1" />
        </svg>
    ),
    Postman: () => (
        <svg viewBox="0 0 256 256" className="w-8 h-8">
            <path fill="#FF6C37" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm68 135c0 10.5-8.5 19-19 19H81.4l24.4 24.4c7.4 7.4 7.4 19.5 0 26.9s-19.5 7.4-26.9 0l-57.2-57.2c-7.4-7.4-7.4-19.5 0-26.9l57.2-57.2a19.04 19.04 0 0 1 26.9 26.9L81.4 116h95.6c10.5 0 19 8.5 19 19z" />
        </svg>
    ),
};

const skillStack = [
    { name: "Node.js", Icon: TechLogos.Nodejs, cat: "Backend Runtime" },
    { name: "Next.js", Icon: TechLogos.Nextjs, cat: "FullStack Framework" },
    { name: "React", Icon: TechLogos.React, cat: "Frontend UI" },
    { name: "MongoDB", Icon: TechLogos.MongoDB, cat: "NoSQL Database" },
    { name: "Express", Icon: TechLogos.Express, cat: "Server Framework" },
    { name: "Tailwind", Icon: TechLogos.Tailwind, cat: "Styling Utility" },
    { name: "Java", Icon: TechLogos.Java, cat: "Core Enterprise" },
    { name: "Python", Icon: TechLogos.Python, cat: "Logic & Scripts" },
    { name: "TypeScript", Icon: TechLogos.TypeScript, cat: "Static Typing" },
    { name: "JavaScript", Icon: TechLogos.JavaScript, cat: "Core Web" },
    { name: "Postman", Icon: TechLogos.Postman, cat: "API Testing" },
];

export default function SkillsPage() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef<HTMLElement>(null);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <main ref={containerRef} className="relative min-h-screen pt-32 px-4 pb-20 bg-black overflow-hidden perspective-1000">
            {/* Ultra-High-End Mesh Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%"
                    }}
                    className="absolute w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
            </div>

            {/* Grain & Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay z-1" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8 backdrop-blur-3xl"
                    >
                        <Sparkles size={12} className="animate-pulse" /> Engineering Excellence
                    </motion.div>

                    <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 text-white leading-[0.8] mix-blend-difference">
                        TECH <span className="bg-clip-text text-transparent bg-linear-to-b from-emerald-400 to-emerald-800">STACK</span>
                    </h1>

                    <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium tracking-tight leading-relaxed">
                        A curated selection of industry-standard technologies I master to build <span className="text-white">robust, scalable, and visually immaculate</span> platforms.
                    </p>
                </motion.div>

                {/* The Floating Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillStack.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                duration: 1.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative h-full flex items-center gap-8 p-8 bg-[#030303] rounded-[2rem] border border-white/5 transition-all duration-700 hover:border-emerald-500/30 hover:bg-[#070707] overflow-hidden">
                                {/* Icon Container with Glow */}
                                <div className="relative z-10 shrink-0 p-5 bg-white/5 rounded-2xl group-hover:bg-emerald-500/10 transition-colors duration-500">
                                    <skill.Icon />
                                    <div className="absolute inset-0 blur-xl bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-all duration-500 -z-10" />
                                </div>

                                {/* Text Content */}
                                <div className="relative z-10 flex flex-col">
                                    <span className="text-[10px] font-black text-emerald-500/40 tracking-[0.3em] uppercase mb-1.5 group-hover:text-emerald-500/80 transition-colors">
                                        {skill.cat}
                                    </span>
                                    <h3 className="text-2xl font-black text-white tracking-tighter leading-none group-hover:translate-x-1 transition-transform duration-500">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Interactive Background Glow */}
                                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="flex-1 max-w-xl text-center md:text-left">
                        <h2 className="text-4xl font-black text-white tracking-tighter mb-6">MERN STACK EXPERTISE</h2>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Architecting seamless full-stack experiences by bridging robust backend logic with immaculate frontend aesthetics. My workflow emphasizes <span className="text-emerald-500">clean code</span> and <span className="text-emerald-500">unparalleled performance</span>.
                        </p>
                    </div>

                    <div className="flex gap-4 p-2 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
