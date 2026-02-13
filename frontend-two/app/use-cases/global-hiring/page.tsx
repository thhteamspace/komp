'use client';

import Hero from '@/sections/use-cases/global-hiring/Hero';
import ChallengeSection from '@/sections/use-cases/global-hiring/ChallengeSection';
import SolutionSection from '@/sections/use-cases/global-hiring/SolutionSection';
import TransitionWorkflow from '@/sections/use-cases/global-hiring/TransitionWorkflow';
import FinalImpact from '@/sections/use-cases/global-hiring/FinalImpact';
import FinalCTA from '@/sections/FinalCTA';

export default function GlobalHiringPage() {
    return (
        <div className="bg-white">
            <Hero />
            <ChallengeSection />
            <SolutionSection />
            <TransitionWorkflow />
            <FinalImpact />
            <FinalCTA />
        </div>
    );
}
