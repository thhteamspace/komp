'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-brand-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <div className="text-2xl font-bold tracking-tighter text-brand-white mb-6">
                            KOMP <span className="text-brand-orange">.</span>
                        </div>
                        <p className="text-brand-white/60 mb-8">
                            The infrastructure for global ambition. Hire, pay, and manage talent in 150+ countries without the compliance risk.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-brand-white/5 flex items-center justify-center hover:bg-brand-orange text-brand-white transition-colors cursor-pointer">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-grow">

                        <div>
                            <h4 className="font-semibold text-brand-white mb-4">Products</h4>
                            <ul className="space-y-3 text-sm text-brand-white/60">
                                <li><Link href="/services" className="hover:text-brand-orange transition-colors">Global EOR</Link></li>
                                <li><Link href="/services" className="hover:text-brand-orange transition-colors">Contractor Management</Link></li>
                                <li><Link href="/services" className="hover:text-brand-orange transition-colors">Global Payroll</Link></li>
                                <li><Link href="/services" className="hover:text-brand-orange transition-colors">Multi-Country HRIS</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-brand-white mb-4">Solutions</h4>
                            <ul className="space-y-3 text-sm text-brand-white/60">
                                <li><Link href="/use-cases" className="hover:text-brand-orange transition-colors">For Startups</Link></li>
                                <li><Link href="/use-cases" className="hover:text-brand-orange transition-colors">For Enterprise</Link></li>
                                <li><Link href="/use-cases" className="hover:text-brand-orange transition-colors">For Finance Teams</Link></li>
                                <li><Link href="/use-cases" className="hover:text-brand-orange transition-colors">For Legal Teams</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-brand-white mb-4">Resources</h4>
                            <ul className="space-y-3 text-sm text-brand-white/60">
                                <li><Link href="/compliance" className="hover:text-brand-orange transition-colors">Compliance Hub</Link></li>
                                <li><Link href="/pricing" className="hover:text-brand-orange transition-colors">Global Payroll Guide</Link></li>
                                <li><Link href="/compare" className="hover:text-brand-orange transition-colors">Competitor Comparison</Link></li>
                                <li><Link href="/landing" className="hover:text-brand-orange transition-colors">Global Expansion Playbook</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-brand-white mb-4">Ready to Launch?</h4>
                            <p className="text-sm text-brand-white/60 mb-4">Get your custom expansion quote today.</p>
                            <Button size="sm">Get a Quote</Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-brand-white/10 mt-12">
                    <div className="text-brand-white/40 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} KOMP Global Inc. Montreal • Dubai. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm text-brand-white/60">
                        <Link href="#" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-brand-white transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
