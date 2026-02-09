

import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f1a] border-t border-white/5 pt-24 pb-10 relative">
            <div className="container mx-auto px-6 relative z-20">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <div className="mb-6">
                            <img
                                src="/images/Logo_1-04-removebg-preview.png"
                                alt="KOMP Logo"
                                className="h-20 w-auto object-contain"
                            />
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
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 flex-grow">

                        <div>
                            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Products</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/services" className="hover:text-white transition-colors">Global EOR</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Contractor Management</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Global Payroll</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Multi-Country HRIS</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Countries</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/compliance" className="hover:text-white transition-colors">EOR India</Link></li>
                                <li><Link to="/compliance" className="hover:text-white transition-colors">EOR Brazil</Link></li>
                                <li><Link to="/compliance" className="hover:text-white transition-colors">EOR UAE</Link></li>
                                <li><Link to="/compliance" className="hover:text-white transition-colors">EOR USA</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Comparisons</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/compare" className="hover:text-white transition-colors">KOMP vs Deel</Link></li>
                                <li><Link to="/compare" className="hover:text-white transition-colors">KOMP vs Remote</Link></li>
                                <li><Link to="/compare" className="hover:text-white transition-colors">KOMP vs Rippling</Link></li>
                                <li><Link to="/compare" className="hover:text-white transition-colors">KOMP vs Oyster</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Resources</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance Hub</Link></li>
                                <li><Link to="/pricing" className="hover:text-white transition-colors">Global Payroll Guide</Link></li>
                                <li><Link to="/landing" className="hover:text-white transition-colors">Expansion Playbook</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Ready to Launch?</h4>
                            <p className="text-zinc-400 text-sm mb-6">Get your custom expansion quote today.</p>
                            <Link to="/compliance">
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
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
