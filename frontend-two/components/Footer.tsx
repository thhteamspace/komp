'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f1a] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">

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
