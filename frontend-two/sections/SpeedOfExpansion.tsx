'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const SpeedOfExpansion = () => {
    return (
        <section className="py-24 bg-white overflow-hidden text-center relative">
            <div className="max-w-7xl mx-auto px-6 z-10 relative">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
                >
                    CEOs don't care <span className="text-brand-orange">about "hiring."</span> <br />
                    They care about the speed of expansion.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16"
                >
                    Stop waiting 6 months for local entities. KOMP provides the legal and financial infrastructure to hire,
                    onboard, and pay talent in 150+ countries - fully compliant, by Monday.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    delay: 0.2,
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1] // High-end custom cubic-bezier for buttery smooth motion
                }}
                className="max-w-6xl mx-auto px-6 relative w-full h-[500px] md:h-[700px] overflow-hidden flex items-end justify-center"
            >
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/Gemini_Generated_Image_8zpdd98zpdd98zpd.png"
                        alt="Global Network Visualization"
                        fill
                        className="object-contain object-top scale-110 md:scale-125 -translate-y-24"
                        priority
                    />
                </div>

                {/* Side Fades to blend smoothly - Increased width and opacity to hide lines */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/40 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/40 to-transparent z-20" />

                {/* Top Fade to blend smoothly - Increased height and opacity */}
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/50 to-transparent z-20" />

                {/* Bottom Fade to White - Reduced height as requested */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-30" />


                {/* Intense Orange Glow at center bottom - Reduced opacity for clarity */}
                <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-orange blur-[150px] opacity-20 rounded-full z-10" />

                {/* Network Nodes (Overlay) */}
                <div className="hidden md:block absolute bottom-32 left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] z-30 animate-pulse" />
                <div className="hidden md:block absolute bottom-40 right-[35%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white] z-30 animate-pulse delay-75" />
                <div className="hidden md:block absolute bottom-52 left-[45%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white] z-30 animate-pulse delay-150" />
            </motion.div>
        </section>
    );
};

export default SpeedOfExpansion;
