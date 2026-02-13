'use client';

const ExecutiveSummary = () => {
    return (
        <section className="py-24 lg:py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-50 rounded-[2rem] p-10 lg:p-16 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
                    <span className="block text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
                        Executive Summary
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-brand-orange pl-8 text-left lg:text-center lg:border-none lg:pl-0">
                        "In just under three quarters, TechFlow needed to deploy engineering teams across APAC and EMEA without the 18-month lead time of establishing legal entities. They needed speed without compliance compromise."
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;
