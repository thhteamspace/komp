'use client';

const ImpactResults = () => {
    return (
        <section className="py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-4 text-slate-900">Impact & Results</h3>
                    <p className="text-slate-500 font-medium">Measured outcomes after 12 months of partnership.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            value: '60-90',
                            label: 'Days Saved',
                            desc: 'Average reduction in time-to-market per new country entry compared to traditional entity setup.'
                        },
                        {
                            value: '4',
                            label: 'Markets Entered',
                            desc: 'Seamless deployment of full engineering pods in Vietnam, Portugal, Brazil, and Poland.'
                        },
                        {
                            value: '$2M',
                            label: 'Overhead Reduced',
                            desc: 'Annual savings on legal fees, entity maintenance, and local HR consultant costs.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 rounded-[2rem] p-10 flex flex-col items-center justify-center border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                            <div className="text-5xl lg:text-6xl font-black text-brand-orange mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                                {item.value}
                            </div>
                            <div className="text-lg font-bold text-slate-900 mb-4">{item.label}</div>
                            <p className="text-xs text-slate-500 leading-normal max-w-[200px] mx-auto">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactResults;
