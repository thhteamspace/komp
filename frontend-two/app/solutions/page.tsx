"use client";


import SolutionsHero from "@/sections/SolutionsHero";
import BusinessSizeSolutions from "@/sections/BusinessSizeSolutions";
import RoleBasedSolutions from "@/sections/RoleBasedSolutions";
import IndustrySolutions from "@/sections/IndustrySolutions";
import SolutionsCTA from "@/sections/SolutionsCTA";

export default function SolutionsPage() {
    return (
        <div className="bg-brand-white">
            <SolutionsHero />
            <BusinessSizeSolutions />
            <RoleBasedSolutions />
            <IndustrySolutions />
            <SolutionsCTA />
        </div>
    );
}
