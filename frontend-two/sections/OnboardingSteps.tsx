'use client';

import { motion } from 'framer-motion';
import { UserPlus, FileSignature, MonitorCheck, Rocket } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Identify Talent",
        desc: "Find your hire or let us source them via automated sourcing tools.",
        icon: UserPlus,
        imgSrc: "/images/onboarding_step1.png",
        imgPos: "object-top"
    },
    {
        num: "02",
        title: "Generate Contracts",
        desc: "Legally-vetted agreements in 2 minutes.",
        icon: FileSignature,
        imgSrc: "/images/onboarding_step2.png",
        imgPos: "object-top"
    },
    {
        num: "03",
        title: "Approve & Automate",
        desc: "One monthly invoice; we handle taxes, benefits, and local filings.",
        icon: MonitorCheck,
        imgSrc: "/images/onboarding_step3.png",
        imgPos: "object-top"
    }
];

const OnboardingSteps = () => {
    return (
        <section className="pt-16 pb-40 bg-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-0" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center"
                >
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-10 bg-brand-orange" />
                        <span className="text-sm font-black text-brand-orange uppercase tracking-[0.4em]">
                            Speed & Efficiency
                        </span>
                        <div className="h-px w-10 bg-brand-orange" />
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 cursor-default">
                            {/* Line 1 */}
                            {["Get", "Live", "in"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 50, rotateX: 90 },
                                        visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="inline-block origin-bottom"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 mt-2">
                            {/* Line 2 with Gradient */}
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: 'backOut' } }
                                }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue pb-2"
                            >
                                Days, Not Months.
                            </motion.span>
                        </div>
                    </h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                        }}
                        className="mt-10 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Our localized infrastructure bypasses traditional legal bottlenecks,
                        letting you scale teams globally with unprecedented velocity.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                                delay: idx * 0.1
                            }}
                            className="group relative h-full"
                        >
                            {/* Card Container with 3D feel - Stable Interaction */}
                            <div className="h-full bg-white rounded-[4rem] border border-slate-100 p-8 pt-20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow transition-colors duration-500 ease-out flex flex-col transform-gpu">

                                {/* Number and Icon */}
                                <div className="absolute top-10 left-10 flex items-center gap-4 z-20">
                                    <span className="text-6xl font-black text-slate-100/80 group-hover:text-brand-orange/20 transition-colors duration-700">
                                        {step.num}
                                    </span>
                                </div>

                                {/* Main Visual - Maximized Prominence */}
                                <div className="mt-2 mb-10 relative aspect-[16/11] rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-1000">
                                    <motion.img
                                        src={step.imgSrc}
                                        alt={step.title}
                                        className={`w-full h-full object-cover transition-all duration-[1500ms] saturate-[0.8] group-hover:saturate-100 opacity-95 group-hover:opacity-100 ${step.imgPos}`}
                                    />

                                    {/* Glass Highlight Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    {/* Icon Badge - Positioned to not overlap UI */}
                                    <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl text-brand-orange scale-0 group-hover:scale-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
                                        <step.icon size={20} />
                                    </div>
                                </div>

                                {/* Content area with high legibility */}
                                <div className="flex-1 px-2">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-4 tracking-tighter group-hover:text-brand-orange transition-colors duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-lg leading-snug font-semibold opacity-85 group-hover:opacity-100 transition-opacity duration-500">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Interactive Progress Element */}
                                <div className="mt-12 overflow-hidden h-1.5 rounded-full bg-slate-50">
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 2, delay: idx * 0.3, ease: "circOut" }}
                                        className="h-full bg-gradient-to-r from-brand-orange to-brand-blue shadow-[0_0_10px_rgba(255,103,44,0.3)]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Callout - Premium Light Cinematic Version */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.1 } }
                    }}
                    className="mt-40 relative group"
                >
                    {/* Glow Background Backing */}
                    <div className="absolute inset-x-20 -inset-y-10 bg-brand-orange/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative p-10 md:p-14 rounded-[4rem] bg-slate-50 text-slate-900 overflow-hidden text-center flex flex-col items-center border border-slate-200 shadow-2xl">
                        {/* Mesh Gradient Accents - Light Mode */}
                        <div className="absolute top-0 -left-20 w-80 h-80 bg-brand-orange/10 blur-[100px]" />
                        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-brand-blue/10 blur-[100px]" />

                        <div className="relative z-10 max-w-3xl">
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-orange text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
                            >
                                Fast-Track Success
                            </motion.span>

                            <h4 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-slate-950">
                                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block">Ready to</motion.span>
                                <motion.span
                                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue block mt-2 pb-4 pr-2"
                                >
                                    Accelerate Growth?
                                </motion.span>
                            </h4>

                            <motion.p
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="text-slate-500 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed"
                            >
                                Join hundreds of global companies executing their
                                international expansion in hours, not months.
                            </motion.p>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255,103,44,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-sm transition-all relative overflow-hidden group/btn shadow-xl"
                            >
                                <span className="relative z-10 group-hover/btn:text-slate-950 transition-colors duration-300">Start Hiring Now</span>
                                <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                            </motion.button>

                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="mt-8 flex items-center justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]"
                            >
                                <span>No Setup Fees</span>
                                <div className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>Instant Global Access</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default OnboardingSteps;
