"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Palette } from "lucide-react";
import { clsx } from "clsx";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
];

const accents = [
    { name: "purple", color: "bg-purple-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
    { name: "red", color: "bg-red-500" },
    { name: "orange", color: "bg-orange-500" },
    { name: "pink", color: "bg-pink-500" },
    { name: "cyan", color: "bg-cyan-500" },
    { name: "yellow", color: "bg-yellow-500" },
    { name: "emerald", color: "bg-emerald-500" },
    { name: "slate", color: "bg-slate-500" },
    { name: "rose", color: "bg-rose-500" },
    { name: "indigo", color: "bg-indigo-500" },
    { name: "amber", color: "bg-amber-500" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const pathname = usePathname();

    // Sync theme with document
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div className="glass px-4 md:px-6 py-2.5 md:py-3 rounded-full flex justify-between md:justify-center gap-4 md:gap-6 items-center w-full md:w-auto max-w-4xl">
                    <div className="md:hidden font-bold text-sm tracking-tight text-foreground">MUKSHITH</div>

                    <div className="hidden md:flex gap-6 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-foreground/80",
                                    pathname === link.path ? "text-foreground" : "text-zinc-500"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:ml-4">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
                        </motion.button>

                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/projects#contact"
                                className="hidden md:block bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-bold hover:opacity-90 shadow-sm active:bg-foreground/80 transition-all"
                            >
                                Contact
                            </Link>
                        </motion.div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-1 text-zinc-500 hover:text-foreground transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={clsx(
                                    "text-4xl font-bold transition-all",
                                    pathname === link.path ? "text-brand-purple" : "text-zinc-500 hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/projects#contact"
                            className="text-4xl font-bold text-zinc-500 hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
