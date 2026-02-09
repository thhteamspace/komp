import ComplianceHero from '@/sections/compliance/ComplianceHero';
import WhyGlobalComplianceMatters from '@/sections/compliance/WhyGlobalComplianceMatters';
import ComplianceCoverageAreas from '@/sections/compliance/ComplianceCoverageAreas';
import ContinuousMonitoring from '@/sections/compliance/ContinuousMonitoring';
import GovernanceControls from '@/sections/compliance/GovernanceControls';
import CountrySpecificCompliance from '@/sections/compliance/CountrySpecificCompliance';
import RiskMitigationApproach from '@/sections/compliance/RiskMitigationApproach';
import ComplianceSecurity from '@/sections/compliance/ComplianceSecurity';
import ComplianceCTA from '@/sections/compliance/ComplianceCTA';
import { useEffect } from 'react';

export default function CompliancePage() {
    useEffect(() => {
        document.title = 'Global Compliance | Risk Management & Labor Laws';
    }, []);

    return (
        <div className="bg-brand-white text-brand-black overflow-x-hidden">
            <ComplianceHero />

            <div className="relative z-10">
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
