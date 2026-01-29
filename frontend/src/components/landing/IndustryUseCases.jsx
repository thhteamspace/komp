import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';

const CaseCard = ({ title, tagline, price, visual }) => (
    <motion.div
        className="min-w-[320px] md:min-w-[480px] h-[500px] bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
    >
        <div className="relative z-10">
            <h3 className="text-gray-900 text-2xl font-bold mb-1">{title}</h3>
            <p className="text-gray-500 font-medium mb-4">{tagline}</p>
            <div className="text-gray-400 text-xs font-mono">{price}</div>
        </div>

        {/* Visual Container - Image Placeholder */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] p-4 pb-0 flex items-end justify-center">
            <div className="w-full h-full bg-gray-100 rounded-t-3xl border-t border-x border-gray-200 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-50 transition-colors">
                {visual || (
                    <div className="flex flex-col items-center text-gray-300">
                        <ImageIcon size={48} className="mb-2" />
                        <span className="text-sm font-medium">Image Placeholder</span>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const IndustryUseCases = () => {
    const sliderRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-32 bg-[#F5F5F7] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 max-w-2xl leading-tight">
                        Protecting Global Expansion Where Risk Concentrates
                    </h2>
                    <p className="text-xl text-[#86868B] font-medium max-w-xl">
                        Industry-specific legal frameworks designed to mitigate sector-based risks.
                    </p>
                </div>

                {/* Visual Navigation Hint */}
                <div className="hidden md:flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-[#E8E8ED] flex items-center justify-center hover:bg-[#D2D2D7] transition-colors">
                        <ChevronRight className="rotate-180 text-black" size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#E8E8ED] flex items-center justify-center hover:bg-[#D2D2D7] transition-colors">
                        <ChevronRight className="text-black" size={20} />
                    </button>
                </div>
            </div>

            {/* The Slider */}
            <div className="pl-4 md:pl-8 overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={sliderRef}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-6 pb-12 w-max"
                >

                    <CaseCard
                        title="Technology"
                        tagline="Intellectual Property Protection"
                        price="IP Assignment & Vesting"
                    // Using default placeholder logic defined in CaseCard
                    />

                    <CaseCard
                        title="Healthcare"
                        tagline="Privacy, GDPR & Sensitive Data"
                        price="Audit-ready infrastructure"
                    />

                    <CaseCard
                        title="Professional Services"
                        tagline="Managing PE Risk"
                        price="Avoid Tax Residency"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default IndustryUseCases;
