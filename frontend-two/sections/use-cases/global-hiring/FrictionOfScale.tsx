'use client';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Landmark } from 'lucide-react';

const FrictionOfScale = () => {
    const phases = [
        {
            num: '01',
            title: 'The Startup',
            subtitle: 'AGILITY > PROCESS',
            desc: 'Teams move fast and break things. Data is manual, processes are tribal knowledge. The friction point arrives when "hustle" no longer scales.',
            icon: Rocket,
            color: 'blue',
            mt: 'lg:mt-0'
        },
        {
            num: '02',
            title: 'The Scaleup',
            subtitle: 'CHAOS VS CONTROL',
            desc: 'Headcount doubles. Communication breaks down. Tool proliferation creates "shadow IT." This is the danger zone where efficiency plummets.',
            icon: TrendingUp,
            color: 'orange',
            mt: 'lg:mt-12',
            highlight: true
        },
        {
            num: '03',
            title: 'The Enterprise',
            subtitle: 'PROCESS > AGILITY',
            desc: 'Rigid silos form. Innovation slows due to compliance layers. The organization is stable but risks becoming obsolete without renewed agility.',
            icon: Landmark,
            color: 'purple',
            mt: 'lg:mt-24'
        }
    ];

    return (
        <section className="py-32 bg-[#f8f6f5]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-[2.5rem] font-black text-slate-900 mb-4 tracking-tighter">
                        The Friction of Scale
                    </h2>
                    <p className="text-slate-500 font-medium">Identifying the breaking points at each critical evolution phase.</p>
                </div>

                <div className="relative">
                    {/* Background Connecting Line */}
                    <div className="hidden lg:block absolute top-[140px] left-0 w-full h-1 bg-slate-200 dark:bg-gray-800 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {phases.map((phase, i) => (
                            <div key={i} className={`relative group transition-all duration-500 ${phase.mt}`}>
                                {/* Phase Tag */}
                                <div className={`absolute -top-4 left-8 z-20 px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg ${phase.highlight ? 'bg-brand-orange' : 'bg-slate-900'
                                    }`}>
                                    Phase {phase.num}
                                </div>

                                <div className={`h-full bg-white rounded-3xl p-10 pt-16 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-t-4 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 ${phase.highlight ? 'border-brand-orange' : 'border-transparent'
                                    }`}>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${phase.color === 'blue' ? 'bg-blue-50 text-blue-500' :
                                            phase.color === 'orange' ? 'bg-orange-50 text-brand-orange' :
                                                'bg-purple-50 text-purple-500'
                                        }`}>
                                        <phase.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">{phase.title}</h3>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{phase.subtitle}</div>
                                    <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                                        {phase.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrictionOfScale;
