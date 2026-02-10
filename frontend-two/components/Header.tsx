'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Shield, Users, Briefcase, Zap, Rocket, LineChart, Layers } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/cn';

const megaMenuData = {
    Product: [
        { name: 'Platform Overview', desc: 'Unified global workforce OS.', icon: Layers, href: '/product#overview' },
        { name: 'Global Payroll', desc: 'Pay everyone, everywhere.', icon: Zap, href: '/product#framework' },
        { name: 'Compliance', desc: 'Risk-free global scaling.', icon: Shield, href: '/compliance' },
        { name: 'Workforce Management', desc: 'Onboard and manage talent.', icon: Users, href: '/product#framework' },
    ],
    Solutions: [
        { name: 'For Tech & SaaS', desc: 'Scale engineering teams with zero risk.', icon: Zap, href: '/solutions#industries' },
        { name: 'For Healthcare', desc: 'Strict regulatory & HIPAA compliance.', icon: Shield, href: '/solutions#industries' },
        { name: 'For Professional Services', desc: 'Deploy consultants worldwide instantly.', icon: Briefcase, href: '/solutions#industries' },
        { name: 'M&A Integration', desc: 'Fast-track workforce consolidation.', icon: LineChart, href: '/solutions#industries' },
    ],
};

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    // Determine if we need a dark header (transparent bg, white text) initially
    // This applies to /resources, /compliance, and /product which have dark hero sections (or need similar treatment)
    // Actually Product and Compliance hero sections in my previous turn were White and Black respectively.
    // Product Hero is White. Compliance Hero is Black.
    // So Product should be like Solutions (Light header initially?).
    // Compliance should be like Resources (Dark header initially?).

    // Let's check the previous code.
    // ProductHero.tsx -> bg-brand-white
    // ComplianceHero.tsx -> bg-brand-black

    // So for /compliance, we want isDarkHeader = true.
    // For /product, we want isDarkHeader = false (default light theme behavior? or does it start transparent on white?)
    // The current logic: isDarkHeader = pathname?.includes('/resources');
    // If we add /compliance, it should also be dark.

    const isDarkHeader = pathname?.includes('/resources');

    const isDarkHeaderRef = useRef(isDarkHeader);

    useEffect(() => {
        isDarkHeaderRef.current = isDarkHeader;
    }, [isDarkHeader]);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === 'undefined') return;
            // robust check using window location directly
            const isResourcePage = window.location.pathname.includes('/resources');

            // Keep header transparent until full viewport scroll ONLY on Resources page
            const threshold = isResourcePage ? window.innerHeight - 80 : 20;
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = !isScrolled && !activeMegaMenu && isDarkHeader;

    return (
        <motion.header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                isScrolled || activeMegaMenu
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm'
                    : 'bg-transparent border-b border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    scroll={false}
                    className="flex items-center gap-2 z-50 group"
                    onClick={() => {
                        window.scrollTo(0, 0); // Immediate reset before router takes over
                        if (pathname === '/') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <img
                        src="/images/Logo_1-04-removebg-preview.png"
                        alt="KOMP Logo"
                        className="h-14 w-auto object-contain transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav with Mega Menu */}
                <nav className="hidden lg:flex items-center gap-10 ml-12">
                    {Object.entries(megaMenuData).map(([name, items]) => {
                        const sectionId = name === 'Product' ? '/product' : name === 'Solutions' ? '/solutions' : '#';
                        const isActive = (name === 'Product' && pathname === '/product') || (name === 'Solutions' && pathname === '/solutions');

                        return (
                            <div key={name} className="relative py-2 flex items-center group/nav">
                                <div className="relative">
                                    {/* Text clicks directly to section */}
                                    <Link
                                        href={sectionId}
                                        onClick={() => setActiveMegaMenu(null)}
                                        className={cn(
                                            "text-sm font-semibold transition-colors duration-300",
                                            isActive || activeMegaMenu === name
                                                ? "text-brand-orange"
                                                : isTransparent
                                                    ? "text-white/90 hover:text-white"
                                                    : "text-slate-600 hover:text-slate-950"
                                        )}
                                    >
                                        {name}
                                    </Link>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange mx-auto w-full"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>

                                {/* Arrow toggles the dropdown */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setActiveMegaMenu(activeMegaMenu === name ? null : name);
                                    }}
                                    className={cn(
                                        "ml-1 p-1 transition-all duration-300",
                                        isActive || activeMegaMenu === name
                                            ? "text-brand-orange"
                                            : isTransparent
                                                ? "text-white/90 group-hover/nav:text-white"
                                                : "text-slate-600 group-hover/nav:text-slate-950"
                                    )}
                                >
                                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeMegaMenu === name ? "rotate-180" : "")} />
                                </button>


                            </div>
                        );
                    })}

                    <div className="relative py-2">
                        <Link
                            href="/compliance"
                            onClick={() => setActiveMegaMenu(null)}
                            className={cn(
                                "text-sm font-semibold transition-colors",
                                pathname === '/compliance'
                                    ? "text-brand-orange"
                                    : isTransparent
                                        ? "text-white/90 hover:text-white"
                                        : "text-slate-600 hover:text-slate-950"
                            )}
                        >
                            Compliance
                        </Link>
                        {pathname === '/compliance' && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange mx-auto w-full"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </div>

                    <div className="relative py-2">
                        <Link
                            href="/resources"
                            onClick={() => setActiveMegaMenu(null)}
                            className={cn(
                                "text-sm font-semibold transition-colors",
                                pathname === '/resources'
                                    ? "text-brand-orange"
                                    : isTransparent
                                        ? "text-white/90 hover:text-white"
                                        : "text-slate-600 hover:text-slate-950"
                            )}
                        >
                            Resources
                        </Link>
                        {/* Active Indicator for Resources */}
                        {pathname === '/resources' && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange mx-auto w-full"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </div>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/login"
                        className={cn(
                            "text-sm font-semibold transition-colors",
                            isTransparent ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-slate-950"
                        )}
                    >
                        Login
                    </Link>
                    <Link href="#reality">
                        <Button variant="primary" size="sm" className="rounded-full shadow-lg text-xs">Talk to a Compliance Expert</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("lg:hidden z-50 transition-colors", isTransparent ? "text-white" : "text-slate-950")}
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
                                        <div className="mb-8">
                                            <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Featured Insights</span>
                                        </div>
                                        <h3 className="text-4xl font-semibold tracking-tighter mb-4 leading-tight">
                                            2026 Global <br />
                                            <span className="text-brand-orange">Expansion Playbook.</span>
                                        </h3>
                                        <p className="text-white/60 text-base font-normal leading-relaxed mb-8">
                                            The definitive guide to EOR, entity setup, and localized compliance in 150+ countries.
                                        </p>
                                    </div>

                                    <Link href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="relative z-10 inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:text-white transition-colors group/btn">
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
                                                    scroll={false}
                                                    className="group flex gap-5 items-start p-4 -m-4 rounded-3xl hover:bg-slate-50 transition-all duration-300"
                                                    onClick={(e) => {
                                                        setActiveMegaMenu(null);

                                                        // Handle same-page anchor navigation
                                                        const [urlPath, hash] = subItem.href.split('#');
                                                        if (hash && pathname === urlPath) {
                                                            e.preventDefault();
                                                            const element = document.getElementById(hash);
                                                            if (element) {
                                                                element.scrollIntoView({ behavior: 'smooth' });
                                                                // Update URL hash without jumping
                                                                window.history.pushState(null, '', subItem.href);
                                                            }
                                                        }
                                                    }}
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
                        <div className="flex flex-col gap-10">
                            {[
                                { name: 'Product', href: '/product' },
                                { name: 'Solutions', href: '/solutions' },
                                { name: 'Compliance', href: '/compliance' },
                                { name: 'Resources', href: '/resources' }
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
                            <Button fullWidth variant="primary" className="h-14 rounded-full">Talk to a Compliance Expert</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
