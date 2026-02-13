'use client';

import Hero from '@/sections/use-cases/global-hiring/Hero';
import ExecutiveSummary from '@/sections/use-cases/global-hiring/ExecutiveSummary';
import FrictionOfScale from '@/sections/use-cases/global-hiring/FrictionOfScale';
import SolutionSection from '@/sections/use-cases/global-hiring/SolutionSection';
import ExecutionFramework from '@/sections/use-cases/global-hiring/ExecutionFramework';
import QuoteSection from '@/sections/use-cases/global-hiring/QuoteSection';
import FinalCTA from '@/sections/FinalCTA';

export default function GlobalHiringPage() {
    return (
        <main className="bg-brand-white">
            <Hero />
            <ExecutiveSummary />
            <FrictionOfScale />
            <SolutionSection />
            <ExecutionFramework />
            <QuoteSection />
            <FinalCTA />
        </main>
    );
}
