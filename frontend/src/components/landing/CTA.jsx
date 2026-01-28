import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="relative bg-[#0A0A0A] rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden border border-gray-800 shadow-2xl">

                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-0 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                                Ready to operate <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">without borders?</span>
                            </h2>

                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                Stop letting infrastructure dictate your strategy. Deploy your first entity in minutes, not months.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                                <Button variant="primary" className="h-14 px-8 text-base bg-white text-black hover:bg-gray-100 border-transparent shadow-lg shadow-white/10 w-full sm:w-auto">
                                    Start Expansion <ArrowRight size={18} className="ml-2" />
                                </Button>
                                <Button variant="outline" className="h-14 px-8 text-base text-white border-gray-700 hover:bg-white/10 w-full sm:w-auto">
                                    Book a Demo
                                </Button>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-500" /> No credit card required
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-500" /> Cancel anytime
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-500" /> SOC2 Secure
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
