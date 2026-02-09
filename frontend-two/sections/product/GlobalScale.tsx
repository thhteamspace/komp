'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Globe, MapPin, Building2 } from 'lucide-react';

export default function GlobalScale() {
    return (
        <section className="py-32 bg-gradient-to-br from-brand-orange to-orange-600 relative overflow-hidden">

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                >
                    Global Reach
                </motion.span>

                <h2
                    className="font-black mb-12 tracking-tighter text-slate-900"
                    style={{ fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: '1.1' }}
                >
                    Scale to 150+ Countries.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-white border-2 border-slate-100 hover:shadow-xl transition-all"
                    >
                        <div className="mx-auto mb-4 text-slate-900">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">Entity-Free Expansion</h3>
                        <p className="text-slate-600 text-sm">Hire anywhere without establishing local legal entities.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-white border-2 border-slate-100 hover:shadow-xl transition-all"
                    >
                        <div className="mx-auto mb-4 text-slate-900">
                            <Building2 size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">Country-Specific Ops</h3>
                        <p className="text-slate-600 text-sm">Tailored operations for every jurisdiction you enter.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-white border-2 border-slate-100 hover:shadow-xl transition-all"
                    >
                        <div className="mx-auto mb-4 text-slate-900">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">Unified Management</h3>
                        <p className="text-slate-600 text-sm">Control your entire global footprint from one dashboard.</p>
                    </motion.div>
                </div>

                <Button variant="primary" size="lg" className="px-12 h-14 text-base bg-slate-900 text-white hover:bg-black">
                    View Country Guide
                </Button>
            </div>
        </section>
    );
}
