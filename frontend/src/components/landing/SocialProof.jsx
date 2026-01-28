import React from 'react';

const companies = [
    "Acme Corp", "Globex", "Initech", "Umbrella", "Cyberdyne", "Soylent"
];

const SocialProof = () => {
    return (
        <section className="py-16 border-b border-black bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                    [ TRUSTED BY ]
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {companies.map((company, i) => (
                        <div key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-black hover:underline decoration-2 transition-all cursor-pointer">
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
