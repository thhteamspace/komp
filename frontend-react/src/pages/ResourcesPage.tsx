import ResourcesHero from '@/sections/resources/ResourcesHero';
import FeaturedGuides from '@/sections/resources/FeaturedGuides';
import HiringGuides from '@/sections/resources/HiringGuides';
import GlobalPlaybooks from '@/sections/resources/CountryExplorer';
import KnowledgeCategories from '@/sections/resources/KnowledgeCategories';
import ResourcesCTA from '@/sections/resources/ResourcesCTA';
import { useEffect } from 'react';

export default function ResourcesPage() {
    useEffect(() => {
        document.title = 'Knowledge Center | KOMP Resources';
    }, []);

    return (
        <div className="relative bg-white">
            <div className="sticky top-0 z-0 min-h-screen flex flex-col -mt-20">
                <ResourcesHero />
            </div>

            <div className="relative z-10 bg-white rounded-t-[3rem] overflow-hidden mt-20">
                <FeaturedGuides />
                <HiringGuides />
                <GlobalPlaybooks />
                <KnowledgeCategories />

                <div className="relative z-10 bg-white rounded-t-[3rem] pt-10 overflow-hidden">
                    <ResourcesCTA />
                </div>
            </div>
        </div>
    );
}
