'use client';

import Hero from '@/sections/use-cases/witconnect/Hero';
import ExecutiveSummary from '@/sections/use-cases/witconnect/ExecutiveSummary';
import ChallengeSolution from '@/sections/use-cases/witconnect/ChallengeSolution';
import ExecutionFramework from '@/sections/use-cases/witconnect/ExecutionFramework';
import ImpactResults from '@/sections/use-cases/witconnect/ImpactResults';
import QuoteSection from '@/sections/use-cases/witconnect/QuoteSection';
import FinalCTA from '@/sections/FinalCTA';

export default function WitConnectPage() {
    return (
        <main className="bg-brand-white">
            <Hero />
            <ExecutiveSummary />
            <ChallengeSolution />
            <ExecutionFramework />
            <ImpactResults />
            <QuoteSection />
            <FinalCTA />
        </main>
    );
}
