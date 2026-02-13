'use client';

const QuoteSection = () => {
    return (
        <section className="py-48 bg-brand-white border-t border-slate-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative bg-white rounded-[3rem] p-16 lg:p-24 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] border border-slate-50">
                    <div className="flex justify-center mb-12">
                        <span className="text-[10rem] text-brand-orange font-serif leading-none opacity-40 select-none">“</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.2] mb-16 px-4 tracking-tight">
                            Komp didn't just organize our data; it fundamentally changed our metabolic rate. We moved from quarterly planning to weekly execution.
                        </h2>

                        <div className="flex flex-col items-center gap-6">
                            <div className="h-20 w-20 rounded-full bg-slate-100 overflow-hidden ring-4 ring-slate-50 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128"
                                    alt="Marcus Chen"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-black text-slate-900">Marcus Chen</p>
                                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">CTO, HYPERSCALE INC.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
