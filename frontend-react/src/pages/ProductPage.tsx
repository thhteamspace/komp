import ProductHero from '@/sections/product/ProductHero';
import UnifiedOperatingSystem from '@/sections/product/UnifiedOperatingSystem';
import KompModuleFramework from '@/sections/product/KompModuleFramework';
import EndToEndLifecycle from '@/sections/product/EndToEndLifecycle';
import ComplianceFirstInfrastructure from '@/sections/product/ComplianceFirstInfrastructure';
import GlobalScale from '@/sections/product/GlobalScale';
import Integrations from '@/sections/product/Integrations';
import SecurityDataProtection from '@/sections/product/SecurityDataProtection';
import ProductCTA from '@/sections/product/ProductCTA';
import { useEffect } from 'react';

export default function ProductPage() {
    useEffect(() => {
        document.title = 'KOMP Platform | Unified Global Workforce Operating System';
    }, []);

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
