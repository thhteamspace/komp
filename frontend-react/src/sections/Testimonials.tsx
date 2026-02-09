

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "KOMP compressed our global expansion from 8 months to 14 days, saving us $1.2M in infrastructure overhead.",
        author: "Sarah Jenkins",
        role: "CFO, FinScale",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        position: "object-[center_15%]"
    },
    {
        quote: "We switched from aggregators to KOMP's direct entities. The transparency in FX and taxes alone saved us $400k last year.",
        author: "Michael Chang",
        role: "Head of Operations, ApexGlobal",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        position: "object-[center_15%]"
    },
    {
        quote: "The only platform that successfully managed our complex equity compensation across 18 legal jurisdictions with zero errors.",
        author: "Elena Rodriguez",
        role: "CFO, InnovateX",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1000&auto=format&fit=crop",
        position: "object-center"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-slide effect: Only run when section is in viewport
    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            nextTestimonial();
        }, 8000);

        return () => clearInterval(interval);
    }, [activeIndex, isInView]);

    return (
        <section ref={sectionRef} className="py-32 bg-gray-50 border-t border-gray-200 relative overflow-hidden text-brand-black">
            {/* Background Texture - Subtle on Light */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

                {/* Header - Centered & Refined */}
                <div className="text-center mb-24 relative">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.03 } }
                        }}
                        className="font-black tracking-tighter mb-8 text-brand-black cursor-default"
                        style={{ fontSize: '4vw', lineHeight: '1.2' }}
                    >
                        {/* Staggered "Trusted By" */}
                        {Array.from("Trusted By").map((char, i) => (
                            <motion.span
                                key={`t-${i}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20, rotateX: 90 },
                                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.3 } }
                                }}
                                className="inline-block origin-bottom"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}

                        <span className="inline-block w-4" />

                        {/* Staggered "The Best." */}
                        {Array.from("The Best.").map((char, i) => (
                            <motion.span
                                key={`b-${i}`}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, y: 20 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, type: 'spring', stiffness: 200 } }
                                }}
                                className="inline-block text-brand-orange"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-black hover:bg-black hover:text-white transition-all shadow-sm bg-white"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-black hover:bg-black hover:text-white transition-all shadow-sm bg-white"
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
                            <div className="relative w-full aspect-square md:aspect-[5/4] rounded-[2rem] overflow-hidden group shadow-2xl bg-gray-200">
                                <motion.img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].author}
                                    className={`w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-700 ${testimonials[activeIndex].position || 'object-center'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
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
