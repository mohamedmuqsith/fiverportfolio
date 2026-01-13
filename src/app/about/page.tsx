"use client";

import GlassCard from "@/components/GlassCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Briefcase, Download, GraduationCap, Trophy, Sparkles, Target, Star, ArrowRight } from "lucide-react";

const education = [
    {
        type: "Education",
        title: "BSc (Hons) Software Engineering",
        subtitle: "Top-Up, ESOFT Metro Campus / Kingston University",
        year: "Ongoing",
        icon: GraduationCap,
        color: "text-brand-purple"
    },
    {
        type: "Education",
        title: "HND - Software Engineering",
        subtitle: "ESOFT Metro Campus",
        year: "2023 - 2025 | CGPA - 3.4, Merit",
        icon: GraduationCap,
        color: "text-brand-blue"
    },
    {
        type: "Education",
        title: "DITEC - IT",
        subtitle: "ESOFT Metro Campus",
        year: "2023 - 2024 | CGPA - 3.2, Merit",
        icon: GraduationCap,
        color: "text-green-400"
    },
];

const certificates = [
    {
        title: "Higher National Diploma",
        issuer: "Software Engineering",
        location: "ESOFT Metro Campus",
        image: "/HNDcer.jpeg",
        year: "2025",
        color: "from-blue-500/20 to-transparent"
    },
    {
        title: "Diploma in IT",
        issuer: "DITEC",
        location: "ESOFT Metro Campus",
        image: "/Diploma.jpeg",
        year: "2024",
        color: "from-purple-500/20 to-transparent"
    },
    {
        title: "MERN Stack Certification",
        issuer: "Full-Stack Development",
        location: "Error Makes Clever",
        image: "/errormakesMERNCER.jpeg",
        year: "2024",
        color: "from-green-500/20 to-transparent"
    },
];

export default function AboutPage() {
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
            {/* Cinematic Background */}
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

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple font-bold text-[10px] uppercase tracking-widest mb-4 backdrop-blur-md">
                        <Sparkles size={12} /> The Journey
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
                        MY <span className="text-brand-purple">STORY</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <GlassCard className="p-8 md:p-10 border-white/10 backdrop-blur-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} className="fill-brand-purple/20" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-black mb-6 text-white tracking-tight flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-brand-purple" /> MISSION
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium tracking-tight">
                                Hi, my name is <span className="text-white font-bold">Mukshith</span>. I am a MERN Stack Developer with a strong focus on <span className="text-brand-blue">backend development</span>. I build scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.
                                <br /><br />
                                I am currently interning at <span className="text-brand-purple font-bold">Error Makes Clever</span> as a Web Development Intern. I am proficient in backend technologies such as Node.js, Express.js, MongoDB, and Mongoose.
                                <br /><br />
                                I also have hands-on experience with <span className="text-white">Firebase, Tailwind CSS, Git, and GitHub</span>. I am passionate about writing clean, maintainable code and developing robust RESTful APIs.
                            </p>
                        </GlassCard>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <GlassCard className="p-6 flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-brand-purple/20 rounded-xl text-brand-purple">
                                    <Trophy size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">2+</div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Years Concept</div>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-6 flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-brand-blue/20 rounded-xl text-brand-blue">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">10+</div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Projects Done</div>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Timeline / Education Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs font-black tracking-[0.4em] text-zinc-500 uppercase mb-8"
                        >
                            Academic Milestone
                        </motion.h2>

                        <div className="space-y-4">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <GlassCard className="p-6 relative group overflow-hidden">
                                        <div className={`absolute top-0 left-0 w-1 h-full bg-linear-to-b from-transparent via-${item.color.split('-')[2]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-brand-purple tracking-widest uppercase mb-1">{item.year}</div>
                                                <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-brand-purple transition-colors">{item.title}</h3>
                                                <p className="text-sm text-zinc-400 font-medium leading-snug">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="pt-8"
                        >
                            <a
                                href="https://drive.google.com/file/d/1NEfpcgCZXVi8icxU9Ekbu8TizbTOGmue/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all transform hover:scale-[1.02]"
                            >
                                <Download size={20} /> Access Full CV
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Certificates Section (Apple official style) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6"
                            >
                                Professional <span className="text-brand-purple">Certifications</span>
                            </motion.h2>
                            <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight">
                                A testament to rigorous academic standards and industry-vetted technical mastery.
                            </p>
                        </div>
                        <div className="hidden md:block h-px grow mx-12 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="group relative"
                            >
                                <div className="relative h-full flex flex-col bg-[#050505] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-brand-purple/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                                    {/* Image Section */}
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050505]" />

                                        {/* Year Badge */}
                                        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-purple text-white font-black text-xs tracking-widest shadow-lg">
                                            {cert.year}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 p-8 pt-4 flex flex-col">
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <span className="text-[10px] font-black tracking-[0.3em] text-brand-purple/80 uppercase mb-2 block">
                                                    Professional Credential
                                                </span>
                                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-brand-purple transition-colors duration-500">
                                                    {cert.title}
                                                </h3>
                                            </div>

                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple transition-all duration-500 -mt-2">
                                                <ArrowRight size={20} className="text-white group-hover:text-white -rotate-45" />
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 text-sm font-medium leading-relaxed tracking-tight mb-8">
                                            Recognized by {cert.issuer}. This certification validates core competencies in {cert.title.toLowerCase()} and industry standards.
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-4">
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                                #{cert.issuer.replace(/\s+/g, '')}
                                            </span>
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                                #{cert.location.replace(/\s+/g, '')}
                                            </span>
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                                #Certified
                                            </span>
                                        </div>
                                    </div>

                                    {/* High-End Gloss Highlight */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
