
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
      <ExecutiveReality />
      <GlobalCoverageMap />
      <BentoGrid />
      <ProductModules />
      <CompetitiveDifferentiation />
      <IndustryUseCases />
      <PayrollSlider />
      <CostCalculator />
      <OnboardingSteps />
      <div id="case_studies" className="scroll-mt-56" />
      <div id="success_stories" className="scroll-mt-56" />
      <CaseStudies />
      <TrustProof />
      <Testimonials />
      <KnowledgeCenter />
      <FinalCTA />
    </>
  );
}
