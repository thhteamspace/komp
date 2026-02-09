import SolutionsHero from "@/sections/SolutionsHero";
import SolutionsContent from "./SolutionsContent";
import { useEffect } from "react";

export default function SolutionsPage() {
    useEffect(() => {
        document.title = 'Global Solutions | Hire & Scale Anywhere with KOMP';
    }, []);

    return (
        <div className="bg-brand-white overflow-x-hidden">
            <SolutionsHero />

            <div className="relative z-10">
                <SolutionsContent />
            </div>
        </div>
    );
}
