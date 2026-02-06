import ResourcesHero from '@/sections/resources/ResourcesHero';
import FeaturedGuides from '@/sections/resources/FeaturedGuides';
import HiringGuides from '@/sections/resources/HiringGuides';
import CountryExplorer from '@/sections/resources/CountryExplorer';
import KnowledgeCategories from '@/sections/resources/KnowledgeCategories';
import ResourcesCTA from '@/sections/resources/ResourcesCTA';

export const metadata = {
    title: 'Knowledge Center | KOMP Resources',
    description: 'Master international expansion with KOMP. Explore guides on global hiring, compliance, payroll, and risk management.',
};

export default function ResourcesPage() {
    return (
        <div className="bg-white">
            <ResourcesHero />
            <FeaturedGuides />
            <HiringGuides />
            <CountryExplorer />
            <KnowledgeCategories />
            <ResourcesCTA />
        </div>
    );
}
