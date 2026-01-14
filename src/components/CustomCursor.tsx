"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isPointerVisible, setIsPointerVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // 100% Smooth Spring Configs
    const springConfig = { damping: 25, stiffness: 400, mass: 0.2 }; // Snappy but smooth
    const trailingConfig = { damping: 40, stiffness: 150, mass: 0.8 }; // Floaty and fluid

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const trailingXSpring = useSpring(cursorX, trailingConfig);
    const trailingYSpring = useSpring(cursorY, trailingConfig);

    useEffect(() => {
        // Safe check for touch device
        if (typeof window !== "undefined") {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
            setIsPointerVisible(true);
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Optimized hover check - checks common interactive elements first
            // Only checks computed style if necessary and simple checks fail
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.closest(".group") ||
                target.matches('input, textarea, select, label') ||
                (target as HTMLElement).onclick != null;

            if (isInteractive) {
                setIsHovered(true);
            } else {
                // Fallback to computed style only if not obviously interactive
                // Throttling this would be better but keeping it simple for now
                // We'll skip the expensive computed style check for performance unless strictly needed
                // Most modern apps use standard tags.
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [cursorX, cursorY]);

    // Don't render on touch devices to save resources
    if (isTouchDevice) return null;

    return (
        <AnimatePresence>
            {isPointerVisible && (
                <>
                    {/* Main Dot - Ultra Precise */}
                    <motion.div
                        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: isHovered ? 4 : 1,
                            borderRadius: isHovered ? "20%" : "50%",
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Fluid Trailing Ring */}
                    <motion.div
                        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference placeholder-glow"
                        style={{
                            x: trailingXSpring,
                            y: trailingYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: isHovered ? 1.5 : 1,
                            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                            borderColor: isHovered ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.3)",
                        }}
                        transition={{ duration: 0.3 }} // Slightly slower transition for smooth feel
                    />
                </>
            )}
        </AnimatePresence>
    );
}
