'use client';
import Hero from '@/sections/use-cases/industry-compliance/Hero';
import IndustryExplorer from '@/sections/use-cases/industry-compliance/IndustryExplorer';
import WhyItMatters from '@/sections/use-cases/industry-compliance/WhyItMatters';
import FinalCTA from '@/sections/FinalCTA';

export default function IndustryCompliancePage() {
    return (
        <div className="bg-white">
            <Hero />
            <IndustryExplorer />
            <WhyItMatters />
            <FinalCTA />
        </div>
    );
}
