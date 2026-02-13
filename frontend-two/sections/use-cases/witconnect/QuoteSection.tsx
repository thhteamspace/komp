'use client';

const QuoteSection = () => {
    return (
        <section className="py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                    {/* Vertical Accent */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-24 bg-brand-orange rounded-r-full" />

                    <div className="max-w-5xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.3] mb-12">
                            "By replacing fragmented expansion with a centralized employment infrastructure, the company <span className="text-brand-orange">regained control</span> over speed, cost, and risk. Global hiring became predictable, compliant, and <span className="text-brand-orange">scalable</span>, allowing the business to grow based on opportunity, not geography."
                        </h2>

                        <div className="flex items-center gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=128&h=128"
                                alt="Sarah Jenkins"
                                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                            />
                            <div>
                                <div className="text-base font-bold text-slate-900">Sarah Jenkins</div>
                                <div className="text-xs font-black text-brand-orange uppercase tracking-widest">COO AT TECHFLOW</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
