'use client';
import { motion } from 'framer-motion';
import { Users, CreditCard, Gavel, XCircle } from 'lucide-react';

const ProblemsSection = () => {
    return (
        <div className="bg-white">
            {/* HR Silo Section */}
            <section className="py-32 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-brand-orange/10 rounded-3xl blur-2xl opacity-50"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[600px]">
                                <img
                                    alt="HR Team collaborating"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-brand-orange">
                                    <p className="text-xs font-bold text-slate-400 tracking-tight mb-2">Pain Point</p>
                                    <p className="text-xl font-bold text-slate-950 leading-tight italic">
                                        "Payroll took 14 days to process across 12 regions."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8">
                                <Users size={32} />
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.1] tracking-tighter">
                                The HR Silo: <br /><span className="text-brand-orange">Data Trapped in Transit</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
                                <p>
                                    When the logistics giant expanded into Southeast Asia, their HR data became a fragmented mess of incompatible spreadsheets and local legacy software.
                                </p>
                                <p>
                                    The central team in London had zero real-time visibility into headcount or regional compliance risks. Every month end became a fire-drill of manual reconciliation.
                                </p>
                                <ul className="space-y-4 mt-8">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="text-brand-orange mt-1 shrink-0" size={20} />
                                        <span className="font-bold text-slate-700">Manual data entry errors rose by 15%</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="text-brand-orange mt-1 shrink-0" size={20} />
                                        <span className="font-bold text-slate-700">Compliance audits delayed by 3 months</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Finance Section */}
            <section className="py-32 border-t border-slate-100 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8">
                                <CreditCard size={32} />
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.1] tracking-tighter">
                                Finance: <br /><span className="text-brand-orange">Reconciliation Nightmares</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
                                <p>
                                    Without a unified currency engine, the finance department was effectively flying blind for the first 20 days of every quarter.
                                </p>
                                <p>
                                    Cash flow forecasting was based on 45-day old data. By the time regional ledgers were consolidated, market conditions had shifted.
                                </p>
                                <blockquote className="pl-6 border-l-4 border-brand-orange/30 italic text-slate-400 my-10 text-xl font-medium leading-relaxed">
                                    "We were making million-dollar decisions based on guesswork and expired data."
                                </blockquote>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-slate-200 rounded-3xl -rotate-2"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[600px]">
                                <img
                                    alt="Finance documents"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    src="https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Section */}
            <section className="py-32 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-brand-orange/10 rounded-3xl blur-2xl opacity-50"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[600px]">
                                <img
                                    alt="Legal Contracts"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8">
                                <Gavel size={32} />
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.1] tracking-tighter">
                                Legal: <br /><span className="text-brand-orange">The Compliance Black Hole</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
                                <p>
                                    Version control was non-existent. Regional teams were operating off outdated contract templates, missing critical clauses related to new GDPR regulations.
                                </p>
                                <p>
                                    The exposure was massive. Legal counsel spent 80% of their time chasing signed documents rather than advising on strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProblemsSection;
