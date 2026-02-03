'use client';

import { motion } from 'framer-motion';
import { UserPlus, FileSignature, MonitorCheck, Rocket } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Company Onboarding",
        desc: "Captures essential organizational details such as company profile, location, industry experience, and employee size.",
        icon: UserPlus,
        imgSrc: "/images/onboarding_step1.png",
        imgPos: "object-top"
    },
    {
        num: "02",
        title: "Authorized Contacts",
        desc: "Captures key business and finance points of contact who are officially authorized to manage operations and billing.",
        icon: FileSignature,
        imgSrc: "/images/onboarding_step2.png",
        imgPos: "object-top"
    },
    {
        num: "03",
        title: "Review Information",
        desc: "A consolidated view to verify accuracy and confirm that all business and compliance information is correct.",
        icon: MonitorCheck,
        imgSrc: "/images/onboarding_step3.png",
        imgPos: "object-top"
    },
    {
        num: "04",
        title: "MSA Agreement",
        desc: "Formally approve and execute the Master Vendor Agreement to activate global services instantly.",
        icon: Rocket,
        imgSrc: "/images/welcome_modal.png",
        imgPos: "object-top"
    }
];

const OnboardingSteps = () => {
    return (
        <section className="py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-24">
                    <span className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-4 block">Speed & Efficiency</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-tight">
                        Get Live in <br className="md:hidden" /> <span className="text-brand-orange">Days, Not Months.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[100px] left-0 w-full h-1 bg-gray-200 -z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative bg-white pt-12 pb-8 px-8 rounded-[2rem] border border-gray-100 shadow-lg group hover:-translate-y-2 transition-transform duration-500"
                            >
                                {/* Floating Number Bubble */}
                                <div className="absolute -top-6 left-8 w-14 h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center font-bold text-xl ring-8 ring-gray-50 group-hover:bg-brand-orange transition-colors">
                                    {step.num}
                                </div>

                                <div className="mb-8 h-32 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative shadow-sm">
                                    <img
                                        src={step.imgSrc}
                                        alt={step.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${step.imgPos}`}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OnboardingSteps;
