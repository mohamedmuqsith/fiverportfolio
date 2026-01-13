"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isPointerVisible, setIsPointerVisible] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Ultra-smooth spring configs
    const springConfig = { damping: 40, stiffness: 450, mass: 0.5 };
    const trailingConfig = { damping: 25, stiffness: 200, mass: 0.8 };

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const trailingXSpring = useSpring(cursorX, trailingConfig);
    const trailingYSpring = useSpring(cursorY, trailingConfig);

    useEffect(() => {
        // Detect touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isPointerVisible) setIsPointerVisible(true);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isSelectable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.closest(".group") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovered(!!isSelectable);
        };

        const handleTouch = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                cursorX.set(e.touches[0].clientX);
                cursorY.set(e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);
        window.addEventListener("touchstart", handleTouch);
        window.addEventListener("touchmove", handleTouch);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
            window.removeEventListener("touchstart", handleTouch);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, [cursorX, cursorY, isPointerVisible]);

    return (
        <AnimatePresence>
            {!isTouchDevice && isPointerVisible && (
                <>
                    {/* Central Point - Ultra Smooth */}
                    <motion.div
                        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: isHovered ? 6 : 1,
                        }}
                    />

                    {/* Fluid Trailing Ring */}
                    <motion.div
                        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-9998"
                        style={{
                            x: trailingXSpring,
                            y: trailingYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: isHovered ? 2.5 : 1,
                            opacity: isHovered ? 0 : 1,
                        }}
                    />

                    {/* Dynamic Ambient Glow */}
                    <motion.div
                        className="fixed top-0 left-0 w-24 h-24 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none z-9997"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: isHovered ? 2 : 1,
                            opacity: isHovered ? 0.6 : 0,
                        }}
                    />
                </>
            )}

            {/* Mobile Touch Ripple / Glow */}
            {isTouchDevice && (
                <motion.div
                    className="fixed top-0 left-0 w-20 h-20 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none z-9997"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}
        </AnimatePresence>
    );
}
