'use client';

const SolutionSection = () => {
    return (
        <section className="py-32 bg-brand-orange text-white relative overflow-hidden">
            {/* Visual background diagonal accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-white/20 mb-10 items-center border border-white/30 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">
                        The Komp Solution
                    </span>
                </div>

                <h2 className="text-5xl lg:text-[4.5rem] font-black tracking-tighter mb-10 leading-[1.05]">
                    One Platform to <br /> Bridge the Gap.
                </h2>

                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold">
                    Komp eliminates the trade-off between speed and structure. By unifying data, workflow, and compliance into a single operational layer, we allow companies to scale indefinitely without losing their startup soul.
                </p>
            </div>
        </section>
    );
};

export default SolutionSection;
