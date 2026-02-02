'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, ScrollText, AlertTriangle } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function CompliancePage() {
    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Hero */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6"
                    >
                        <Shield size={16} /> Global Legal Shield
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
                        Hire anywhere without <br />
                        <span className="text-blue-500">breaking the law.</span>
                    </h1>
                    <p className="text-xl text-brand-white/60">
                        We monitor labor laws in 150+ countries so you don't have to.
                        From IP protection to mandatory benefits, we've covered it all.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card hoverEffect className="p-8 bg-brand-white/5 border border-brand-white/10">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                            <ScrollText size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-white mb-3">Smart Contracts</h3>
                        <p className="text-brand-white/60">
                            Country-specific, expert-vetted employment agreements generated instantly. Protected by auto-updates.
                        </p>
                    </Card>

                    <Card hoverEffect className="p-8 bg-brand-white/5 border border-brand-white/10">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-white mb-3">Misclassification Protection</h3>
                        <p className="text-brand-white/60">
                            Our AI risk scoring analyzes worker relationships to ensure correct classification between contractors and employees.
                        </p>
                    </Card>

                    <Card hoverEffect className="p-8 bg-brand-white/5 border border-brand-white/10">
                        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-white mb-3">Automated Tax & Filings</h3>
                        <p className="text-brand-white/60">
                            We handle all government payments, social contributions, and tax filings on your behalf.
                        </p>
                    </Card>
                </div>

                {/* Floating Map Placeholder */}
                <div className="mt-20 relative h-[400px] w-full max-w-5xl mx-auto bg-[#0a0a0a] rounded-3xl border border-brand-white/10 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand-blue/5 blur-3xl" />
                    <div className="text-center z-10">
                        <Globe2 size={64} className="text-brand-white/20 mx-auto mb-4" />
                        <p className="text-brand-white/40 font-mono">Interactive Compliance Map</p>
                        <p className="text-brand-white/20 text-sm">(Visual representation of 150+ jurisdictions)</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

import { Globe2 } from 'lucide-react';
