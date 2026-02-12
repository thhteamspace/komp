'use client';

import { motion } from 'framer-motion';

const SpeedOfExpansion = () => {
    return (
        <section className="py-24 bg-white overflow-hidden text-center relative">
            <div className="max-w-7xl mx-auto px-6 z-10 relative">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
                >
                    CEOs don't care <span className="text-brand-orange">about "hiring."</span> <br />
                    They care about the speed of expansion.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16"
                >
                    Stop waiting 6 months for local entities. KOMP provides the legal and financial infrastructure to hire,
                    onboard, and pay talent in 150+ countries - fully compliant, by Monday.
                </motion.p>
            </div>

            {/* Globe Visualization */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-6xl mx-auto px-6 relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-end justify-center"
            >
                {/* Globe Image Container with heavy orange tint - Placeholder */}
                <div className="absolute top-0 w-full h-full md:w-[120%] md:h-[150%] left-1/2 -translate-x-1/2 bg-slate-100 flex items-center justify-center border border-slate-200">
                    <div className="text-slate-400 font-bold text-lg tracking-widest uppercase">Global Network Visualization</div>
                </div>

                {/* Bottom Fade to White */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

                {/* Intense Orange Glow at center bottom */}
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-orange blur-[120px] opacity-40 rounded-full z-10" />

                {/* Network Nodes (Overlay) */}
                <div className="hidden md:block absolute bottom-32 left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] z-30 animate-pulse" />
                <div className="hidden md:block absolute bottom-40 right-[35%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white] z-30 animate-pulse delay-75" />
                <div className="hidden md:block absolute bottom-52 left-[45%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white] z-30 animate-pulse delay-150" />
            </motion.div>
        </section>
    );
};

export default SpeedOfExpansion;
