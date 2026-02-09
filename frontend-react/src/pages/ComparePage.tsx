import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { useEffect } from 'react';

const ComparisonRow = ({ feature, komp, others }: { feature: string, komp: boolean, others: boolean }) => (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-brand-white/10 text-center items-center">
        <div className="text-left font-medium text-brand-white/80">{feature}</div>
        <div className="flex justify-center">
            {komp ? <CheckCircle className="text-brand-orange w-6 h-6" /> : <XCircle className="text-brand-white/20 w-6 h-6" />}
        </div>
        <div className="flex justify-center">
            {others ? <CheckCircle className="text-brand-white/40 w-6 h-6" /> : <XCircle className="text-red-500/50 w-6 h-6" />}
        </div>
    </div>
);

export default function ComparePage() {
    useEffect(() => {
        document.title = 'KOMP vs Competitors | Comparison Guide';
    }, []);

    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-brand-white mb-4"
                    >
                        Why Companies Switch to KOMP
                    </motion.h1>
                    <p className="text-xl text-brand-white/60">See how we stack up against traditional aggregators.</p>
                </div>

                <div className="bg-[#0f0f0f] border border-brand-white/10 rounded-2xl p-8">
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-brand-white/20 text-center font-bold text-lg">
                        <div className="text-left text-brand-white">Comparison</div>
                        <div className="text-brand-orange">KOMP</div>
                        <div className="text-brand-white/40">Competitors</div>
                    </div>

                    <ComparisonRow feature="Support Experience" komp={true} others={false} />
                    <ComparisonRow feature="Transparent Pricing (No Hidden FX)" komp={true} others={false} />
                    <ComparisonRow feature="Onboarding Speed (48 hrs)" komp={true} others={false} />
                    <ComparisonRow feature="Direct Control vs Aggregator" komp={true} others={false} />
                    <ComparisonRow feature="100% Indemnified Compliance" komp={true} others={false} />
                    <ComparisonRow feature="Global Coverage (150+)" komp={true} others={true} />
                </div>
            </div>
        </div>
    );
}
