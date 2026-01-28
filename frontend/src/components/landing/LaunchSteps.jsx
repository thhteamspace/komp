import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList, UserCheck, PlayCircle } from 'lucide-react';

const StepCard = ({ step, title, desc, icon: Icon, active, completed }) => (
    <div className={`relative p-6 rounded-xl border transition-all duration-300 ${active ? 'bg-white border-blue-500 shadow-lg scale-105 z-10' : completed ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-gray-100 opacity-40'}`}>

        {/* Step Badge */}
        <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${active ? 'bg-blue-600 border-white text-white shadow-md' : completed ? 'bg-green-500 border-white text-white' : 'bg-gray-200 border-white text-gray-500'}`}>
            {completed ? <Check size={14} /> : step}
        </div>

        <div className="mb-4 text-gray-800">
            <Icon size={24} className={active ? 'text-blue-600' : 'text-gray-400'} />
        </div>

        <h3 className={`text-lg font-bold mb-2 ${active ? 'text-black' : 'text-gray-500'}`}>{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
            {desc}
        </p>

        {active && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-blue-600 animate-pulse">
                <div className="w-2 h-2 bg-blue-500 rounded-full" /> In Progress
            </div>
        )}
    </div>
);

const LaunchSteps = () => {
    // Mock interactivity
    const [currentStep, setCurrentStep] = useState(2);

    return (
        <section className="py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-8">

                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Launch Sequence
                    </h2>
                    <p className="text-gray-500 max-w-lg">
                        Follow a guided path to global expansion. No legal complexity, just a simple onboarding flow.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 relative">
                    {/* Progress Bar Background */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2 hidden md:block" />

                    {/* Step 1 */}
                    <StepCard
                        step="1"
                        icon={ClipboardList}
                        title="Generate Contracts"
                        desc="Input candidate details. We instantly generate compliant local agreements."
                        active={false}
                        completed={true}
                    />

                    {/* Step 2 */}
                    <StepCard
                        step="2"
                        icon={UserCheck}
                        title="Onboard Candidate"
                        desc="Employee self-onboards via secure portal. Identity & Tax verified."
                        active={true}
                        completed={false}
                    />

                    {/* Step 3 */}
                    <StepCard
                        step="3"
                        icon={PlayCircle}
                        title="Go Live"
                        desc="Payroll is synced. Benefits are enrolled. Your employee is ready to work."
                        active={false}
                        completed={false}
                    />
                </div>

            </div>
        </section>
    );
};

export default LaunchSteps;
