import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Clock, CheckCircle } from 'lucide-react';
import Card from '@/components/Card';
import UnifiedSystem from '@/sections/UnifiedSystem';
import { useEffect } from 'react';

export default function LandingPage() {
    useEffect(() => {
        document.title = 'Hire Globally in 48 Hours | KOMP';
    }, []);

    return (
        <div className="bg-brand-black min-h-screen">

            {/* Hero */}
            <section className="pt-32 pb-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold text-sm mb-8"
                >
                    <Clock size={16} /> Hire in 48 Hours
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-bold text-brand-white mb-6 max-w-5xl mx-auto"
                >
                    Hire your first (or next) <br />
                    <span className="text-brand-orange">global employee in 48 hours.</span>
                </motion.h1>

                <p className="text-xl text-brand-white/60 mb-10 max-w-2xl mx-auto">
                    No local entity required. We handle the compliance, you handle the talent.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button size="lg" className="px-10 py-4 text-xl">Talk to an Expert</Button>
                    <Button variant="outline" size="lg" className="px-10 py-4 text-xl">See how it works</Button>
                </div>
            </section>

            {/* Proof & Stats */}
            <section className="py-12 border-y border-brand-white/10 bg-brand-white/5">
                <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
                    <div>
                        <div className="text-4xl font-bold text-brand-white mb-1">150<span className="text-lg">+</span></div>
                        <div className="text-brand-white/50 text-sm">Countries Supported</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-brand-white mb-1">1,200<span className="text-lg">+</span></div>
                        <div className="text-brand-white/50 text-sm">Active Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-brand-white mb-1">99<span className="text-lg">%</span></div>
                        <div className="text-brand-white/50 text-sm">Retention Rate</div>
                    </div>
                </div>
            </section>

            {/* Control Center (Reuse Section) */}
            <UnifiedSystem />

            {/* Problem vs Solution */}
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <h3 className="text-red-400 font-bold text-2xl mb-6">Traditional EORs</h3>
                        <ul className="space-y-4">
                            {['Slow onboarding (Weeks)', 'Hidden FX Fees & Markups', 'Poor Support Response Time', 'Disjointed Systems', 'Compliance Grey Areas'].map(item => (
                                <li key={item} className="flex items-start gap-3 text-brand-white/60">
                                    <span className="text-red-500 font-bold">✕</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-brand-blue text-brand-white text-xs font-bold rounded-bl-xl">KOMP WAY</div>
                        <h3 className="text-brand-blue font-bold text-2xl mb-6">The KOMP Approach</h3>
                        <ul className="space-y-4">
                            {['Onboard in 48 Hours', 'Transparent Flat-Fee Pricing', 'Dedicated Account Manager', 'Unified Operating System', '100% Indemnified Compliance'].map(item => (
                                <li key={item} className="flex items-start gap-3 text-brand-white">
                                    <CheckCircle size={20} className="text-brand-orange" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Strong CTA */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-orange/5 blur-3xl -z-10" />
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-white mb-8">
                        Stop waiting,<br />start hiring.
                    </h2>
                    <Button size="lg" className="text-xl px-12 py-5 shadow-2xl shadow-brand-orange/20">
                        Get Started in 48 Hours
                    </Button>
                </div>
            </section>

        </div>
    );
}
