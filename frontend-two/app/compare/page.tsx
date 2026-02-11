'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompareHero from '@/sections/compare/CompareHero';
import CompareTransparency from '@/sections/compare/CompareTransparency';
import CompareEntityModel from '@/sections/compare/CompareEntityModel';
import CompareSupport from '@/sections/compare/CompareSupport';
import CompareCTA from '@/sections/compare/CompareCTA';

export default function ComparePage() {
    return (
        <main className="w-full">
            <CompareHero />
            <CompareTransparency />
            <CompareEntityModel />
            <CompareSupport />
            <CompareCTA />
        </main>
    );
}
