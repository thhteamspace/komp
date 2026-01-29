import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white border-t border-white/10 overflow-hidden">
            {/* Massive Brand Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-6 pt-24 pb-20">
                    <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter -ml-2 text-white select-none">
                        KOMP<span className="text-[#3b82f6]">.</span>
                    </h1>
                </div>
            </div>

            {/* Grid Layout for Links & Info */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 border-l border-white/10 border-r border-white/10">

                    {/* Column 1: Descriptor */}
                    <div className="md:col-span-4 border-b md:border-b-0 border-white/10 p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider mb-6">
                                Global Infrastructure
                            </span>
                            <p className="text-xl md:text-2xl font-medium leading-tight text-white/80 max-w-sm">
                                The operating system for modern global employment.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-12">
                            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">System Operational</span>
                        </div>
                    </div>

                    {/* Column 2: Platform */}
                    <div className="md:col-span-2 md:border-l border-b md:border-b-0 border-white/10 p-8">
                        <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-8">Platform</h4>
                        <ul className="space-y-6">
                            {['Global EOR', 'Contractors', 'Payroll', 'Entities'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center gap-2 text-lg font-medium hover:text-[#3b82f6] transition-colors">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="md:col-span-2 md:border-l border-b md:border-b-0 border-white/10 p-8">
                        <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-8">Resources</h4>
                        <ul className="space-y-6">
                            {['Case Studies', 'Blog', 'Guidebooks', 'API Docs'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center gap-2 text-lg font-medium hover:text-[#3b82f6] transition-colors">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="md:col-span-2 md:border-l border-b md:border-b-0 border-white/10 p-8">
                        <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-8">Company</h4>
                        <ul className="space-y-6">
                            {['About', 'Careers', 'Contact', 'Press'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center gap-2 text-lg font-medium hover:text-[#3b82f6] transition-colors">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Column 5: Socials (Mobile stacked, Desktop narrow col) */}
                    <div className="md:col-span-2 md:border-l border-white/10 p-8 flex flex-col justify-end">
                        <ul className="space-y-4">
                            {['Twitter', 'LinkedIn', 'Instagram'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-mono text-white/50 hover:text-white transition-colors uppercase tracking-wider block border-b border-white/10 pb-2">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-wider">
                        <p>&copy; {new Date().getFullYear()} Komp Global Inc. — All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
