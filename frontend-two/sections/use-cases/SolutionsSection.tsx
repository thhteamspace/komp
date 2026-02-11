'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, FileText, BadgeDollarSign, HeartPulse, ShieldAlert, User } from 'lucide-react';

const SolutionsSection = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#111827] mb-10 tracking-tighter leading-[1.1]">
                            A <span className="text-brand-orange">Centralized</span> Employment <br className="hidden md:block" />
                            & Compliance Layer
                        </h2>

                        <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                            Instead of expanding entity by entity, the company adopted KOMP as a unified operating layer for global employment.
                        </p>

                        <div className="space-y-8">
                            {[
                                "Hire full-time employees through Employer of Record (EOR) without local entities.",
                                "Engage contractors compliantly through Agent of Record (AOR).",
                                "Centralize payroll, statutory benefits, and compliance management across countries."
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-5 items-start"
                                >
                                    <div className="mt-1 w-7 h-7 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                    </div>
                                    <span className="text-lg text-slate-700 font-bold leading-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT VISUAL - THE UNIFIED OPERATING LAYER */}
                    <div className="relative">
                        <div className="relative w-full aspect-square flex items-center justify-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-300">
                            <div className="text-center p-8">
                                <h4 className="text-gray-400 font-bold text-2xl mb-2">DASHBOARD UI</h4>
                                <p className="text-gray-400">Platform Interface Placeholder</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Node = ({ x, y, label, icon }: { x: string, y: string, label: string, icon: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30"
        style={{ left: x, top: y }}
    >
        <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-400">
            {icon}
        </div>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">{label}</span>
    </motion.div>
);

const TeamNode = ({ label, color }: { label: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3"
    >
        <div className={`w-14 h-14 ${color} rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden`}>
            <div className="w-full h-full bg-slate-200/40 relative">
                <User className="w-8 h-8 text-white absolute bottom-[-4px] left-1/2 -translate-x-1/2" />
            </div>
        </div>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">{label}</span>
    </motion.div>
);

export default SolutionsSection;
