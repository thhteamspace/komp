'use client';

import Hero from '@/sections/use-cases/witconnect/Hero';
import ChallengeSection from '@/sections/use-cases/witconnect/ChallengeSection';
import SolutionSection from '@/sections/use-cases/witconnect/SolutionSection';
import TransitionWorkflow from '@/sections/use-cases/witconnect/TransitionWorkflow';
import FinalImpact from '@/sections/use-cases/witconnect/FinalImpact';
import FinalCTA from '@/sections/FinalCTA';

export default function WitConnectPage() {
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
