import ComplianceHero from '@/sections/compliance/ComplianceHero';
import WhyGlobalComplianceMatters from '@/sections/compliance/WhyGlobalComplianceMatters';
import ComplianceCoverageAreas from '@/sections/compliance/ComplianceCoverageAreas';
import ContinuousMonitoring from '@/sections/compliance/ContinuousMonitoring';
import GovernanceControls from '@/sections/compliance/GovernanceControls';
import CountrySpecificCompliance from '@/sections/compliance/CountrySpecificCompliance';
import RiskMitigationApproach from '@/sections/compliance/RiskMitigationApproach';
import ComplianceSecurity from '@/sections/compliance/ComplianceSecurity';
import ComplianceCTA from '@/sections/compliance/ComplianceCTA';

export const metadata = {
    title: 'Global Compliance | Risk Management & Labor Laws',
    description: 'Navigate global compliance with confidence. Expert-backed labor law alignment, risk mitigation, and continuous monitoring for 150+ countries.',
};

export default function CompliancePage() {
    return (
        <div className="bg-brand-black text-brand-white overflow-x-hidden">
            <ComplianceHero />

            <div className="relative z-10 space-y-20 pb-20">
                <WhyGlobalComplianceMatters />
                <ComplianceCoverageAreas />
                <ContinuousMonitoring />
                <GovernanceControls />
                <CountrySpecificCompliance />
                <RiskMitigationApproach />
                <ComplianceSecurity />
                <ComplianceCTA />
            </div>
        </div>
    );
}
