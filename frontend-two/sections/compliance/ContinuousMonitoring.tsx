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
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">

                    {/* Text Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6 border border-green-500/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Always On
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                        >
                            Continuous Monitoring & Updates
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-400 mb-8 leading-relaxed"
                        >
                            Laws don't sleep, and neither do we. Our platform actively monitors jurisdictions worldwide to ensure you never miss a critical change.
                        </motion.p>
                    </div>

                    {/* Cards Side */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {monitoringFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                            >
                                <Card className="bg-zinc-800/80 border-zinc-700 hover:border-zinc-500 p-6 h-full flex flex-col justify-between">
                                    <div className="mb-4">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-400">{feature.description}</p>
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
