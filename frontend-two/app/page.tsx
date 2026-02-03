
import Hero from '@/sections/Hero';
import BentoGrid from '@/sections/BentoGrid';
import OnboardingSteps from '@/sections/OnboardingSteps';
import PayrollSlider from '@/sections/PayrollSlider';
import CaseStudies from '@/sections/CaseStudies';
import TrustProof from '@/sections/TrustProof';
import Testimonials from '@/sections/Testimonials';
import FinalCTA from '@/sections/FinalCTA';

// Legacy Sections (Kept for reference/safety)
// import ProductModules from '@/sections/ProductModules';
// import UnifiedSystem from '@/sections/UnifiedSystem';
// import IndustryUseCases from '@/sections/IndustryUseCases';
// import GlobalLaunch from '@/sections/GlobalLaunch';
// import CompetitiveDifferentiation from '@/sections/CompetitiveDifferentiation';
// import KnowledgeCenter from '@/sections/KnowledgeCenter';


export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <OnboardingSteps />
      <PayrollSlider />
      <CaseStudies />
      <TrustProof />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
