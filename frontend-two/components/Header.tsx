'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/cn';

const navLinks = [
    { name: 'Products', href: '/services' },
    { name: 'Solutions', href: '/use-cases' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Resources', href: '/landing' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3 shadow-sm'
                    : 'bg-transparent border-b border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 group">
                    <div className="text-2xl font-bold tracking-tighter text-brand-black transition-colors">
                        KOMP<span className="text-brand-orange">.</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative text-sm font-medium text-gray-600 hover:text-brand-black transition-colors duration-200"
                        >
                            <motion.div whileTap={{ scale: 0.95 }} className="relative">
                                {link.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"
                                />
                            </motion.div>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">
                        Login
                    </Link>
                    <Link href="/compliance">
                        <Button variant="primary" size="sm">
                            Talk to a Compliance Expert
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-brand-black"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 p-6 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-brand-black hover:text-brand-orange transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
                                <Link href="/login" className="text-center text-lg text-brand-black hover:text-brand-orange">
                                    Login
                                </Link>
                                <Button fullWidth onClick={() => setMobileMenuOpen(false)}>
                                    Talk to a Compliance Expert
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
