'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Counter = ({ value }: { value: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" }); // Triggers when 100px up from bottom

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (isInView) {
            const controls = animate(0, parseInt(value), {
                duration: 1.5,
                ease: "circOut",
                onUpdate: (latest) => {
                    node.textContent = Math.round(latest).toString();
                }
            });
            return () => controls.stop();
        } else {
            node.textContent = "0"; // Reset when out of view
        }
    }, [isInView, value]);

    return <span ref={ref} className="tabular-nums">0</span>;
};

const TrustProof = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logos = ['ACME', 'GLOBEX', 'SOYLENT', 'UMBRELLA', 'CYBERDYNE', 'MASSIVE', 'STARK', 'WAYNE'];
    const stats = [
        { label: 'Countries Covered', value: '150', suffix: '+', color: 'text-brand-blue' },
        { label: 'Talent Retention', value: '99', suffix: '%', color: 'text-brand-orange' },
        { label: 'Compliance Rate', value: '100', suffix: '%', color: 'text-green-500' },
    ];

    if (!mounted) return null;

    return (
        <section className="py-40 bg-white overflow-hidden relative">
            {/* Background Texture - Light dots */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 relative z-10">

                {/* Logo Marquee Section - Kept as requested ('perfect') */}
                <div className="mb-40">
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-16">Global Growth, Guaranteed</p>
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="flex whitespace-nowrap gap-32 items-center"
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <span key={i} className="text-5xl md:text-7xl font-black text-gray-200 hover:text-gray-400 transition-colors cursor-default tracking-tighter montserrat">
                                    {logo}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Minimalist & High-Impact Stats - Clean Redesign */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`flex flex-col items-center text-center px-12 relative ${i !== stats.length - 1 ? 'md:border-r border-gray-200' : ''}`}
                        >
                            {/* The Number - Massive and Clean */}
                            <span className={`text-[8rem] md:text-[11rem] font-black leading-none tracking-tighter text-black block group-hover:text-brand-orange transition-colors duration-500`}>
                                <Counter value={stat.value} />
                                <span className="text-5xl md:text-6xl font-light text-brand-orange italic ml-2">{stat.suffix}</span>
                            </span>

                            {/* The Label - Precise and Wide */}
                            <div className="flex flex-col items-center gap-4">
                                <div className={`h-[1px] w-8 bg-gradient-to-r from-transparent via-brand-orange to-transparent`} />
                                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-black">
                                    {stat.label}
                                </h4>
                            </div>

                            {/* Hover Decorative Glow */}
                            <div className={`absolute inset-0 bg-brand-orange/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10`} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Badge - Super Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="mt-40 flex flex-col items-center"
                >
                    <div className="h-px w-24 bg-gray-200 mb-8" />
                    <p className="text-gray-400 text-sm font-medium italic">Empowering 2,000+ teams worldwide.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustProof;
