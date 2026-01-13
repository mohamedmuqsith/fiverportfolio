"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function PortfolioImage() {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[400px] aspect-4/5 rounded-[2.5rem] p-3 bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl group cursor-none"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 rounded-4xl overflow-hidden bg-zinc-900 shadow-2xl"
            >
                <Image
                    src="/forme.jpeg"
                    alt="Portfolio Image"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Glowing Border Path */}
            <motion.div
                style={{
                    transform: "translateZ(100px)",
                }}
                className="absolute -inset-[2px] rounded-[2.6rem] bg-linear-to-r from-brand-purple via-brand-blue to-brand-purple blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
            />

            {/* Reflection / Glare */}
            <motion.div
                style={{
                    transform: "translateZ(120px)",
                    translateX: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
                    translateY: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
                }}
                className="absolute inset-0 bg-linear-to-tr from-white/20 via-white/40 to-transparent blur-3xl opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-500"
            />
        </motion.div>
    );
}
