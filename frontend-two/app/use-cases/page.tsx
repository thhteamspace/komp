'use client';

import UseCasesHero from '@/sections/use-cases/UseCasesHero';
import GlobalExpansionCase from '@/sections/use-cases/GlobalExpansionCase';
import BusinessSizeSolutions from '@/sections/use-cases/BusinessSizeSolutions';
import TeamSolutions from '@/sections/use-cases/TeamSolutions';
import IndustrySolutions from '@/sections/use-cases/IndustrySolutions';
import UseCasesCTA from '@/sections/use-cases/UseCasesCTA';

export default function UseCasesPage() {
    return (
        <div className="relative">
            {/* Fixed Global Background Architecture */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
                {/* Visual Texture */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <img
                        src="/images/hero_bg.png"
                        alt=""
                        className="w-full h-full object-cover grayscale brightness-125"
                    />
                </div>
                {/* Global Mesh Glows */}
                <div className="absolute top-0 left-0 w-full h-full opacity-40">
                    <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-100/30 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-orange-100/30 blur-[150px] rounded-full" />
                </div>
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
            </div>

            {/* Content Sections - transparent backgrounds to show fixed BG */}
            <div className="relative z-10">
                <UseCasesHero />
                <GlobalExpansionCase />
                <BusinessSizeSolutions />
                <TeamSolutions />
                <IndustrySolutions />
                <UseCasesCTA />
            </div>
        </div>
    );
}
