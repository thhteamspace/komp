'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BusinessSizeSolutions from "@/sections/BusinessSizeSolutions";
import RoleBasedSolutions from "@/sections/RoleBasedSolutions";
import IndustrySolutions from "@/sections/IndustrySolutions";
import SolutionsCTA from "@/sections/SolutionsCTA";

const SectionWrapper = ({ children, index, bgColor }: { children: React.ReactNode; index: number; bgColor: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Subtler, smooth scale & opacity
    // 0.98 to 1 range is high-end and prevents major jitter
    const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.98, 1, 1, 0.98]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);

    return (
        <motion.div
            ref={ref}
            style={{
                scaleY: scale, // Fixed: Only scale vertically to prevent side peeking
                opacity,
                zIndex: 10 + index,
                transformOrigin: 'top center' // Ensures it reveals from the top
            }}
            // CLEAN FIX: Removed heavy shadows and negative margins on the first section
            className={`relative ${index === 0 ? 'mt-0' : '-mt-16'} ${bgColor} rounded-t-[4rem] overflow-hidden will-change-transform shadow-[0_-1px_0_rgba(0,0,0,0.05)]`}
        >
            {children}
        </motion.div>
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
