'use client';

import UseCasesHero from '@/sections/use-cases/UseCasesHero';
import ProblemsSection from '@/sections/use-cases/ProblemsSection';
import SolutionsSection from '@/sections/use-cases/SolutionsSection';
import TransitionFramework from '@/sections/use-cases/TransitionFramework';
import OutcomesSection from '@/sections/use-cases/OutcomesSection';
import FinalCTA from '@/sections/FinalCTA';

export default function UseCasesPage() {
    return (
        <>
            <UseCasesHero />
            <ProblemsSection />
            <SolutionsSection />
            <TransitionFramework />
            <OutcomesSection />
            <FinalCTA />
        </>
    );
}
