'use client';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Speed Lines Effect */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block">
                <div
                    className="w-full h-full absolute inset-0"
                    style={{
                        background: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255, 140, 26, 0.15) 20px, rgba(255, 140, 26, 0.15) 40px)',
                        transform: 'skewX(-20deg)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-black tracking-widest uppercase mb-10 border border-brand-orange/20">
                                Case Study: Growth Strategy
                            </div>
                            <h1 className="text-7xl md:text-8xl lg:text-[11.5rem] font-[1000] text-slate-950 tracking-[-0.07em] mb-12 leading-[0.75] uppercase">
                                SCALING<br />
                                AT EVERY<br />
                                <span className="text-brand-orange">STAGE.</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-[540px] leading-relaxed font-bold">
                                How hyper-growth companies navigate the chaotic transition from startup agility to enterprise stability using a unified infrastructure.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative h-64 lg:h-96 w-full">
                        <motion.div
                            initial={{ opacity: 0, rotate: 3, scale: 0.9 }}
                            animate={{ opacity: 1, rotate: 3, scale: 1 }}
                            whileHover={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl overflow-hidden shadow-2xl border border-slate-200/50"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-brand-orange blur-3xl opacity-20 animate-pulse" />
                                <div
                                    className="w-full h-full bg-cover bg-center mix-blend-overlay opacity-60"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-149251557933-34265f7af79e?auto=format&fit=crop&q=80')" }}
                                />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                        <TrendingUp size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Velocity Index</p>
                                        <p className="text-xl font-bold text-slate-900">+420% YoY</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
