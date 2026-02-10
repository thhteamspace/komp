'use client';

import UseCasesHero from '@/sections/use-cases/UseCasesHero';
import GlobalExpansionCase from '@/sections/use-cases/GlobalExpansionCase';
import BusinessSizeSolutions from '@/sections/use-cases/BusinessSizeSolutions';
import TeamSolutions from '@/sections/use-cases/TeamSolutions';
import IndustrySolutions from '@/sections/use-cases/IndustrySolutions';
import UseCasesCTA from '@/sections/use-cases/UseCasesCTA';

export default function UseCasesPage() {
    return (
        <>
            <UseCasesHero />
            <GlobalExpansionCase />
            <BusinessSizeSolutions />
            <TeamSolutions />
            <IndustrySolutions />
            <UseCasesCTA />
        </>
    );
}
