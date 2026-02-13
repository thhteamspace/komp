'use client';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ChallengeSection = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                <div className="flex flex-col justify-center px-8 py-16 lg:p-20 lg:pr-16 order-2 lg:order-1 border-r border-gray-100">
                    <div className="max-w-xl ml-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-6"
                        >
                            The Challenge
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[0.95]"
                        >
                            Growth Stage Shouldn’t Dictate <br />
                            <span className="text-slate-400">Operational Risk.</span>
                        </motion.h3>

                        <div className="space-y-12">
                            {[
                                {
                                    title: "Early-Stage Friction",
                                    desc: "Startups often sacrifice compliance for speed. Informal processes work for 10 employees but create massive liability debt that explodes when crossing the 50-employee threshold."
                                },
                                {
                                    title: "Mid-Market Growing Pains",
                                    desc: "As companies expand into new regions, they typically bolt on disparate local vendors. This results in data silos, inconsistent employee experiences, and lost visibility over total spend."
                                },
                                {
                                    title: "Enterprise-Level Complexity",
                                    desc: "At scale, the sheer volume of entities and regulations can paralyze decision-making. Legacy systems become rigid, preventing the agility needed to capitalize on new market opportunities."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                >
                                    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h4>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] lg:h-auto order-1 lg:order-2 bg-[#f8f6f5] p-12 lg:pr-24 lg:py-16">
                    <img
                        alt="Enterprise Scaling Infrastructure"
                        className="relative w-full h-full object-cover transition-all duration-700 rounded-3xl"
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                    />
                    <div className="absolute inset-12 lg:inset-y-16 lg:left-12 lg:right-24 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
