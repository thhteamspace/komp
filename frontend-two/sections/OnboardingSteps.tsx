'use client';

import { motion } from 'framer-motion';


const steps = [
    {
        num: "01",
        title: "Create Account",
        desc: "Sign up and build your company profile in seconds."
    },
    {
        num: "02",
        title: "Generate Contract",
        desc: "Create compliant local contracts for any country instantly."
    },
    {
        num: "03",
        title: "Sign & Onboard",
        desc: "Send to candidate for e-signature and identity verification."
    },
    {
        num: "04",
        title: "One-Click Pay",
        desc: "Consolidate global payroll into a single monthly invoice."
    }
];

const OnboardingSteps = () => {
    return (
        <section id="onboarding" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="text-6xl font-black text-slate-100 mb-6 group-hover:text-brand-orange/20 transition-colors">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnboardingSteps;
