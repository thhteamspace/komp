import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, Rocket, ArrowRight } from 'lucide-react';

const StepCard = ({ number, title, desc, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-8 opacity-5 font-mono text-8xl font-bold select-none pointer-events-none group-hover:opacity-10 transition-opacity">
            {number}
        </div>

        <div className="relative z-10 h-full flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

            <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
                <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-blue-500 transition-colors"></span>
                Step {number}
            </div>
        </div>
    </motion.div>
);

const LaunchSteps = () => {
    const steps = [
        {
            number: "01",
            title: "Step 1 Title",
            desc: "Description of the first step in the process. It explains the user action and the system response.",
            icon: FileText,
            delay: 0.1
        },
        {
            number: "02",
            title: "Step 2 Title",
            desc: "Description of the second step. Usually involves some form of processing or user interaction.",
            icon: UserCheck,
            delay: 0.2
        },
        {
            number: "03",
            title: "Step 3 Title",
            desc: "Description of the final step. Confirms the completion of the process and the result.",
            icon: Rocket,
            delay: 0.3
        }
    ];

    return (
        <section className="py-32 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Process Headline.</h2>
                    <p className="text-xl text-gray-500">Process Subheadline.</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-gray-200/50 -z-10" />

                    {steps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>

                {/* Final Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start Now <ArrowRight size={18} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default LaunchSteps;
