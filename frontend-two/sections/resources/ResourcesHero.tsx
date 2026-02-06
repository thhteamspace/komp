'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Button from '@/components/Button';

const ResourcesHero = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-blue-50/30">
            {/* Background Details */}
            {/* "Crazy" Dynamic Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* White Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80" />

                {/* Grid Pattern */}
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_60%,transparent_100%)]" />

                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-orange/40 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-blue/35 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-purple-500/25 rounded-full blur-[140px] animate-[pulse_12s_ease-in-out_infinite]" />
            </div>

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.9]"
                    >
                        Intelligence for <br />
                        <span className="text-brand-orange">Global Scale.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-12"
                    >
                        Practical guides for global hiring, payroll, and compliance. Navigating international market complexity with localized insights and strategic frameworks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="premium" size="lg" className="h-16 px-10">
                            Get My Custom Expansion Quote <ArrowRight size={18} />
                        </Button>
                    </motion.div>
                </div>

                {/* Decorative Stats or Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {['150+ Countries', 'Compliance Shield', 'Payroll Engine', 'Expansion Logic'].map((tag, i) => (
                        <div key={i} className="bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-6 rounded-[2rem] text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
                            <span className="text-base font-bold text-slate-950 transition-colors">{tag}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ResourcesHero;
