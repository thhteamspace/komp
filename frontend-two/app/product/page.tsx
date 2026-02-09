import ProductHero from '@/sections/product/ProductHero';
import UnifiedOperatingSystem from '@/sections/product/UnifiedOperatingSystem';
import KompModuleFramework from '@/sections/product/KompModuleFramework';
import EndToEndLifecycle from '@/sections/product/EndToEndLifecycle';
import ComplianceFirstInfrastructure from '@/sections/product/ComplianceFirstInfrastructure';
import GlobalScale from '@/sections/product/GlobalScale';
import Integrations from '@/sections/product/Integrations';
import SecurityDataProtection from '@/sections/product/SecurityDataProtection';
import ProductCTA from '@/sections/product/ProductCTA';

export const metadata = {
    title: 'KOMP Platform | Unified Global Workforce Operating System',
    description: 'One platform for global hiring, payroll, and compliance. Centralized visibility and control for your international workforce.',
};

export default function ProductPage() {
    return (
        <div className="bg-white overflow-x-hidden">
            <ProductHero />

            <div className="relative z-10">
                <UnifiedOperatingSystem />
                <KompModuleFramework />
                <EndToEndLifecycle />
                <ComplianceFirstInfrastructure />
                <GlobalScale />
                <Integrations />
                <SecurityDataProtection />
                <ProductCTA />
            </div>
        </div>
    );
}
