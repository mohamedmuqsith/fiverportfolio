"use client";

import GlassCard from "@/components/GlassCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    Code2,
    Server,
    Database,
    Globe,
    Smartphone,
    Github,
    GitBranch,
    Cpu,
    Monitor,
    Layers,
    Wind,
    Box,
    Coffee,
    Search,
    Code,
    Smartphone as Mobile
} from "lucide-react";

// Custom SVG Icons for technologies not in Lucide
const NodeJsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-500">
        <path d="M12 2L4.5 6.25v9.5L12 20l7.5-4.25v-9.5L12 2zM10.5 15.5H9v-7h1.5v7zm4.5 0h-3v-7h1.5v5.5h1.5v-5.5h1.5v7z" />
    </svg>
);

const ExpressIcon = () => (
    <div className="text-2xl font-bold font-mono tracking-tighter">ex</div>
);

const MongoDBIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-600">
        <path d="M17.193 11.232c-.116-.14-.247-.404-.325-.572-.25-.536-.39-1.096-.453-1.68-.035-.355-.035-.71 0-1.066.027-.246.067-.492.12-.734.01-.06.014-.123.016-.184l.004-.15-.05-.078c-.24-.378-.458-.77-.655-1.173-.016-.03-.03-.062-.047-.093l-.06-.118c-.022-.04-.04-.085-.06-.128-.2-.423-.374-.86-.522-1.306-.04-.12-.08-.24-.12-.36l-.08-.242c-.014-.045-.03-.09-.043-.135C14.15 1.576 13.17 0 11.968 0c-1.2 0-2.18 1.576-2.91 3.23-.014.045-.03.09-.044.135l-.08.243c-.04.12-.08.24-.12.36-.148.446-.322.883-.522 1.306-.02.043-.037.087-.06.128l-.06.118c-.016.03-.032.063-.047.093-.2.404-.416.795-.656 1.173l-.048.078-.006.15c0 .06.006.124.016.184.053.242.093.488.12.734.035.356.035.71 0 1.066-.062.584-.202 1.144-.452 1.68-.078.168-.21.432-.325.572-.516.634-.844 1.4-1.102 2.18-.088.266-.17.535-.246.808-.415 1.5-.53 3.076-.23 4.603.22 1.116.63 2.193 1.253 3.14.07.1.143.197.22.293l.113.14.045.05.022.022c.28.31.577.59.89.84.05.04.1.08.15.118l.1.077c1.3 1.002 2.924 1.503 4.548 1.503s3.248-.5 4.548-1.503l.1-.077c.05-.038.1-.078.15-.118.313-.25.61-.53.89-.84l.022-.022.045-.05.112-.14c.077-.096.15-.193.22-.293.623-.947 1.033-2.024 1.253-3.14.3-1.527.185-3.103-.23-4.603-.076-.273-.158-.542-.246-.808-.258-.78-.586-1.546-1.102-2.18z" />
    </svg>
);

const skills = [
    { name: "REACT", icon: Code2, color: "text-blue-400" },
    { name: "NODE.JS", icon: NodeJsIcon, color: "text-green-500" },
    { name: "EXPRESS.JS", icon: ExpressIcon, color: "text-zinc-200" },
    { name: "MONGODB", icon: MongoDBIcon, color: "text-green-600" },
    { name: "TAILWIND CSS", icon: Wind, color: "text-cyan-400" },
    { name: "JAVASCRIPT", icon: Cpu, color: "text-yellow-400" },
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Layers, color: "text-blue-500" },
    { name: "GIT", icon: GitBranch, color: "text-orange-600" },
    { name: "GITHUB", icon: Github, color: "text-zinc-100" },
    { name: "LINUX", icon: Monitor, color: "text-yellow-500" },
    { name: "JAVA", icon: Coffee, color: "text-red-500" },
    { name: "PYTHON", icon: Box, color: "text-blue-500" },
    { name: "MYSQL", icon: Database, color: "text-blue-400" },
    { name: "POSTMAN", icon: Search, color: "text-orange-400" },
];

const floatingIcons = [
    { Icon: Code, color: "text-brand-purple/20", x: "10%", y: "20%", size: 100 },
    { Icon: Database, color: "text-brand-blue/20", x: "85%", y: "15%", size: 120 },
    { Icon: Server, color: "text-green-400/20", x: "5%", y: "70%", size: 90 },
    { Icon: Mobile, color: "text-pink-400/20", x: "90%", y: "75%", size: 110 },
];

export default function SkillsPage() {
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
        <main className="relative min-h-screen pt-32 px-4 pb-20 bg-black overflow-hidden perspective-1000">
            {/* Cinematic Background (from Home Page) */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                    className="absolute w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
                />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full blur-[150px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/10 rounded-full blur-[150px] animate-float opacity-50 [animation-delay:2s]" />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-1" />

            {/* Floating Tech Arsenal (Movie Method) */}
            {floatingIcons.map(({ Icon, color, x, y, size }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    style={{
                        left: x,
                        top: y,
                        rotateX,
                        rotateY,
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.5 + index * 0.2,
                        type: "spring"
                    }}
                    className={`absolute hidden md:block ${color} pointer-events-none -z-10`}
                >
                    <Icon size={size} className="animate-float" strokeWidth={0.5} />
                </motion.div>
            ))}

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
                        TECHNICAL <span className="text-brand-purple">ARSENAL</span>
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-tight">
                        Powering high-end digital solutions with industry-standard technologies and meticulous precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative"
                        >
                            <GlassCard className="h-44 flex flex-col items-center justify-center p-6 bg-white/5 border-white/10 hover:border-brand-purple/50 transition-all duration-500 backdrop-blur-3xl">
                                <div className={`mb-4 ${skill.color} group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(var(--brand-purple-rgb),0.5)] transition-all duration-500`}>
                                    {(() => {
                                        const Icon = skill.icon;
                                        return <Icon size={40} strokeWidth={1} />;
                                    })()}
                                </div>
                                <span className="text-[10px] font-black tracking-[0.3em] text-zinc-500 group-hover:text-white transition-all duration-500 uppercase">
                                    {skill.name}
                                </span>

                                {/* Deep Ambient Glow */}
                                <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[inherit] pointer-events-none" />
                            </GlassCard>

                            {/* Animated Underline */}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-linear-to-r from-brand-purple to-brand-blue group-hover:w-2/3 transition-all duration-500 ease-out" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-24 text-center"
                >
                    <GlassCard className="inline-block p-12 bg-linear-to-b from-white/5 to-transparent border-brand-purple/20 backdrop-blur-2xl">
                        <h2 className="text-4xl font-black mb-6 text-white tracking-tighter">THE MERN STACK EXPERTISE</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed font-medium">
                            Architecting <span className="text-brand-blue">scalable foundations</span> using MongoDB, Express, React, and Node.js.
                            My approach combines robust backend logic with immaculate frontend aesthetics.
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </main>
    );
}
