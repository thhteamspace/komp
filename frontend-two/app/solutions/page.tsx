import SolutionsHero from "@/sections/SolutionsHero";
import SolutionsContent from "./SolutionsContent";

export const metadata = {
    title: 'Global Solutions | Hire & Scale Anywhere with KOMP',
    description: 'Precision-engineered infrastructure for global hiring, payroll, and compliance. Specialized solutions for Startups, HR, Finance, and Legal teams.',
};

export default function SolutionsPage() {
    return (
        <div className="bg-brand-white overflow-x-hidden">
            <SolutionsHero />

            <div className="relative z-10">
                <SolutionsContent />
            </div>
        </div>
    );
}
