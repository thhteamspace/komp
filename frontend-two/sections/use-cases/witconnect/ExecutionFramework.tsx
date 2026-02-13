'use client';
import { Rocket, ShieldCheck, CreditCard } from 'lucide-react';

const ExecutionFramework = () => {
    return (
        <section className="py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h3 className="text-[2.5rem] font-bold text-slate-900 mb-4 inline-block relative">
                        Execution Framework
                        <div className="absolute -bottom-4 left-0 w-16 h-1.5 bg-brand-orange rounded-full" />
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        {
                            num: '01',
                            title: 'Market Entry',
                            desc: 'Identified talent hubs in Vietnam and Portugal. Deployed offers within 48 hours using Komp\'s localized contract templates.',
                            icon: Rocket
                        },
                        {
                            num: '02',
                            title: 'Compliance Shield',
                            desc: 'Automated IP assignment and non-compete enforcement tailored to local laws, ensuring zero-risk employee onboarding.',
                            icon: ShieldCheck
                        },
                        {
                            num: '03',
                            title: 'Unified Payroll',
                            desc: 'Consolidated multi-currency payouts into a single monthly invoice, eliminating FX fees and reconciliation headaches.',
                            icon: CreditCard
                        }
                    ].map((item, i) => (
                        <div key={i} className="group">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center text-brand-orange mb-8 transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(255,140,26,0.15)] group-hover:-translate-y-1">
                                <item.icon size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-4">
                                {item.num}. {item.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionFramework;
