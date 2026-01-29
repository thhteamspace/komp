import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ChevronDown, Globe, Users, CreditCard, BookOpen, FileText, MessageSquare, ShieldCheck } from 'lucide-react';
import Button from './Button';

const NavLink = ({ title, isActive, onMouseEnter }) => (
    <div
        onMouseEnter={onMouseEnter}
        className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
    >
        {title}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
    </div>
);

const DropdownItem = ({ icon: Icon, title, desc }) => (
    <a href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:shadow-sm group-hover:text-blue-600 transition-all">
            <Icon size={20} />
        </div>
        <div>
            <div className="text-sm font-bold text-gray-900 mb-1">{title}</div>
            <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
        </div>
    </a>
);

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 20);
        });
    }, [scrollY]);

    // Handle mouse leave for the entire nav/dropdown area
    const handleMouseLeave = () => {
        setIsHovering(false);
        setActiveTab(null);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isHovering ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-9 h-9 bg-black text-white flex items-center justify-center font-bold text-xl rounded-lg">K</div>
                    <span className="text-xl font-bold tracking-tight text-black">KOMP<span className="text-gray-300">.</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <NavLink
                        title="Solutions"
                        isActive={activeTab === 'solutions'}
                        onMouseEnter={() => { setActiveTab('solutions'); setIsHovering(true); }}
                    />
                    <NavLink
                        title="Resources"
                        isActive={activeTab === 'resources'}
                        onMouseEnter={() => { setActiveTab('resources'); setIsHovering(true); }}
                    />
                    <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black transition-colors">Pricing</a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black transition-colors">Enterprise</a>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-bold text-black hover:opacity-70 transition-opacity">Log in</a>
                    <Button variant="primary" className="text-sm px-5 py-2.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                        Get Started
                    </Button>
                </div>
            </div>

            {/* Dropdown Container */}
            <AnimatePresence>
                {activeTab && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl overflow-hidden"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="container mx-auto px-6 max-w-7xl py-12">
                            {activeTab === 'solutions' && (
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        <DropdownItem icon={Globe} title="Global Employment" desc="Hire anyone, anywhere. No local entity required." />
                                        <DropdownItem icon={Users} title="Contractor Management" desc="Onboard and pay contractors in 150+ countries." />
                                        <DropdownItem icon={CreditCard} title="Global Payroll" desc="Consolidate multi-currency payroll into one click." />
                                        <DropdownItem icon={ShieldCheck} title="Visa & Immigration" desc="Sponsor visas and handle mobility seamlessly." />
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Featured</div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">KOMP Intelligence</h4>
                                        <p className="text-sm text-gray-500 mb-4">New AI-driven insights for global workforce planning.</p>
                                        <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Read Announcement &rarr;</a>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'resources' && (
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Learn</div>
                                        <DropdownItem icon={BookOpen} title="Library" desc="Guides, country encyclopedias, and templates." />
                                        <DropdownItem icon={FileText} title="Blog" desc="Latest trends in global hiring and remote work." />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Support</div>
                                        <DropdownItem icon={MessageSquare} title="Help Center" desc="Documentation and support for platform users." />
                                        <DropdownItem icon={Users} title="Community" desc="Join 10,000+ HR leaders in our exclusive network." />
                                    </div>
                                    <div className="bg-blue-600 rounded-2xl p-6 text-white text-center flex flex-col items-center justify-center">
                                        <h4 className="text-xl font-bold mb-2">Talk to an expert</h4>
                                        <p className="text-blue-100 text-sm mb-6">Need help planning your expansion?</p>
                                        <Button variant="white" className="text-blue-600 hover:text-blue-700 w-full justify-center border-none font-bold">Book Demo</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
