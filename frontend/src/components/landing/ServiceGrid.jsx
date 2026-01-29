import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CaseCard = ({ title, metric, result, desc, tags, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col justify-between"
    >
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none" />

        <div>
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider font-semibold text-white/60">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight size={16} />
                </div>
            </div>

            <h3 className="text-xl font-medium text-white/50 mb-1">{title}</h3>
            <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                {metric} <br />
                <span className="text-blue-500">{result}</span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                {desc}
            </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-green-500">
            <CheckCircle2 size={14} />
            VERIFIED OUTCOME
        </div>
    </motion.div>
);

const ServiceGrid = () => {
    return (
        <section className="py-32 bg-[#050505] text-white relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                <div className="mb-20">
                    <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Evidence Vault</h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
                            Impact where it <br />
                            <span className="text-white/40">matters most.</span>
                        </h3>
                        <p className="text-white/50 max-w-sm text-lg">
                            Real results from rapid expansion. <br />
                            No fluff. Just execution.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Story 1: Speed */}
                    <CaseCard
                        tags={['Expansion', 'Speed']}
                        title="Global Tech Co"
                        metric="Weeks to"
                        result="Minutes"
                        desc="Replaced fragmented entities with one layer. Offer-to-contract timelines reduced drastically."
                        delay={0.1}
                    />

                    {/* Story 2: Efficiency */}
                    <CaseCard
                        tags={['Consulting', 'Ops']}
                        title="Professional Services"
                        metric="200+ Hours"
                        result="Reclaimed"
                        desc="Leadership regained weeks of productive time by removing compliance friction from day-to-day operations."
                        delay={0.2}
                    />

                    {/* Story 3: Risk */}
                    <CaseCard
                        tags={['Enterprise', 'Risk']}
                        title="Multinational Corp"
                        metric="100% Risk"
                        result="Offloaded"
                        desc="Expanded into new jurisdictions without audit exposure. Growth continued without interruption."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
