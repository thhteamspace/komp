'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "KOMP allowed us to enter the Japanese market in 2 weeks instead of 6 months. The compliance shield is real.",
        author: "Sarah Jenkins",
        role: "VP of People, FinScale",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
    },
    {
        quote: "We switched from Deel because we needed a partner, not just a platform. KOMP's legal team is an extension of ours.",
        author: "Michael Chang",
        role: "CFO, ApexGlobal",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        quote: "The only EOR that actually understands equity compensation across 20 different jurisdictions. A game changer.",
        author: "Elena Rodriguez",
        role: "Head of Talent, InnovateX",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-32 bg-gray-50 border-t border-gray-200 relative overflow-hidden text-brand-black">
            {/* Background Texture - Subtle on Light */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex items-end justify-between mb-24">
                    <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em]">
                        Trusted By The Best
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-black hover:bg-black hover:text-white transition-all"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-black hover:bg-black hover:text-white transition-all"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                            {/* Left: Text */}
                            <div>
                                <Quote className="text-brand-orange w-16 h-16 opacity-100 mb-8" />
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium text-brand-black leading-[1.1] mb-12 tracking-tight">
                                    "{testimonials[activeIndex].quote}"
                                </h3>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-gray-300" />
                                    <div>
                                        <div className="text-brand-black font-bold text-lg">{testimonials[activeIndex].author}</div>
                                        <div className="flex items-center gap-3 text-gray-500 text-sm">
                                            <span>{testimonials[activeIndex].role}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                                            <span>{testimonials[activeIndex].location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative w-full aspect-square md:aspect-[5/4] rounded-[2rem] overflow-hidden group shadow-2xl">
                                <motion.img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].author}
                                    className="w-full h-full object-cover object-center saturate-0 group-hover:saturate-100 transition-all duration-700 scale-100 group-hover:scale-105"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                />

                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Bar */}
                <div className="mt-20 flex gap-2">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1 flex-1 rounded-full transition-all duration-500 cursor-pointer ${i === activeIndex ? 'bg-brand-orange' : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
