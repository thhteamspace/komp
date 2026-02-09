

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import Button from '@/components/Button';

const SolutionsCTA = () => {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            {/* Soft Premium Background Detail */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

            <div className="w-full max-w-7xl mx-auto relative z-10 px-6">
                <div className="bg-slate-50/50 backdrop-blur-3xl border border-slate-200 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl shadow-slate-200/50">
                    {/* Subtle decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-block"
                            >
                                <span className="text-base font-bold text-brand-blue">Expand Without Limits</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
                            >
                                Don’t let your business model be <span className="text-brand-orange">limited by geography.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
                            >
                                Single contractor → full division. KOMP handles 150+ countries. Taxes, legal, and liability completely covered.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="premium" size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-brand-orange/10 rounded-full">
                                    Talk to a Compliance Expert <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="lg" className="h-14 px-8 text-base font-semibold border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all rounded-full bg-white">
                                    View the Platform
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                {[
                                    { label: 'Taxes', icon: <CheckCircle2 className="w-4 h-4 text-brand-blue" /> },
                                    { label: 'Legal', icon: <CheckCircle2 className="w-4 h-4 text-brand-blue" /> },
                                    { label: 'Liability', icon: <CheckCircle2 className="w-4 h-4 text-brand-blue" /> }
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="text-sm font-bold text-slate-600">{item.label} covered</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Calendar Preview Visual - Light Version */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-[2rem] p-8 shadow-2xl relative z-10 border border-slate-100">
                                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-black border border-slate-100">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block text-lg font-black text-brand-black">Expansion Strategy</span>
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10-Minute Consultation</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border border-slate-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                        Inquiry Hub
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {['09:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'].map((time, idx) => (
                                        <div
                                            key={time}
                                            className={`p-4 rounded-xl border-2 text-center transition-all duration-300 cursor-pointer font-bold ${idx === 1 ? 'border-brand-blue bg-blue-50 text-brand-blue shadow-md' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200'}`}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-900 rounded-full p-6 text-white flex items-center justify-between group cursor-pointer hover:bg-brand-black transition-colors shadow-lg shadow-slate-900/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">Request Information</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Decorative behind elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100/50 border border-slate-200 rounded-[2rem] -rotate-6 z-0" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100/50 border border-slate-200 rounded-[2rem] rotate-3 z-0" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsCTA;
