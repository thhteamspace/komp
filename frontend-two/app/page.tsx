
import HeroModern from '@/sections/HeroModern';
import CEOPerspective from '@/sections/CEOPerspective';
import StatsStrip from '@/sections/StatsStrip';
import GlobalCoverageMap from '@/sections/GlobalCoverageMap';
import ProductModules from '@/sections/ProductModules';
import ExpansionStalls from '@/sections/ExpansionStalls';
import QualityAssurance from '@/sections/QualityAssurance';
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
      <HeroModern />
      <CEOPerspective />
      <StatsStrip />
      <GlobalCoverageMap />
      <ProductModules />
      <ExpansionStalls />
      <QualityAssurance />
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
