'use client';

import { motion } from 'framer-motion';
import { Ban, ShieldAlert, FileWarning } from 'lucide-react';

const StatsStrip = () => {
    return (
        <section className="py-16 bg-white border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <p className="text-sm font-medium text-slate-400 mb-10">
                    Loved by next-generation teams
                </p>

                {/* Logos Row */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/2560px-Zoom_Communications_Logo.svg.png" alt="Zoom" className="h-6 md:h-8 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png" alt="Siemens" className="h-5 md:h-6 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-8 md:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" alt="Snowflake" className="h-8 md:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" alt="Asana" className="h-6 md:h-8 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/N26_logo.svg/2560px-N26_logo.svg.png" alt="N26" className="h-6 md:h-8 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </div>

                {/* Pain Points Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100/50">
                        <Ban size={14} className="text-indigo-900" />
                        <span className="text-xs font-bold text-indigo-900 line-through decoration-indigo-900/50 decoration-2">Entity Delays</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100/50">
                        <ShieldAlert size={14} className="text-indigo-900" />
                        <span className="text-xs font-bold text-indigo-900 line-through decoration-indigo-900/50 decoration-2">Compliance Risk</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100/50">
                        <FileWarning size={14} className="text-indigo-900" />
                        <span className="text-xs font-bold text-indigo-900 line-through decoration-indigo-900/50 decoration-2">Misclassification Fines</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StatsStrip;
