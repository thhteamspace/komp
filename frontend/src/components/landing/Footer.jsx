import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-black">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-2xl font-bold tracking-tighter text-black mb-6">
                            KOMP<span className="text-gray-300">.</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-mono">
              // Global Hiring Infrastructure
                        </p>
                        <div className="flex gap-4">
                            {/* Badges */}
                            <div className="flex items-center gap-2 px-3 py-1.5 border border-black text-xs text-black font-bold">
                                <Shield size={14} /> GDPR
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 border border-black text-xs text-black font-bold">
                                <Lock size={14} /> SOC2
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-black font-bold uppercase tracking-wider text-xs mb-6 border-b-2 border-black inline-block pb-1">Platform</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Global EOR</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Contractor Management</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Global Payroll</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold uppercase tracking-wider text-xs mb-6 border-b-2 border-black inline-block pb-1">Resources</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Global Hiring Guide</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Case Studies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold uppercase tracking-wider text-xs mb-6 border-b-2 border-black inline-block pb-1">Company</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-black hover:underline transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono">
                    <p>&copy; {new Date().getFullYear()} Komp Global Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">TERMS</a>
                        <a href="#" className="hover:text-black">PRIVACY</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
