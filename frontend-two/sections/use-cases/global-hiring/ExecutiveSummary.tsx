'use client';

const ExecutiveSummary = () => {
    return (
        <section className="py-24 lg:py-48 bg-brand-white flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <blockquote className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-orange tracking-tight leading-tight">
                    "Growth is rarely linear."
                </blockquote>
                <p className="mt-12 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-semibold">
                    For most organizations, it’s a series of plateaus followed by frantic sprints. The infrastructure that serves a team of ten often collapses under the weight of a hundred.
                </p>
            </div>
        </section>
    );
};

export default ExecutiveSummary;
