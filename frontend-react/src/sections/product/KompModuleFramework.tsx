

import { motion } from 'framer-motion';
import { UserPlus, Users, Clock, CreditCard, ShieldCheck, AreaChart, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '@/components/Card';
import { useRef } from 'react';

const modules = [
    {
        title: 'KOMP Activate',
        subtitle: 'Onboarding',
        icon: <UserPlus className="w-8 h-8 text-brand-blue" />,
        features: [
            'Company onboarding',
            'User invites',
            'Secure setup',
            'Compliance-ready activation'
        ]
    },
    {
        title: 'KOMP Workforce',
        subtitle: 'Employees & Contractors',
        icon: <Users className="w-8 h-8 text-brand-orange" />,
        features: [
            'Central workforce records',
            'Contractor management',
            'IP protection',
            'Country-based worker handling'
        ]
    },
    {
        title: 'KOMP TimeOps',
        subtitle: 'Timesheets',
        icon: <Clock className="w-8 h-8 text-purple-500" />,
        features: [
            'Hourly & monthly time tracking',
            'Attendance and leave',
            'Approval workflows',
            'Payroll-ready time data'
        ]
    },
    {
        title: 'KOMP PayOps',
        subtitle: 'Payroll & Invoicing',
        icon: <CreditCard className="w-8 h-8 text-green-500" />,
        features: [
            'Multi-currency payroll',
            'Invoice generation',
            'Payment processing',
            'Consolidated funding'
        ]
    },
    {
        title: 'KOMP Governance',
        subtitle: 'Security & Access',
        icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
        features: [
            'Role-based access control',
            'Audit logs',
            'Secure permissions',
            'Accountability'
        ]
    },
    {
        title: 'KOMP Insights',
        subtitle: 'Monitoring & Alerts',
        icon: <AreaChart className="w-8 h-8 text-yellow-500" />,
        features: [
            'Legislative alerts',
            'Notifications',
            'Activity tracking',
            'Search & insights'
        ]
    }
];

export default function KompModuleFramework() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-32 bg-white relative">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Core Modules
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        The KOMP <span className="text-brand-orange">Framework.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        A modular architecture designed for complete global workforce management.
                    </p>
                </div>

                {/* Horizontal scrollable container */}
                <div className="relative">
                    {/* Left scroll button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right scroll button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scrollable cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-16"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[380px]"
                            >
                                <Card
                                    hoverEffect
                                    className="h-full p-8 border-2 border-slate-100 hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300 bg-white group rounded-[2rem]"
                                >
                                    {/* Icon in top left corner */}
                                    <div className="inline-flex p-4 bg-orange-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {module.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
                                        {module.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm font-medium text-slate-500 mb-6">
                                        {module.subtitle}
                                    </p>

                                    {/* Features with checkmarks */}
                                    <ul className="space-y-3">
                                        {module.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                                <svg className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
