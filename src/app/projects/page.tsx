"use client";


import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { ExternalLink, Github, MessageCircle, Sparkles } from "lucide-react";

const projects = [
    {
        title: "Library Management System",
        desc: "A sophisticated MERN stack platform featuring high-performance inventory tracking and secure user authentication.",
        stack: ["MongoDB", "Express", "React", "Node.js"],
        live: "https://library-mern-stack-pro.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Library_MERN_Stack_Pro",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Weather Intelligence",
        desc: "Precision weather monitoring system utilizing real-time API synchronization and aesthetic data visualization.",
        stack: ["React.js", "Weather API", "Tailwind CSS"],
        live: "https://weather-api-app-rust-iota.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Weather-API-App",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Global Travel Advisor",
        desc: "A premium tourism portal featuring interactive hotel discovery and fluid user navigation.",
        stack: ["Tailwind CSS", "React", "HTML5"],
        live: "https://mohamedmuqsith.github.io/Tripadvisor-webpage/",
        github: "https://github.com/mohamedmuqsith/Tripadvisor-webpage",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Eco GreenShop",
        desc: "High-end botanical commerce interface focusing on sustainable lifestyle and organic aesthetics.",
        stack: ["React", "Tailwind CSS", "Vite"],
        live: "https://mohamedmuqsith.github.io/greeden-tailwind/",
        github: "https://github.com/mohamedmuqsith/greeden-tailwind",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000&auto=format&fit=crop"
    },
];

export default function ProjectsPage() {
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

    const whatsappLink = "https://wa.me/940761617178";

    return (
        <main ref={containerRef} className="relative min-h-screen pt-32 px-4 pb-20 bg-black overflow-hidden perspective-1000">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                    className="absolute w-[1000px] h-[1000px] bg-brand-purple/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]" />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-1" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-purple font-black text-[10px] uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
                        <Sparkles size={12} className="animate-pulse" /> Selected Works
                    </div>
                    <h1 className="text-4xl sm:text-7xl md:text-[10rem] font-black tracking-tighter mb-8 text-white leading-[0.8] mix-blend-difference">
                        PROJECT <span className="bg-clip-text text-transparent bg-linear-to-b from-brand-purple to-brand-blue">VOYAGE</span>
                    </h1>
                    <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium tracking-tight">
                        Pushing the boundaries of <span className="text-white">modern web architecture</span> through high-end engineering and meticulous design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90" />

                                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase text-white/80 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none mb-4 group-hover:text-brand-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm md:text-lg font-medium leading-relaxed tracking-tight max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                                        {project.desc}
                                    </p>

                                    <div className="flex gap-8 mt-8 items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white font-black text-xs tracking-widest uppercase flex items-center gap-2 hover:text-brand-purple transition-colors z-20">
                                            Live Demo <ExternalLink size={14} />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white font-black text-xs tracking-widest uppercase flex items-center gap-2 hover:text-brand-purple transition-colors z-20">
                                            Architecture <Github size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <section id="contact" className="max-w-4xl mx-auto mt-40">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">UNLEASH CREATIVITY</h2>
                        <p className="text-zinc-500 text-xl font-medium tracking-tight">Currently open for premium freelance opportunities and collaborative excellence.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="group relative">
                            <div className="h-full p-6 md:p-10 bg-[#050505] rounded-[2.5rem] border border-white/5 flex flex-col justify-between transition-all duration-700 hover:border-brand-purple/20">
                                <div>
                                    <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Direct Sync</h3>
                                    <p className="text-zinc-400 text-lg font-medium leading-relaxed tracking-tight mb-10">
                                        Bypass the noise and start a high-bandwidth creative partnership. I typicaly respond within a pulse.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative overflow-hidden inline-flex items-center justify-center gap-3 w-full py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all transform hover:scale-[1.02]"
                                >
                                    <MessageCircle size={20} /> Initiate WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 bg-[#050505] rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:border-brand-purple/20">
                            <h3 className="text-3xl font-black text-white tracking-tighter mb-8">Pulse Signal</h3>
                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-medium focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder:text-zinc-700"
                                        placeholder="Identity"
                                    />
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-medium focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder:text-zinc-700"
                                        placeholder="Digital Address"
                                    />
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-medium focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder:text-zinc-700 resize-none"
                                        placeholder="Project Vision..."
                                    />
                                </div>
                                <button className="w-full py-6 bg-brand-purple text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-purple/80 transition-all transform hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)]">
                                    Transmit Pulse
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
