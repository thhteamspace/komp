'use client';
import Hero from '@/sections/use-cases/compliance-management/Hero';
import ProblemsSection from '@/sections/use-cases/compliance-management/ProblemsSection';
import SolutionSection from '@/sections/use-cases/compliance-management/SolutionSection';
import ExecutionFramework from '@/sections/use-cases/compliance-management/ExecutionFramework';
import QuoteSection from '@/sections/use-cases/compliance-management/QuoteSection';

export default function ComplianceManagementPage() {
    return (
        <div className="bg-white">
            <Hero />
            <ProblemsSection />
            <SolutionSection />
            <ExecutionFramework />
            <QuoteSection />
        </div>
    );
}
