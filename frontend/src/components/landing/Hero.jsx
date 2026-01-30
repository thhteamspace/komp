import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { ChevronRight, Star } from 'lucide-react';
import FeatureDashboard from './FeatureDashboard'; // Importing the new component

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Removed parallax transforms to fix overlap issues

    return (
        <section ref={ref} className="relative min-h-screen pt-32 pb-20 bg-white overflow-hidden flex flex-col items-center">

            {/* Aurora Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-[100%] blur-[100px] -z-10 mix-blend-multiply opacity-60 animate-blob" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-100/50 rounded-[100%] blur-[80px] -z-10 mix-blend-multiply opacity-60 animate-blob animation-delay-2000" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 -z-20 opacity-[0.4]"
                style={{ backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            {/* Gradient Fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />


            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm mb-8 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                >
                    <span className="flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full">
                        <Star size={10} fill="currentColor" />
                    </span>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">Placeholder Banner Text</span>
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-black transition-colors" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 max-w-5xl mx-auto leading-[0.95]"
                >
                    Placeholder Headline. <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">Emphasis Text.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    This is a placeholder for the hero description text. It serves to demonstrate the visual style and layout of the text without conveying specific meaning.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-20"
                >
                    <Button variant="primary" className="h-12 px-8 text-base shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20">
                        Primary Action
                    </Button>
                    <Button variant="secondary" className="h-12 px-8 text-base bg-white">
                        Secondary Action
                    </Button>
                </motion.div>

                {/* Visual Centerpiece */}
                <motion.div
                    className="relative w-full max-w-6xl mx-auto"
                >
                    {/* Perspective container */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, y: 100 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="relative z-10"
                        style={{ perspective: '1000px' }}
                    >
                        <div className="relative rounded-2xl shadow-2xl border border-gray-200 bg-gray-100 aspect-[16/9] flex items-center justify-center overflow-hidden">
                            <div className="text-gray-400 flex flex-col items-center">
                                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="font-medium text-lg">Hero Image Placeholder</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative blurred background behind dashboard */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl -z-10 opacity-50" />

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
