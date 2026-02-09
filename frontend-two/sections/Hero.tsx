'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe, ShieldCheck, Lock } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.9; // Slow down slightly to 90% speed
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });



    // SMOOTHING: Buffers the scroll input for a premium cinematic feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150, // Faster response
        damping: 40,   // More controlled movement
        restDelta: 0.001
    });

    // Background Interaction
    const videoScale = useTransform(smoothProgress, [0, 0.4], [1, 0.85]);
    const videoOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0.7, 0.3, 0.02]);

    // Content Animations - Moves up and fades out sharper
    const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.25], [0, -200]);
    const textScale = useTransform(smoothProgress, [0, 0.25], [1, 0.9]);

    // Dashboard Animations - More "Aggressive" and smooth transition
    const dashboardY = useTransform(smoothProgress, [0.05, 0.55], [800, 0]);
    const dashboardScale = useTransform(smoothProgress, [0.05, 0.55], [0.8, 1]);
    const dashboardOpacity = useTransform(smoothProgress, [0.05, 0.25], [0, 1]);
    const dashboardRotateX = useTransform(smoothProgress, [0.05, 0.55], [35, 0]);

    // Trust/Footer - Clean arrival
    const trustOpacity = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);
    const trustY = useTransform(smoothProgress, [0.7, 0.9], [50, 0]);

    return (
        <div ref={containerRef} className="relative h-[280vh] bg-white -mt-20">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">

                {/* Background Video */}
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/hero.mp4" type="video/mp4" />
                    </video>
                    {/* Premium light overlay to maintain text readability */}
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px]" />
                    {/* Vignette effect to focus on center content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
                </motion.div>

                {/* LAYER 1: HEADLINE CONTENT */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY, scale: textScale }}
                    className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="text-base font-bold text-brand-blue tracking-wide">The Infrastructure for Global Ambition</span>
                    </motion.div>

                    <h1
                        className="text-5xl md:text-8xl font-black tracking-tight text-slate-950 mb-6 max-w-6xl leading-[0.85]"
                        style={{ textShadow: '0 2px 40px rgba(255,255,255,0.8)' }}
                    >
                        Hire Anyone, Anywhere,<br />
                        <span className="text-brand-orange">
                            Without the Legal Complexity.
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl leading-relaxed font-medium"
                        style={{ textShadow: '0 1px 20px rgba(255,255,255,0.5)' }}
                    >
                        Navigating global expansion doesn't have to be complex. KOMP provides the multi-currency payroll, contractor management, and compliance infrastructure to scale your team across 150+ countries.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
                        <Button variant="premium" size="lg" className="min-w-[240px]">
                            Talk to a Compliance Expert <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="lg" className="min-w-[240px] border border-gray-200 hover:bg-transparent">
                            Get My Custom Expansion Quote
                        </Button>
                    </div>

                    {/* Social Proof Strip - Authority Layer */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-gray-100"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Powering growth for</span>
                            <span className="text-sm font-bold text-slate-900 italic">1,200+ global entities</span>
                        </div>
                        <div className="h-4 w-px bg-gray-200 hidden md:block" />
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-1.5 grayscale opacity-60">
                                <ShieldCheck size={14} className="text-brand-blue" />
                                <span className="text-[10px] font-bold tracking-tighter">SOC2 COMPLIANT</span>
                            </span>
                            <span className="flex items-center gap-1.5 grayscale opacity-60">
                                <Lock size={14} className="text-brand-blue" />
                                <span className="text-[10px] font-bold tracking-tighter">ISO 27001</span>
                            </span>
                            <span className="flex items-center gap-1.5 grayscale opacity-60 text-[10px] font-bold tracking-tighter">GDPR</span>
                        </div>
                    </motion.div>
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
