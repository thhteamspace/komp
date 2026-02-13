'use client';

import Hero from '@/sections/use-cases/compliance-management/Hero';
import ChallengeSection from '@/sections/use-cases/compliance-management/ChallengeSection';
import SolutionSection from '@/sections/use-cases/compliance-management/SolutionSection';
import TransitionWorkflow from '@/sections/use-cases/compliance-management/TransitionWorkflow';
import FinalImpact from '@/sections/use-cases/compliance-management/FinalImpact';
import FinalCTA from '@/sections/FinalCTA';

export default function ComplianceManagementPage() {
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
