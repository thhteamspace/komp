'use client';

import { motion } from 'framer-motion';
import { Bot, Ticket, Clock, Headset, MessageSquare, ShieldCheck } from 'lucide-react';

const CompareSupport = () => {
    return (
        <section className="relative py-32 lg:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            <span className="text-[#FF8C1A]">Expertise</span> on the first call, every time.
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            No chatbots, no scripts. Just direct access to the experts who understand local labor laws as well as they understand your business.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 max-w-5xl mx-auto">

                    {/* Left Column: Standard Platforms */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Standard Platforms</span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        {[
                            { title: "Automated Bots", desc: "Generic AI responses that loop you through FAQs without understanding complex local nuance.", icon: Bot },
                            { title: "Support Tickets", desc: "Issues are assigned ticket numbers and queued, leaving you waiting days for a simple answer.", icon: Ticket },
                            { title: "Response Delays", desc: "Slow turnaround times on urgent compliance matters can put your business at legal risk.", icon: Clock }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start gap-5"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Komp Support */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-px bg-[#FF8C1A]/20 flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">Komp Support</span>
                            <div className="h-px bg-[#FF8C1A]/20 flex-1"></div>
                        </div>

                        {[
                            { title: "Human Experts", desc: "Talk directly to compliance specialists who know the specific labor laws of your hiring country.", icon: Headset },
                            { title: "Real-Time Chat", desc: "Instant communication channels for immediate resolution of urgent payroll or legal questions.", icon: MessageSquare },
                            { title: "Compliance Certainty", desc: "Proactive guidance on changing regulations ensures your global team remains fully compliant.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-xl p-6 border border-[#FF8C1A]/20 shadow-lg shadow-[#FF8C1A]/5 flex items-start gap-5 relative overflow-hidden group hover:shadow-[#FF8C1A]/10 transition-shadow"
                            >
                                <div className="absolute inset-0 bg-[#FF8C1A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF8C1A]/10 flex items-center justify-center text-[#FF8C1A] relative z-10">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompareSupport;
