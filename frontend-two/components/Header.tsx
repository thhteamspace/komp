'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Shield, Users, Briefcase, Zap, Rocket, LineChart } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/cn';

const megaMenuData = {
    Platform: [
        { name: 'Global EOR', desc: 'Hire in 150+ countries without entities.', icon: Globe, href: '#platform' },
        { name: 'Contractor Management', desc: 'Secure, localized contracts & payments.', icon: Shield, href: '#platform' },
        { name: 'Multi-Country Payroll', desc: 'Unified payroll for your global team.', icon: Zap, href: '#platform' },
        { name: 'Global Mobility', desc: 'Visas, relocation & local benefits.', icon: Rocket, href: '#platform' },
    ],
    Solutions: [
        { name: 'For Tech & SaaS', desc: 'Scale engineering teams with zero risk.', icon: Zap, href: '#industries' },
        { name: 'For Healthcare', desc: 'Strict regulatory & HIPAA compliance.', icon: Shield, href: '#industries' },
        { name: 'For Professional Services', desc: 'Deploy consultants worldwide instantly.', icon: Briefcase, href: '#industries' },
        { name: 'M&A Integration', desc: 'Fast-track workforce consolidation.', icon: LineChart, href: '#industries' },
    ],
    'Global Coverage': [
        { name: 'Country Explorer', desc: 'Real-time labor laws in 150+ markets.', icon: Globe, href: '#reality' },
        { name: 'EOR India', desc: 'Market entry & hiring in India.', icon: Globe, href: '#reality' },
        { name: 'EOR Brazil', desc: 'Strategic expansion into LATAM.', icon: Globe, href: '#reality' },
        { name: 'Compliance Engine', desc: 'Automated legal risk management.', icon: Shield, href: '#reality' },
    ]
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                isScrolled || activeMegaMenu
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm'
                    : 'bg-transparent border-b border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 group">
                    <img
                        src="/images/Logo_1-04-removebg-preview.png"
                        alt="KOMP Logo"
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav with Mega Menu */}
                <nav className="hidden lg:flex items-center gap-10 ml-12">
                    {Object.entries(megaMenuData).map(([name, items]) => {
                        const sectionId = name === 'Platform' ? '#platform' : name === 'Solutions' ? '#industries' : '#reality';
                        return (
                            <div key={name} className="relative py-2 flex items-center group/nav">
                                {/* Text clicks directly to section */}
                                <Link
                                    href={sectionId}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className={cn(
                                        "text-[13px] font-black uppercase tracking-widest transition-colors duration-300",
                                        activeMegaMenu === name ? "text-brand-orange" : "text-slate-600 hover:text-slate-950"
                                    )}
                                >
                                    {name}
                                </Link>

                                {/* Arrow toggles the dropdown */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setActiveMegaMenu(activeMegaMenu === name ? null : name);
                                    }}
                                    className={cn(
                                        "ml-1 p-1 transition-all duration-300",
                                        activeMegaMenu === name ? "text-brand-orange" : "text-slate-600 group-hover/nav:text-slate-950"
                                    )}
                                >
                                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeMegaMenu === name ? "rotate-180" : "")} />
                                </button>
                            </div>
                        );
                    })}
                    <Link href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="text-[13px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-950 transition-colors">
                        Resources
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/login" className="text-[13px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-950 transition-colors">
                        Login
                    </Link>
                    <Link href="#reality">
                        <Button variant="primary" size="sm" className="rounded-full px-8 text-[11px] font-black uppercase tracking-widest">
                            Get a Compliance Audit
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden z-50 text-slate-950"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MEGA MENU DROPDOWN PANEL */}
            <AnimatePresence>
                {activeMegaMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-12">
                            <div className="flex gap-16">
                                {/* Left Feature Card - High Authority */}
                                <div className="hidden xl:flex w-1/3 flex-col justify-between p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group/featured">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover/featured:scale-125" />

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Featured Insights</span>
                                        </div>
                                        <h3 className="text-3xl font-bold tracking-tighter mb-4 leading-tight">
                                            2026 Global <br />
                                            <span className="text-brand-orange">Expansion Playbook.</span>
                                        </h3>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                                            The definitive guide to EOR, entity setup, and localized compliance in 150+ countries.
                                        </p>
                                    </div>

                                    <Link href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="relative z-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-white transition-colors group/btn">
                                        Download Guide
                                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>

                                {/* Right Grid System */}
                                <div className="flex-1">
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].map((subItem, i) => (
                                            <motion.div
                                                key={subItem.name}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    className="group flex gap-5 items-start p-4 -m-4 rounded-3xl hover:bg-slate-50 transition-all duration-300"
                                                    onClick={() => setActiveMegaMenu(null)}
                                                >
                                                    <div className="w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-brand-orange transition-all duration-500">
                                                        <subItem.icon size={22} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-950 mb-1 group-hover:text-brand-orange transition-colors">
                                                            {subItem.name}
                                                        </h4>
                                                        <p className="text-[13px] text-slate-500 font-medium leading-tight">
                                                            {subItem.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Bottom Authority Strip */}
                                    <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Enterprise Standard:</span>
                                            <div className="flex gap-8 grayscale opacity-40">
                                                <span className="text-[10px] font-black">SOC2 COMPLIANT</span>
                                                <span className="text-[10px] font-black">GDPR READY</span>
                                                <span className="text-[10px] font-black">ISO 27001</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 w-full h-screen bg-white z-[40] flex flex-col p-8 lg:hidden pt-32"
                    >
                        {/* Mobile links simple version for now */}
                        <div className="flex flex-col gap-10">
                            {[
                                { name: 'Platform', href: '#platform' },
                                { name: 'Solutions', href: '#industries' },
                                { name: 'Global Coverage', href: '#reality' },
                                { name: 'Resources', href: '#knowledge' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-black text-slate-950 tracking-tighter hover:text-brand-orange transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-4">
                            <Link href="/login" className="text-center font-bold text-slate-500 uppercase tracking-widest text-sm py-4">
                                Login
                            </Link>
                            <Button fullWidth className="h-16 rounded-2xl">Get a Compliance Audit</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
