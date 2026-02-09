

import { motion } from 'framer-motion';
import { Workflow, Plug, LayoutTemplate, Zap, Database, Shield, ArrowRight, Share2, Cpu } from 'lucide-react';
import Card from '@/components/Card';

const integrations = [
    {
        icon: <Workflow className="w-8 h-8 text-blue-600" />,
        title: "HRIS Ecosystem",
        description: "Connect instantly with BambooHR, Workday, HiBob, and 50+ other HR platforms without manual data entry.",
        size: "large",
        bg: "bg-blue-50/50"
    },
    {
        icon: <LayoutTemplate className="w-6 h-6 text-orange-600" />,
        title: "Finance & ERP",
        description: "Sync with NetSuite and QuickBooks.",
        bg: "bg-orange-50/50"
    },
    {
        icon: <Share2 className="w-6 h-6 text-purple-600" />,
        title: "API-First",
        description: "Custom endpoints for your stack.",
        bg: "bg-purple-50/50"
    },
    {
        icon: <Database className="w-8 h-8 text-emerald-600" />,
        title: "Unified Data Mesh",
        description: "A single source of truth for global workforce data, streaming in real-time to your existing data warehouse.",
        size: "wide",
        bg: "bg-emerald-50/50"
    },
    {
        icon: <Cpu className="w-6 h-6 text-slate-700" />,
        title: "Workflows",
        description: "Automate across 1000+ apps.",
        bg: "bg-slate-50/50"
    },
    {
        icon: <Shield className="w-6 h-6 text-red-600" />,
        title: "Secure Auth",
        description: "SSO and SCIM provisioning.",
        bg: "bg-red-50/50"
    }
];

export default function Integrations() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Centered Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Seamless Integrations
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.1' }}
                    >
                        Your Tech Stack. <span className="text-brand-orange">Perfectly Linked.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Maintain a single flow of truth by connecting KOMP to the tools your team already loves.
                    </p>
                </div>

                {/* Balanced Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[1fr]">
                    {/* 1. Large Feature (2x2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 lg:row-span-2"
                    >
                        <div className="h-full bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border-b-4 border-b-blue-500/20">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Workflow size={140} />
                            </div>
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-10">
                                    <Workflow className="text-blue-600 w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">{integrations[0].title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {integrations[0].description}
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold group/btn cursor-pointer">
                                Explore HR Systems <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Small Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="h-full bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-orange-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <LayoutTemplate className="text-orange-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{integrations[1].title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {integrations[1].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Small Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="h-full bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-purple-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Share2 className="text-purple-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{integrations[2].title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {integrations[2].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* 4. Wide Feature (2x1) - Fills the row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-8 hover:shadow-xl transition-all duration-300 border-b-4 border-b-emerald-500/20">
                            <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-emerald-50 flex items-center justify-center">
                                <Database className="text-emerald-500 w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{integrations[3].title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {integrations[3].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 5. Wide Feature (2x1) - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-8 hover:shadow-xl transition-all duration-300 border-b-4 border-b-brand-orange/20">
                            <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-orange-50 flex items-center justify-center">
                                <Zap className="text-brand-orange w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">Real-time Automation</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Trigger instant actions across your stack with our global webhook engine.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 6. Small Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Cpu className="text-slate-700 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{integrations[4].title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {integrations[4].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* 7. Small Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-red-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="text-red-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{integrations[5].title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {integrations[5].description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Logo Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-10 border-t border-slate-100 flex flex-wrap justify-center items-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    <div className="font-black text-2xl text-slate-400 tracking-tighter">SAP</div>
                    <div className="font-black text-2xl text-slate-400 tracking-tighter italic">QuickBooks</div>
                    <div className="font-black text-2xl text-slate-400 tracking-tighter">Workday</div>
                    <div className="font-black text-2xl text-slate-400 tracking-tighter italic">BambooHR</div>
                    <div className="font-black text-2xl text-slate-400 tracking-tighter uppercase">Xero</div>
                </motion.div>
            </div>
        </section>
    );
}
