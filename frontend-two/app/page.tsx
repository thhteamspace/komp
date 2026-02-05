
import Hero from '@/sections/Hero';
import ExecutiveReality from '@/sections/ExecutiveReality';
import GlobalCoverageMap from '@/sections/GlobalCoverageMap';
import BentoGrid from '@/sections/BentoGrid';
import ProductModules from '@/sections/ProductModules';
import CompetitiveDifferentiation from '@/sections/CompetitiveDifferentiation';
import IndustryUseCases from '@/sections/IndustryUseCases';
import PayrollSlider from '@/sections/PayrollSlider';
import CostCalculator from '@/sections/CostCalculator';
import OnboardingSteps from '@/sections/OnboardingSteps';
import CaseStudies from '@/sections/CaseStudies';
import TrustProof from '@/sections/TrustProof';
import Testimonials from '@/sections/Testimonials';
import KnowledgeCenter from '@/sections/KnowledgeCenter';
import FinalCTA from '@/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="reality"><ExecutiveReality /></section>
      <GlobalCoverageMap />
      <BentoGrid />
      <section id="platform"><ProductModules /></section>
      <section id="comparison"><CompetitiveDifferentiation /></section>
      <section id="industries"><IndustryUseCases /></section>
      <PayrollSlider />
      <CostCalculator />
      <section id="onboarding"><OnboardingSteps /></section>
      <CaseStudies />
      <TrustProof />
      <Testimonials />
      <section id="knowledge"><KnowledgeCenter /></section>
      <FinalCTA />
    </>
  );
}
