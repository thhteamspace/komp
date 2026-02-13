'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import Link from 'next/link';

const FinalImpact = () => {
    return (
        <section className="bg-white relative overflow-hidden py-32 lg:py-48">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Quote Block */}
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 relative"
                    >
                        <div className="absolute -left-8 lg:-left-12 top-2 h-24 w-2 bg-brand-orange rounded-full"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                            "Komp didn't just solve a payroll issue; they gave us a <span className="text-brand-orange">command center</span>. We launched in <span className="text-brand-orange">12 markets</span> in the time it usually takes to launch in one."
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 flex items-center gap-6 lg:justify-end"
                    >
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f8f6f5] shadow-2xl">
                            <img
                                alt="Marcus Thorne"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                            />
                        </div>
                        <div>
                            <div className="font-black text-xl text-slate-950 uppercase tracking-tighter">Marcus Thorne</div>
                            <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">CTO, FinScale Global</div>
                        </div>
                    </motion.div>
                </div>

                {/* 90-Day Impact Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f8f6f5] border border-slate-100 rounded-[3rem] p-12 lg:p-20 mb-24 shadow-sm relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-brand-orange/[0.02] pointer-events-none"></div>
                    <div className="text-center lg:text-left mb-16">
                        <h3 className="text-brand-orange font-black tracking-[0.2em] uppercase text-xs mb-4">The 90-Day Impact</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-center">
                        <div className="flex items-start gap-6 group/stat">
                            <div className="p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/50 text-brand-orange shrink-0 group-hover/stat:scale-110 transition-transform duration-500">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <div className="text-5xl lg:text-6xl font-black text-brand-orange mb-3 tracking-tighter">60%</div>
                                <p className="text-slate-900 font-black text-xl leading-tight tracking-tight">Reduction in Compliance Overhead</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group/stat">
                            <div className="p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/50 text-brand-orange shrink-0 group-hover/stat:scale-110 transition-transform duration-500">
                                <Rocket size={32} />
                            </div>
                            <div>
                                <div className="text-5xl lg:text-6xl font-black text-brand-orange mb-3 tracking-tighter">3x</div>
                                <p className="text-slate-900 font-black text-xl leading-tight tracking-tight">Faster Market Entry</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group/stat">
                            <div className="p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/50 text-brand-orange shrink-0 group-hover/stat:scale-110 transition-transform duration-500">
                                <BarChart3 size={32} />
                            </div>
                            <div>
                                <div className="text-5xl lg:text-6xl font-black text-brand-orange mb-3 tracking-tighter">100%</div>
                                <p className="text-slate-900 font-black text-xl leading-tight tracking-tight">Consolidated Spend Visibility</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main CTA */}
                <div className="text-center">
                    <Link href="/use-cases/global-hiring">
                        <Button
                            className="bg-brand-orange hover:bg-orange-600 text-white text-xl font-black py-6 px-12 rounded-full shadow-2xl shadow-brand-orange/40 transition-all hover:scale-105 border-none group"
                        >
                            Read Next Case Study
                            <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FinalImpact;
