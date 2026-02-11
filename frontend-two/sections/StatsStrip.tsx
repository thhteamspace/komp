'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '$87B+', label: 'Processed Annually' },
    { value: '99.8%', label: 'On-Time Payment' },
    { value: '150+', label: 'Countries Supported' },
];

const StatsStrip = () => {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center px-4"
                        >
                            <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2 tracking-tight">{stat.value}</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
