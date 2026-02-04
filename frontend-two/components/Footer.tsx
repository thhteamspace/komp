'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f1a] border-t border-white/5 pt-72 pb-10 relative">
            {/* GIANT CINEMATIC LOGO EFFECT - MASKED REVEAL */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-[9.75vw] w-auto whitespace-nowrap z-10 select-none overflow-visible px-[5vw]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="relative font-black tracking-wider text-[19.5vw] leading-none flex"
                >
                    {["K", "O", "M", "P"].map((letter, i) => (
                        <div key={i} className="overflow-hidden py-24 -my-24">
                            <motion.span
                                variants={{
                                    hidden: { y: "120%", opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 1.8, ease: [0.33, 1, 0.68, 1] }
                                    }
                                }}
                                whileHover={{
                                    y: -10,
                                    filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.4))',
                                    transition: { duration: 0.4 }
                                }}
                                className="relative block bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-400 to-white"
                                style={{
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                                }}
                            >
                                {letter}
                            </motion.span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-20">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <div className="text-2xl font-bold tracking-tighter text-white mb-6">
                            KOMP<span className="text-brand-orange">.</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                            The infrastructure for global ambition. Hire, pay, and manage talent in 150+ countries without the compliance risk.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange text-white transition-colors cursor-pointer">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-grow">

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Products</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link href="/services" className="hover:text-white transition-colors">Global EOR</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Contractor Management</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Global Payroll</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Multi-Country HRIS</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link href="/use-cases" className="hover:text-white transition-colors">For Startups</Link></li>
                                <li><Link href="/use-cases" className="hover:text-white transition-colors">For Enterprise</Link></li>
                                <li><Link href="/use-cases" className="hover:text-white transition-colors">For Finance Teams</Link></li>
                                <li><Link href="/use-cases" className="hover:text-white transition-colors">For Legal Teams</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Resources</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance Hub</Link></li>
                                <li><Link href="/pricing" className="hover:text-white transition-colors">Global Payroll Guide</Link></li>
                                <li><Link href="/compare" className="hover:text-white transition-colors">Competitor Comparison</Link></li>
                                <li><Link href="/landing" className="hover:text-white transition-colors">Global Expansion Playbook</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Ready to Launch?</h4>
                            <p className="text-zinc-400 text-sm mb-6">Get your custom expansion quote today.</p>
                            <Link href="/compliance">
                                <Button size="sm" variant="primary" className="rounded-full">Get a Quote</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 mt-12">
                    <div className="text-zinc-600 text-xs mb-4 md:mb-0">
                        © {new Date().getFullYear()} KOMP Global Inc. Montreal • Dubai. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-xs text-zinc-500 font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
