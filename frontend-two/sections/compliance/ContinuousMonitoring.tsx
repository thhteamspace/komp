'use client';

import { motion } from 'framer-motion';
import { Eye, RefreshCcw, BellRing, Bell } from 'lucide-react';
import Card from '@/components/Card';

const monitoringFeatures = [
    {
        icon: <RefreshCcw className="w-8 h-8 text-brand-blue" />,
        title: "Labor Law Tracking",
        description: "Automated updates whenever local employment laws change."
    },
    {
        icon: <BellRing className="w-8 h-8 text-brand-orange" />,
        title: "Legislative Updates",
        description: "Stay ahead of government policy shifts affecting your team."
    },
    {
        icon: <Bell className="w-8 h-8 text-yellow-400" />,
        title: "Policy Change Alerts",
        description: "Instant notifications for critical compliance requirements."
    },
    {
        icon: <Eye className="w-8 h-8 text-red-400" />,
        title: "Operational Notifications",
        description: "Know exactly when and how to adjust your internal processes."
    }
];

export default function ContinuousMonitoring() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-24 max-w-7xl mx-auto">

                    {/* Text Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue text-sm font-bold mb-8 block"
                        >
                            Always On Tracking
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-black text-brand-black mb-8 tracking-tighter"
                            style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.2' }}
                        >
                            Continuous <br /> <span className="text-brand-orange">Monitoring.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-slate-500 mb-10 leading-relaxed font-medium"
                        >
                            Employment laws are constantly evolving. Our platform actively monitors jurisdictions worldwide to ensure your workforce infrastructure stays ahead of every legislative shift.
                        </motion.p>
                    </div>

                    {/* Cards Side */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {monitoringFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="bg-white border-2 border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col justify-between rounded-[2.5rem] group">
                                    <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all shadow-sm border border-slate-100 w-fit">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
