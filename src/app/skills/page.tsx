"use client";

import { motion } from "framer-motion";
import {
    Layout,
    Server,
    Terminal,
    Cpu,
    Layers,
    Wind,
    Box
} from "lucide-react";

// Animation Variants for Staggered Entrance
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            stiffness: 50
        }
    }
};

const skillsData = [
    {
        category: "Frontend Development",
        icon: <Layout className="w-6 h-6 text-brand-purple" />,
        skills: [
            { name: "React.js", level: "Expert" },
            { name: "Next.js 15", level: "Expert" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "Framer Motion", level: "Advanced" },
            { name: "Three.js", level: "Intermediate" }
        ]
    },
    {
        category: "Backend Engineering",
        icon: <Server className="w-6 h-6 text-brand-blue" />,
        skills: [
            { name: "Node.js", level: "Advanced" },
            { name: "Express", level: "Advanced" },
            { name: "PostgreSQL", level: "Intermediate" },
            { name: "GraphQL", level: "Intermediate" },
            { name: "MongoDB", level: "Advanced" },
            { name: "Supabase", level: "Advanced" }
        ]
    },
    {
        category: "Tools & DevOps",
        icon: <Terminal className="w-6 h-6 text-emerald-500" />,
        skills: [
            { name: "Git & GitHub", level: "Expert" },
            { name: "Docker", level: "Intermediate" },
            { name: "AWS", level: "Basic" },
            { name: "Vercel", level: "Expert" },
            { name: "Figma", level: "Advanced" },
            { name: "VS Code", level: "Expert" }
        ]
    }
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50">
                    My Tech Stack
                </h1>
                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    A curated list of technologies I use to build premium digital experiences.
                    Focusing on performance, accessibility, and fluid animations.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.category}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="glass-card p-8 rounded-3xl relative overflow-hidden group"
                    >
                        {/* Decorative Background Gradient */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-linear-to-br from-brand-purple via-transparent to-transparent`} />

                        {/* Category Header */}
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                            <div className="p-3 glass rounded-2xl">
                                {category.icon}
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">{category.category}</h2>
                        </motion.div>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    className="flex items-center justify-between group/skill"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/50 group-hover/skill:bg-brand-purple transition-colors" />
                                        <span className="font-medium text-lg text-foreground/80 group-hover/skill:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/60 border border-transparent group-hover/skill:border-brand-purple/20 group-hover/skill:bg-brand-purple/5 transition-all">
                                        {skill.level}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-24 text-center"
            >
                <p className="text-zinc-500 mb-8">Always learning and exploring new technologies.</p>
                <div className="flex justify-center gap-4">
                    {[
                        <Box key="1" className="w-6 h-6 text-zinc-700" />,
                        <Layers key="2" className="w-6 h-6 text-zinc-700" />,
                        <Cpu key="3" className="w-6 h-6 text-zinc-700" />,
                        <Wind key="4" className="w-6 h-6 text-zinc-700" />
                    ].map((icon, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                            }}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
