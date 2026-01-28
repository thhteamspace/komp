import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Stethoscope, Briefcase, ArrowRight, ShieldCheck, Zap, Globe, Lock, Calculator, Building } from 'lucide-react';

const BentoCard = ({ type, title, subtitle, icon: Icon, color, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
        className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${className}`}
    >
        {/* Hover Gradient */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${color}`} />

        <div className="relative z-10">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-br ${color}`}>
                <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed">{subtitle}</p>
        </div>

        <div className="relative z-10 mt-8">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all">
                View Framework <ArrowRight size={16} />
            </div>
        </div>

        {/* Decorative Background Icon */}
        <Icon className="absolute -bottom-8 -right-8 text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-700" size={140} />
    </motion.div>
);

const IndustryUseCases = () => {
    return (
        <section className="py-32 bg-[#F5F5F7] border-b border-gray-200">
            <div className="container mx-auto px-8">

                <div className="max-w-3xl mb-16">
                    <div className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-4">Vertical Solutions</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                        Precision-engineered for <br /> your sector.
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Compliance isn't generic. We've pre-built legal frameworks for the world's most regulated industries.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 h-auto lg:h-[600px]">

                    {/* Main Feature: Tech (Wide) */}
                    <BentoCard
                        className="lg:col-span-2 lg:row-span-2"
                        title="Technology & SaaS"
                        subtitle="IP assignment automation and equity vesting for global engineering teams. Protect your codebase across 140+ jurisdictions."
                        icon={Cpu}
                        color="from-blue-500 to-indigo-600"
                        delay={0.1}
                    />

                    {/* Feature: Health (Tall) */}
                    <BentoCard
                        className="lg:col-span-1 lg:row-span-2"
                        title="Healthcare"
                        subtitle="HIPAA & GDPR ready. Data residency controls built-in."
                        icon={Stethoscope}
                        color="from-teal-400 to-emerald-600"
                        delay={0.2}
                    />

                    {/* Feature: Services (Standard) */}
                    <BentoCard
                        className="lg:col-span-1 lg:row-span-1"
                        title="Services"
                        subtitle="Agile consultancy contracts."
                        icon={Briefcase}
                        color="from-purple-500 to-pink-600"
                        delay={0.3}
                    />

                    {/* Feature: Fintech (Standard) */}
                    <BentoCard
                        className="lg:col-span-1 lg:row-span-1"
                        title="Fintech"
                        subtitle="Banking grade security."
                        icon={Lock}
                        color="from-orange-400 to-red-500"
                        delay={0.3}
                    />

                </div>

            </div>
        </section>
    );
};

export default IndustryUseCases;
