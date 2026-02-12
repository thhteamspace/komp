
import HeroNew from '@/sections/HeroNew';
import SpeedOfExpansion from '@/sections/SpeedOfExpansion';
import CEOPerspective from '@/sections/CEOPerspective';

import GlobalCoverageMap from '@/sections/GlobalCoverageMap';
import UnifiedDashboard from '@/sections/UnifiedDashboard';
import IndustryFocus from '@/sections/IndustryFocus';
import BuiltForStability from '@/sections/BuiltForStability';
import ExpansionStalls from '@/sections/ExpansionStalls';
import QualityAssurance from '@/sections/QualityAssurance';
import IndustryUseCases from '@/sections/IndustryUseCases';
import PayrollSlider from '@/sections/PayrollSlider';
import CostCalculator from '@/sections/CostCalculator';

import CaseStudies from '@/sections/CaseStudies';
import TrustProof from '@/sections/TrustProof';
import Testimonials from '@/sections/Testimonials';
import KnowledgeCenter from '@/sections/KnowledgeCenter';
import FinalCTA from '@/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroNew />
      <SpeedOfExpansion />

      <ExpansionStalls />
      <UnifiedDashboard />
      <BuiltForStability />
      <IndustryFocus />
      <GlobalCoverageMap />

      <div id="case_studies" className="scroll-mt-56" />
      <div id="success_stories" className="scroll-mt-56" />
      <CaseStudies />
      <FinalCTA />
    </>
  );
}
