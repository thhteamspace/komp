import Hero from '@/sections/Hero';
import ExecutiveReality from '@/sections/ExecutiveReality';
import UnifiedSystem from '@/sections/UnifiedSystem';
import IndustryUseCases from '@/sections/IndustryUseCases';
import GlobalLaunch from '@/sections/GlobalLaunch';
import CompetitiveDifferentiation from '@/sections/CompetitiveDifferentiation';
import Testimonials from '@/sections/Testimonials';
import TrustProof from '@/sections/TrustProof';
import KnowledgeCenter from '@/sections/KnowledgeCenter';
import FinalCTA from '@/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveReality />
      <UnifiedSystem />
      <IndustryUseCases />
      <GlobalLaunch />
      <CompetitiveDifferentiation />
      <Testimonials />
      <TrustProof />
      <KnowledgeCenter />
      <FinalCTA />
    </>
  );
}
