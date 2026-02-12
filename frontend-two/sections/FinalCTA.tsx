'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-32 bg-brand-orange relative overflow-hidden">

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                        Ready to Hire Your <br />
                        Next Global Employee?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
                        <Button className="h-16 px-10 rounded-full bg-white text-brand-orange hover:bg-slate-50 font-bold text-lg shadow-xl shadow-orange-900/10">
                            Speak with an Expansion Expert
                        </Button>
                        <Button className="h-16 px-10 rounded-full bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg">
                            Calculate Hiring Costs
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-white/60 font-medium text-sm">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> 100% Compliant</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> No Setup Fees</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
