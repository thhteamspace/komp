'use client';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 px-6 bg-[#f8f6f5] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-full opacity-30 pointer-events-none overflow-hidden text-brand-orange">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-slate-200 rounded-full mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span className="text-xs font-bold tracking-tight text-slate-500">Enterprise Growth • Global</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]"
                >
                    When Global Teams Operate on <br /> <span className="text-brand-orange">Different Systems</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto mb-16"
                >
                    How fragmentation stalls growth and how a unified operating layer transformed global efficiency for a Fortune 500 logistics giant.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-8 md:gap-16 border-t border-slate-200 pt-12 w-full max-w-3xl mx-auto"
                >
                    <div className="text-center">
                        <p className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">12</p>
                        <p className="text-xs text-slate-400 font-bold tracking-tight mt-2">Countries</p>
                    </div>
                    <div className="w-px h-16 bg-slate-200"></div>
                    <div className="text-center">
                        <p className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">3.4k</p>
                        <p className="text-xs text-slate-400 font-bold tracking-tight mt-2">Employees</p>
                    </div>
                    <div className="w-px h-16 bg-slate-200"></div>
                    <div className="text-center">
                        <p className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">7</p>
                        <p className="text-xs text-slate-400 font-bold tracking-tight mt-2">Legacy Systems</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
