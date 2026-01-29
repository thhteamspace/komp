import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-[#050505] px-4 md:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="relative bg-black rounded-[3rem] p-12 md:p-32 text-center overflow-hidden shadow-2xl group">

                    {/* Warp Speed Starfield */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full opacity-40"
                                style={{
                                    width: Math.random() * 2 + 1 + 'px',
                                    height: Math.random() * 2 + 1 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: '50%',
                                }}
                                animate={{
                                    x: [(Math.random() - 0.5) * 1000],
                                    y: [(Math.random() - 0.5) * 1000],
                                    scale: [0, 5],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 2 + 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
                            Ready to operate <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">without borders?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop letting infrastructure dictate your strategy. Deploy your first entity in minutes, not months.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <Button variant="white" className="h-16 px-10 text-lg rounded-full font-bold w-full sm:w-auto">
                                Start Expansion <ArrowRight size={20} className="ml-2" />
                            </Button>
                            <Button variant="outline" className="h-16 px-10 text-lg text-white border-white/20 hover:bg-white/10 rounded-full font-medium">
                                Book a Demo
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Cancel anytime</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> SOC2 Secure</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> No credit card required</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
