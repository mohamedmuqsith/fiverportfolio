"use client";

import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import { Briefcase, Download, GraduationCap, Trophy } from "lucide-react";

const education = [
    {
        type: "Education",
        title: "BSc (Hons) Software Engineering",
        subtitle: "Top-Up, ESOFT Metro Campus / Kingston University",
        year: "Ongoing",
        icon: GraduationCap,
    },
    {
        type: "Education",
        title: "HND - Software Engineering",
        subtitle: "ESOFT Metro Campus",
        year: "2023 - 2025 | CGPA - 3.4, Merit",
        icon: GraduationCap,
    },
    {
        type: "Education",
        title: "DITEC - IT",
        subtitle: "ESOFT Metro Campus",
        year: "2023 - 2024 | CGPA - 3.2, Merit",
        icon: GraduationCap,
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 px-4 pb-20">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-b from-foreground to-zinc-500"
                >
                    About Me
                </motion.h1>

                <div className="space-y-8">
                    <GlassCard className="p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-purple">My Journey</h2>
                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                            Hi, my name is <span className="text-foreground font-bold">Mukshith</span>. I am a MERN Stack Developer with a strong focus on backend development. I build scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.
                            <br /><br />
                            I am currently interning at <span className="text-brand-blue font-bold">Error Makes Clever</span> as a Web Development Intern. I am proficient in backend technologies such as Node.js, Express.js, MongoDB, and Mongoose.
                            <br /><br />
                            I also have hands-on experience with Firebase, Tailwind CSS, Git, and GitHub. I am passionate about writing clean, maintainable code and developing robust RESTful APIs.
                        </p>
                    </GlassCard>

                    <div className="grid gap-6">
                        {education.map((item, index) => (
                            <GlassCard key={index} className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-6 md:p-6 text-center sm:text-left">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 shrink-0">
                                    <item.icon className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                                    <p className="text-zinc-300 text-sm md:text-base">{item.subtitle}</p>
                                    <p className="text-zinc-500 text-xs md:text-sm">{item.year}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-12"
                    >
                        <GlassCard className="p-8 text-center border-brand-purple/30">
                            <h2 className="text-2xl font-bold mb-4">Want to see my full profile?</h2>
                            <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
                                Download my professional resume for a detailed view of my skills,
                                experience, and academic achievements.
                            </p>
                            <motion.a
                                whileTap={{ scale: 0.95 }}
                                href="https://drive.google.com/file/d/1NEfpcgCZXVi8icxU9Ekbu8TizbTOGmue/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple text-white rounded-full font-bold hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/20 transition-all"
                            >
                                <Download size={20} /> Download Resume
                            </motion.a>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
