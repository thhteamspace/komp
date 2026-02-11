'use client';

import ServicesHero from '@/sections/services/ServicesHero';
import EORService from '@/sections/services/EORService';
import AORService from '@/sections/services/AORService';
import GlobalPayroll from '@/sections/services/GlobalPayroll';
import HRISRelocation from '@/sections/services/HRISRelocation';
import ServicesFinalCTA from '@/sections/services/ServicesFinalCTA';

export default function ServicesPage() {
    return (
        <main className="bg-[#f8f6f5] overflow-x-hidden">
            <ServicesHero />
            <EORService />
            <AORService />
            <GlobalPayroll />
            <HRISRelocation />
            <ServicesFinalCTA />
        </main>
    );
}
