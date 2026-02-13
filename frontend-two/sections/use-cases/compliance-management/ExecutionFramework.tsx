'use client';
import { motion } from 'framer-motion';
import { Database, Settings, TrendingUp } from 'lucide-react';

const ExecutionFramework = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Execution Framework</h2>
                    <p className="text-lg text-slate-500 font-medium">The 90-day roadmap used to dismantle silos and rebuild the operational infrastructure.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            phase: "Phase 1: Migration",
                            icon: <Database size={32} />,
                            desc: "Establishing the primary data lake. Mapping fields from 7 disparate systems into the Komp universal schema.",
                            points: ["Data Cleaning", "Schema Mapping", "Legacy Archiving"]
                        },
                        {
                            phase: "Phase 2: Integration",
                            icon: <Settings size={32} />,
                            desc: "Connecting regional endpoints. Deploying the Komp API gateways to handle local currency and tax logic.",
                            points: ["API Deployment", "Workflow Automation", "User Training"]
                        },
                        {
                            phase: "Phase 3: Optimization",
                            icon: <TrendingUp size={32} />,
                            desc: "Leveraging the new unified dataset to run predictive analytics and automated compliance reporting.",
                            points: ["Real-time Dashboards", "Auto-Reconciliation", "Strategic Forecasting"]
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 rounded-[2.5rem] border border-slate-100 bg-[#f8f6f5] hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-brand-orange mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 mb-6 tracking-tight">{step.phase}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                            <ul className="space-y-4">
                                {step.points.map((point, j) => (
                                    <li key={j} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                                        <span className="text-sm font-bold text-slate-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionFramework;
