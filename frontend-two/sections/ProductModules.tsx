'use client';

import { motion } from 'framer-motion';
import {
    Users,
    FileCheck,
    CreditCard,
    Globe,
    ShieldCheck,
    BarChart3,
    Laptop
} from 'lucide-react';

const modules = [
    {
        title: 'Onboarding',
        desc: 'Send customized contracts and collect documents in one click.',
        icon: FileCheck,
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        imagePosition: 'object-right-top' // Simulated cropping
    },
    {
        title: 'Workforce',
        desc: 'Manage employees, contractors, and EORs in a single view.',
        icon: Users,
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        imagePosition: 'object-left-top'
    },
    {
        title: 'Global Payroll',
        desc: 'Pay your entire team in minutes, with zero errors.',
        icon: CreditCard,
        bg: 'bg-green-50',
        text: 'text-green-600',
        imagePosition: 'object-left-bottom'
    },
    {
        title: 'Governance',
        desc: 'Automated compliance checks against local laws.',
        icon: ShieldCheck,
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        imagePosition: 'object-right-bottom'
    },
    {
        title: 'Assets',
        desc: 'Ship laptops and equipment to 150+ countries easily.',
        icon: Laptop,
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        imagePosition: 'object-center'
    },
    {
        title: 'Insights',
        desc: 'Real-time reporting on headcount, costs, and diversity.',
        icon: BarChart3,
        bg: 'bg-pink-50',
        text: 'text-pink-600',
        imagePosition: 'object-center'
    }
];

const ProductModules = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">The Platform</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6 tracking-tight">
                        Everything you need to <br /> scale globally.
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        One unified suite to manage your entire global lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[#F9FAFB] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-8 pb-0">
                                <div className={`w-12 h-12 rounded-xl ${mod.bg} ${mod.text} flex items-center justify-center mb-6`}>
                                    <mod.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-white mb-3">{mod.title}</h3>
                                <p className="text-gray-500 mb-8 leading-relaxed h-[3rem]">
                                    {mod.desc}
                                </p>
                            </div>

                            {/* "Mock" Dashboard Preview Area */}
                            <div className="w-full h-[200px] mt-4 relative overflow-hidden bg-white border-t border-gray-100 group-hover:bg-gray-50 transition-colors">
                                <img
                                    src="/images/widgets_light.png"
                                    alt="UI Preview"
                                    className={`w-[150%] max-w-none absolute inset-0 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ${mod.imagePosition}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductModules;
