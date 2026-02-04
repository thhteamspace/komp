'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe, ShieldCheck, Lock } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });



    // SMOOTHING: Buffers the scroll input to eliminate jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Background Interaction
    const videoScale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
    const videoOpacity = useTransform(smoothProgress, [0.4, 0.8], [0.2, 0.05]);

    // Content Animations - Moves up and fades out early
    const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.3], [0, -150]);
    const textScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);

    // Dashboard Animations - Starts coming in as transition begins
    const dashboardY = useTransform(smoothProgress, [0.15, 0.7], [600, 0]);
    const dashboardScale = useTransform(smoothProgress, [0.15, 0.7], [0.85, 1]);
    const dashboardOpacity = useTransform(smoothProgress, [0.1, 0.35], [0, 1]);
    const dashboardRotateX = useTransform(smoothProgress, [0.15, 0.7], [20, 0]);

    // Trust/Footer - Comes up from under the dashboard slightly faster
    const trustOpacity = useTransform(smoothProgress, [0.78, 0.95], [0, 1]);
    const trustY = useTransform(smoothProgress, [0.78, 0.95], [40, 0]);

    return (
        <div ref={containerRef} className="relative h-[250vh] bg-white -mt-20">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">

                {/* Background Video - Becomes part of the stack */}
                {/* Background Video Disabled */}

                {/* LAYER 1: HEADLINE CONTENT */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY, scale: textScale }}
                    className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center -mt-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-blue" />
                        <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">The Infrastructure for Global Ambition.</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-950 mb-6 max-w-6xl leading-[0.85]">
                        Hire Anyone, Anywhere,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FFB366]">
                            Without the Legal Complexity.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl leading-relaxed">
                        De-risk your global expansion. KOMP automates international hiring, compliant payroll, and localized benefits in 150+ countries—so you can focus on scale, not bureaucracy.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Button variant="premium" size="lg" className="min-w-[240px]">
                            Calculate Your Global Hiring Costs <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="lg" className="min-w-[240px] border border-gray-200">
                            See the Platform
                        </Button>
                    </div>
                </motion.div>

                {/* LAYER 2: DASHBOARD (Slides over, becoming the new focus) */}
                {/* LAYER 2: DASHBOARD (Slides over, becoming the new focus) */}
                <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center pointer-events-none z-20">
                    <motion.div
                        style={{
                            y: dashboardY,
                            scale: dashboardScale,
                            opacity: dashboardOpacity,
                            rotateX: dashboardRotateX,
                            perspective: 1000
                        }}
                        className="w-full max-w-7xl px-6"
                    >
                        <div className="relative rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-200 bg-white p-2 lg:p-4">
                            <img
                                src="/images/dashboard_overview.png"
                                alt="Dashboard"
                                className="w-full h-auto rounded-[1.5rem] lg:rounded-[2.5rem] max-h-[75vh] object-contain shadow-sm"
                            />
                        </div>
                    </motion.div>
                </div>



            </div>
        </div>
    );
};

export default Hero;
