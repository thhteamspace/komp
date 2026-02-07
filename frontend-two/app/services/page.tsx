'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe, Users, CreditCard, Laptop } from 'lucide-react';
import Card from '@/components/Card';

const services = [
    {
        icon: Globe,
        title: 'Employer of Record (EOR)',
        desc: 'Hire full-time employees in 150+ countries without setting up a local entity. KOMP assumes all legal liability.',
        color: 'text-brand-blue'
    },
    {
        icon: Users,
        title: 'Agent of Record (AOR)',
        desc: 'Onboard international contractors compliantly. We provide misclassification protection and risk monitoring.',
        color: 'text-brand-orange'
    },
    {
        icon: CreditCard,
        title: 'Global Payroll',
        desc: 'Consolidate multi-country payroll into a single payment. We handle 100+ currencies and automated tax deductions.',
        color: 'text-green-400'
    },
    {
        icon: Laptop,
        title: 'HRIS & Relocation',
        desc: 'Manage the entire employee lifecycle. We assist with visas, relocation, and benefits administration globally.',
        color: 'text-purple-400'
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-brand-white mb-6"
                >
                    Everything You Need to <br />
                    <span className="text-brand-blue">Hire and Pay Globally.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-brand-white/60 max-w-2xl mx-auto mb-10"
                >
                    From EOR to contractor management, we provide the infrastructure to hire anyone, anywhere.
                </motion.p>
            </section>

            {/* Service Cards */}
            <section className="py-24 bg-brand-white container-fluid">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hoverEffect className="h-full p-10 flex flex-col items-start bg-brand-black/5 border border-brand-black/10 text-brand-black hover:bg-brand-white hover:shadow-2xl">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-100 shadow-xl border border-white/50 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500`}>
                                        <div className={`absolute inset-0 rounded-2xl opacity-20 blur-xl ${service.color.replace('text-', 'bg-')}`} />
                                        <service.icon size={32} className={`${service.color} relative z-10`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-black mb-4">{service.title}</h3>
                                    <p className="text-brand-black/60 leading-relaxed mb-8 flex-grow">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center text-brand-orange font-medium group cursor-pointer">
                                        Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-brand-white/10 bg-brand-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-brand-white mb-6">Ready to scale globally?</h2>
                    <div className="flex justify-center gap-4">
                        <Button size="lg">Start Hiring Now</Button>
                        <Button variant="outline" size="lg">Talk to an Expert</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
