import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            const previous = scrollY.getPrevious();
            if (latest > previous && latest > 150) setHidden(true);
            else setHidden(false);

            setScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b border-gray-100 py-4' : 'py-6 border-b border-transparent'}`}
        >
            <div className="container mx-auto px-8 flex items-center justify-between">
                {/* Logo - Refined */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-medium text-lg">
                        K
                    </div>
                    <span className="text-xl font-medium tracking-tight text-black">
                        KOMP<span className="text-gray-400 font-normal">.global</span>
                    </span>
                </div>

                {/* Links - Clean & Minimal */}
                <div className="hidden md:flex gap-12 text-sm font-medium text-gray-500">
                    {['Solutions', 'Enterprise', 'Pricing', 'Resources'].map((item) => (
                        <a key={item} href="#" className="hover:text-black transition-colors duration-200">
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA - Subtle */}
                <Button variant="outline" className="hidden md:flex text-sm px-6 py-2 border-gray-200 hover:border-black">
                    Book Consultation
                </Button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
