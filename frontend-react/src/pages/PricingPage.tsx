import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Check } from 'lucide-react';
import Card from '@/components/Card';
import { useEffect } from 'react';

export default function PricingPage() {
    useEffect(() => {
        document.title = 'Pricing | KOMP Global Payroll & EOR';
    }, []);

    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-brand-white mb-6"
                >
                    Transparent Pricing.<br />
                    <span className="text-brand-white/50">No Hidden Fees.</span>
                </motion.h1>
                <p className="text-xl text-brand-white/60 mb-16 max-w-2xl mx-auto">
                    We charge a flat monthly fee per employee. No percentage of salary. No hidden FX markups.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contractors (AOR) */}
                    <Card className="flex flex-col p-8 bg-brand-white/5 border border-brand-white/10 text-left">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-brand-white mb-2">Agent of Record (AOR)</h3>
                            <p className="text-brand-white/50 text-sm">Automate contractor payments & compliance.</p>
                        </div>
                        <div className="text-4xl font-bold text-brand-white mb-8">
                            <span className="text-lg font-normal text-brand-white/50">Custom Quote</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Localized Contracts', 'Instant Payments', 'Tax Form Collection', 'Misclassification Protection'].map(feat => (
                                <li key={feat} className="flex items-center gap-3 text-brand-white/80">
                                    <Check size={18} className="text-brand-orange" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <Button fullWidth variant="outline">Get AOR Quote</Button>
                    </Card>

                    {/* Employer of Record (EOR) */}
                    <Card className="flex flex-col p-8 bg-brand-white/5 border border-brand-orange/30 text-left relative transform md:-translate-y-2 shadow-sm">
                        <div className="absolute top-0 right-0 p-3 -mt-4 mr-2">
                            <span className="bg-brand-orange/20 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-brand-orange/20">Most Popular</span>
                        </div>
                        <div className="mb-6 mt-2">
                            <h3 className="text-2xl font-bold text-brand-white mb-2">Employer of Record (EOR)</h3>
                            <p className="text-brand-white/50 text-sm">Hire full-time employees without an entity.</p>
                        </div>
                        <div className="text-4xl font-bold text-brand-white mb-8">
                            <span className="text-lg font-normal text-brand-white/50">Custom Quote</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Legal Entity Setup', 'Benefits Administration', 'Payroll & Tax Filing', 'Risk Indemnification'].map(feat => (
                                <li key={feat} className="flex items-center gap-3 text-brand-white">
                                    <Check size={18} className="text-brand-orange" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <Button fullWidth variant="primary">Get EOR Quote</Button>
                    </Card>

                    {/* Global Payroll */}
                    <Card className="flex flex-col p-8 bg-brand-white/5 border border-brand-white/10 text-left">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-brand-white mb-2">Global Payroll</h3>
                            <p className="text-brand-white/50 text-sm">For employees in your own entities.</p>
                        </div>
                        <div className="text-4xl font-bold text-brand-white mb-8">
                            <span className="text-lg font-normal text-brand-white/50">Custom Quote</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Multi-country Processing', 'Single Invoice', 'Payslip Delivery', 'Statutory Reporting'].map(feat => (
                                <li key={feat} className="flex items-center gap-3 text-brand-white/80">
                                    <Check size={18} className="text-brand-orange" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <Button fullWidth variant="outline">Get Payroll Quote</Button>
                    </Card>
                </div>

                <p className="mt-12 text-brand-white/40 text-sm">
                    * Pricing depends on country and volume. Contact us for enterprise tiers.
                </p>
            </div>
        </div>
    );
}
