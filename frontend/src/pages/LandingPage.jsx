import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import ExecutiveReality from '../components/landing/ExecutiveReality';
import UnifiedOperatingLayer from '../components/landing/UnifiedOperatingLayer';
import CompetitiveKill from '../components/landing/CompetitiveKill';
import IndustryUseCases from '../components/landing/IndustryUseCases';
import LaunchSteps from '../components/landing/LaunchSteps';
import TrustAndProof from '../components/landing/TrustAndProof';
import ServiceGrid from '../components/landing/ServiceGrid';

import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <Navbar />
            <main>
                <Hero />
                <ExecutiveReality />
                <UnifiedOperatingLayer />
                <CompetitiveKill />
                <IndustryUseCases />
                <LaunchSteps />
                <TrustAndProof />
                <ServiceGrid />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
