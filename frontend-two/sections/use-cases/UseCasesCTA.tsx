'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Calendar, Globe2, ArrowRight, Sparkles } from 'lucide-react';

export default function UseCasesCTA() {
    return (
        <section className="py-32 bg-brand-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-white rounded-[4rem] p-12 lg:p-24 text-center border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                    {/* Animated background background - subtle logic */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
                        <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[70%] bg-brand-orange blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-30%] left-[-10%] w-[70%] h-[70%] bg-brand-blue blur-[120px] rounded-full" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full mb-10 border border-orange-100"
                        >
                            <Sparkles className="w-4 h-4 text-brand-orange" />
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-orange">Ready to Accelerate?</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tighter text-brand-black"
                        >
                            Don't let your business model be limited by <span className="text-brand-orange">geography.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium"
                        >
                            Whether you are hiring a single contractor or managing an entire global division,
                            we have the infrastructure to make it simple, safe, and cost-effective.
                            You bring the vision; we’ll handle the 150+ countries, the local taxes, and the legal liability.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Button size="lg" className="bg-brand-orange text-white hover:bg-orange-600 px-12 h-20 text-lg rounded-[2rem] group/btn transition-all shadow-xl shadow-orange-200/50 font-black">
                                Talk to an Expert
                                <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>

                            {/* Dashboard Invite Visual - Inspired by Image 1 */}
                            <div className="bg-slate-50 border border-slate-100 p-5 rounded-[2rem] flex items-center gap-5 text-left group-hover:bg-white transition-colors duration-500 shadow-sm">
                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                    <Calendar className="w-8 h-8 text-brand-blue" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Onboarding</p>
                                    <p className="text-sm font-black text-brand-black">10-minute strategy session</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="mt-20 flex justify-center gap-12 grayscale opacity-30">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">TRUSTED BY INDUSTRY LEADERS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
