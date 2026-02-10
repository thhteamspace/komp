'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        // Disable browser's automatic scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

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
                // Force top with multiple attempts to catch slow renders
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

                const timer1 = setTimeout(() => window.scrollTo(0, 0), 10);
                const timer2 = setTimeout(() => window.scrollTo(0, 0), 100);
                const timer3 = setTimeout(() => window.scrollTo(0, 0), 300);

                return () => {
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                    clearTimeout(timer3);
                };
            }
        };

        handleScroll();

        // Handle same-page hash changes
        window.addEventListener('hashchange', handleScroll);
        return () => window.removeEventListener('hashchange', handleScroll);
    }, [pathname]);

    return null;
}
