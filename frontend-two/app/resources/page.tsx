import ResourcesHero from '@/sections/resources/ResourcesHero';
import FeaturedGuides from '@/sections/resources/FeaturedGuides';
import HiringGuides from '@/sections/resources/HiringGuides';
import GlobalPlaybooks from '@/sections/resources/CountryExplorer';
import KnowledgeCategories from '@/sections/resources/KnowledgeCategories';
import ResourcesCTA from '@/sections/resources/ResourcesCTA';

export const metadata = {
    title: 'Knowledge Center | KOMP Resources',
    description: 'Master international expansion with KOMP. Explore guides on global hiring, compliance, payroll, and risk management.',
};

export default function ResourcesPage() {
    return (
        <div className="relative bg-white">
            {/* Parallax Hero Section - Stays fixed while content scrolls over */}
            <div className="sticky top-0 z-0 min-h-screen flex flex-col -mt-20">
                <ResourcesHero />
            </div>

            {/* Main Content Card - Slides over the hero */}
            <div className="relative z-10 bg-white rounded-t-[3rem] overflow-hidden mt-20">
                <FeaturedGuides />
                <HiringGuides />
                <GlobalPlaybooks />
                <KnowledgeCategories />

                {/* CTA with Curved Top Transition - Now White */}
                <div className="relative z-10 bg-white rounded-t-[3rem] pt-10 overflow-hidden">
                    <ResourcesCTA />
                </div>
            </div>
        </div>
    );
}
