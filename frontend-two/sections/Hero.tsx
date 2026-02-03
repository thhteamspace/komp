'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTrustIdx, setActiveTrustIdx] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Auto-highlighting sequence for trust indicators
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTrustIdx((prev) => (prev + 1) % 5);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

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
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="absolute inset-0 z-0 origin-center"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/hero.mp4 (2).mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-white/20" />
                </motion.div>

                {/* LAYER 1: HEADLINE CONTENT */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY, scale: textScale }}
                    className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center -mt-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-orange" />
                        <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">Infrastructure for Global Ambition</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-950 mb-6 max-w-6xl leading-[0.85]">
                        Hire Anyone, Anywhere,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">
                            Zero Legal Complexity.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
                        Compliant global hiring, payroll, and benefits in 150+ countries.
                        Scale your team without the bureaucracy.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Button variant="premium" size="lg" className="min-w-[240px]">
                            Calculate Costs <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="lg" className="min-w-[240px] border border-gray-200">
                            Watch Demo
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
                        className="w-full max-w-6xl px-6"
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

                {/* LAYER 3: TRUST INDICATORS (Bottom emergence) */}
                <motion.div
                    style={{ opacity: trustOpacity, y: trustY }}
                    className="absolute bottom-1 w-full max-w-6xl px-6 flex justify-between items-center z-30"
                >
                    {[
                        '1,200+ Global Entities',
                        'SOC2 Compliant',
                        'ISO 27001 Certified',
                        'FinScale',
                        'ApexGlobal'
                    ].map((logo, idx) => (
                        <span
                            key={logo}
                            className={`text-[11px] md:text-[14px] font-black uppercase tracking-[0.2em] transition-all duration-1000 ${activeTrustIdx === idx
                                    ? 'text-slate-950 opacity-100 scale-105'
                                    : 'text-slate-300 opacity-40'
                                }`}
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
