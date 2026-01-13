"use client";

import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import { ExternalLink, Github, MessageCircle } from "lucide-react";

const projects = [
    {
        title: "Library Management System MERN",
        desc: "A full-stack library management platform with comprehensive CRUD operations for books and users.",
        stack: ["MongoDB", "Express", "React", "Node.js"],
        live: "https://library-mern-stack-pro.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Library_MERN_Stack_Pro"
    },
    {
        title: "Weather App React.js",
        desc: "Real-time weather tracking application with interactive maps and dynamic forecasts.",
        stack: ["React.js", "Weather API", "CSS3"],
        live: "https://weather-api-app-rust-iota.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Weather-API-App"
    },
    {
        title: "TripAdvisor Clone",
        desc: "Responsive travel advisor UI clone focusing on modern layout and interactive hotel/activity components.",
        stack: ["Tailwind CSS", "React", "HTML5"],
        live: "https://mohamedmuqsith.github.io/Tripadvisor-webpage/",
        github: "https://github.com/mohamedmuqsith/Tripadvisor-webpage"
    },
    {
        title: "Greenden",
        desc: "Eco-friendly plant shop UI with shopping cart functionality and responsive design.",
        stack: ["React", "Tailwind CSS", "GitHub Pages"],
        live: "https://mohamedmuqsith.github.io/greeden-tailwind/",
        github: "https://github.com/mohamedmuqsith/greeden-tailwind"
    },
];

export default function ProjectsPage() {
    const whatsappLink = "https://wa.me/940761617178";

    return (
        <main className="min-h-screen pt-32 px-4 pb-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-zinc-500">
                        FEATURED PROJECTS
                    </h1>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work in full-stack development and responsive design.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="group p-8 relative overflow-hidden h-full flex flex-col">
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 mb-6 line-clamp-3">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 mt-auto">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-white transition-colors"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors"
                                    >
                                        Source <Github size={16} />
                                    </a>
                                </div>

                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-purple/10 blur-3xl group-hover:bg-brand-purple/20 transition-all opacity-0 group-hover:opacity-100" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <section id="contact" className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black mb-4">GET IN TOUCH</h2>
                        <p className="text-zinc-500">I'm available for freelance work and full-time opportunities.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard className="p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Direct Communication</h3>
                                <p className="text-zinc-400 mb-8">
                                    Feel free to reach out for project inquiries or quick questions.
                                    I typically respond within 24 hours.
                                </p>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-green-600/20 text-green-400 border border-green-600/30 rounded-xl font-bold hover:bg-green-600 hover:text-white transition-all transform hover:scale-[1.02]"
                            >
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-brand-purple focus:outline-none"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-brand-purple focus:outline-none"
                                    placeholder="your@email.com"
                                />
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-brand-purple focus:outline-none"
                                    placeholder="Tell me about your project..."
                                />
                                <button className="w-full py-3 bg-brand-purple rounded-lg font-bold hover:bg-brand-purple/80 transition-all">
                                    Submit Message
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </section>
            </div>
        </main>
    );
}
