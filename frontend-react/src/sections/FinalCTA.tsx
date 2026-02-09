

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="pt-32 pb-64 bg-brand-white relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-white text-brand-black border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden relative group"
                >
                    {/* Animated background accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full group-hover:bg-brand-orange/10 transition-colors duration-700" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-brand-black"
                    >
                        Ready to accelerate your <br /> <span className="text-brand-orange">global ambition?</span>
                    </motion.h2>

                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
                        Join hundreds of forward-thinking companies using KOMP to build global teams with expert compliance support.
                    </p>

                    {/* Lead Gen Form - Optimized for light */}
                    <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-full p-2 pl-6 flex flex-col md:flex-row gap-4 items-center relative shadow-sm">
                        <input
                            type="email"
                            placeholder="Work Email"
                            className="flex-1 bg-transparent border-none text-brand-black placeholder:text-gray-400 focus:ring-0 h-10 md:h-12 outline-none min-w-[160px]"
                        />
                        <div className="w-px h-8 bg-gray-200 hidden md:block self-center flex-shrink-0" />
                        <select defaultValue="" className="bg-transparent border-none text-gray-600 focus:ring-0 h-10 md:h-12 outline-none [&>option]:text-black md:max-w-[150px] appearance-none cursor-pointer flex-shrink-0">
                            <option value="" disabled>Select Country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="other">Other</option>
                        </select>
                        <Button variant="premium" className="h-14 px-10 rounded-full whitespace-nowrap bg-brand-black text-white hover:bg-brand-orange transition-colors border-none font-medium shrink-0">
                            Talk to a Compliance Expert
                        </Button>
                    </div>

                    <p className="text-gray-400 text-xs mt-6 font-medium tracking-wide">
                        No credit card required. SOC2 Compliant.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
