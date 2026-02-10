'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (window.location.hash) {
                const id = window.location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const timer = setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    return () => clearTimeout(timer);
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        handleScroll();

        // Handle same-page hash changes
        window.addEventListener('hashchange', handleScroll);
        return () => window.removeEventListener('hashchange', handleScroll);
    }, [pathname]);

    return null;
}
