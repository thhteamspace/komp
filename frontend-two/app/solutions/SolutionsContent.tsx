'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BusinessSizeSolutions from "@/sections/BusinessSizeSolutions";
import RoleBasedSolutions from "@/sections/RoleBasedSolutions";
import IndustrySolutions from "@/sections/IndustrySolutions";
import SolutionsCTA from "@/sections/SolutionsCTA";

const SectionWrapper = ({ children, index, bgColor }: { children: React.ReactNode; index: number; bgColor: string }) => {
    return (
        <div
            className={`relative ${bgColor} rounded-t-[4rem] overflow-hidden shadow-[0_-1px_0_rgba(0,0,0,0.05)]`}
        >
            {children}
        </div>
    );
};

export default function SolutionsContent() {
    return (
        <div className="relative">
            {/* 1. Orange Section */}
            <SectionWrapper index={0} bgColor="bg-brand-orange">
                <BusinessSizeSolutions />
            </SectionWrapper>

            {/* 2. White Section */}
            <SectionWrapper index={1} bgColor="bg-white">
                <RoleBasedSolutions />
            </SectionWrapper>

            {/* 3. Blue Section */}
            <SectionWrapper index={2} bgColor="bg-brand-blue">
                <IndustrySolutions />
            </SectionWrapper>

            {/* 4. White Section (Clean CTA) */}
            <SectionWrapper index={3} bgColor="bg-white">
                <SolutionsCTA />
            </SectionWrapper>
        </div>
    );
}
