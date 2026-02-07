'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/Button';

const ResourcesCTA = () => {
    return (
        <section className="py-32 px-6 bg-transparent relative overflow-hidden">
            {/* Background Details - Soft Mesh */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 shadow-[0_40px_80px_rgba(0,0,0,0.2)] text-center relative overflow-hidden group">
                    {/* Abstract Tech Background */}
                    <div className="absolute inset-0 opacity-40 mix-blend-screen">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                            className="w-full h-full object-cover filter blur-sm scale-110"
                            alt="Background"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900/80 z-0" />
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="w-16 h-16 rounded-[1.5rem] bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 shadow-inner"
                        >
                            <Zap size={24} />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="font-black text-white tracking-tighter mb-6 leading-tight"
                            style={{ fontSize: '4vw' }}
                        >
                            Ready to expand <span className="text-brand-orange">with confidence?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-xl font-medium mb-16 leading-relaxed"
                        >
                            Our global infrastructure is built for speed, but our knowledge is built for precision. Learn from experts who handle compliance for 1,200+ entities daily.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <Button variant="premium" size="lg" className="h-16 px-12 bg-brand-orange text-white hover:bg-white hover:text-brand-orange">
                                Talk to a Compliance Expert <MessageSquare size={18} />
                            </Button>
                            <Link href="/#success_stories" className="h-16 px-12 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto flex items-center justify-center">
                                View Success Stories
                            </Link>
                        </motion.div>
                    </div>

                    {/* Subtle decorative bottom ornament */}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default ResourcesCTA;
