

import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, ShieldCheck, Globe, CreditCard, Sparkles } from 'lucide-react';
import { useState } from 'react';

const countries = [
    { name: 'India', flag: '🇮🇳', tags: ['EOR', 'Payroll', 'Compliance'], complexity: 'Standard', color: 'bg-white' },
    { name: 'Brazil', flag: '🇧🇷', tags: ['EOR', 'Compliance'], complexity: 'In-Depth', color: 'bg-white' },
    { name: 'UK', flag: '🇬🇧', tags: ['Payroll', 'EOR'], complexity: 'Standard', color: 'bg-white' },
    { name: 'UAE', flag: '🇦🇪', tags: ['EOR', 'Compliance'], complexity: 'In-Depth', color: 'bg-white' },
    { name: 'Canada', flag: '🇨🇦', tags: ['Payroll', 'Compliance'], complexity: 'Standard', color: 'bg-white' },
    { name: 'Germany', flag: '🇩🇪', tags: ['EOR', 'Payroll'], complexity: 'In-Depth', color: 'bg-white' },
    { name: 'USA', flag: '🇺🇸', tags: ['Payroll', 'Compliance'], complexity: 'Standard', color: 'bg-white' },
    { name: 'Singapore', flag: '🇸🇬', tags: ['EOR', 'Payroll'], complexity: 'Standard', color: 'bg-white' }
];

const categories = ['All', 'EOR', 'Payroll', 'Compliance'];

const HiringGuides = () => {
    const [search, setSearch] = useState('');
    const [activeCat, setActiveCat] = useState('All');

    const filtered = countries.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchesCat = activeCat === 'All' || c.tags.includes(activeCat);
        return matchesSearch && matchesCat;
    });

    return (
        <section className="py-32 bg-brand-blue relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section - Modern Centered */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8 self-center"
                    >
                        <span className="text-base font-bold text-white/80 uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Regional Intelligence</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-black text-white tracking-tighter leading-tight mb-6"
                        style={{ fontSize: '4vw' }}
                    >
                        Global <span className="text-brand-orange">Playbooks.</span>
                    </motion.h2>
                    <p className="text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                        In-depth guides for localized hiring and compliance in top global markets.
                    </p>

                    <div className="w-full max-w-xl">
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search markets..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-20 pl-16 pr-6 rounded-[2rem] bg-white border border-transparent focus:border-brand-orange outline-none transition-all font-bold text-slate-900 shadow-xl text-xl placeholder:text-slate-400"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 justify-center">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCat(cat)}
                                    className={`px-6 py-2 rounded-full text-[9px] font-semibold uppercase tracking-widest transition-all ${activeCat === cat ? 'bg-brand-orange text-white' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid - Premium Card Design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filtered.map((country, i) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Country Name */}
                            <h4 className="text-3xl font-bold text-brand-black mb-6 tracking-tight">
                                {country.name}
                            </h4>

                            {/* Description */}
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                                Comprehensive local hiring guides: payroll, compliance, and taxes.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {country.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Access Guide Button - Unchanged */}
                            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                <span className="font-bold text-slate-950 text-sm">Access Guide</span>
                                <button className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center transition-all hover:bg-brand-orange active:scale-95">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Discovery Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-x-32 gap-y-12"
                >
                    {[
                        { label: 'Direct Entities', val: '100% Owned' },
                        { label: 'Vetted Networks', val: '150+ Nations' },
                        { label: 'Service Model', val: 'Expert Support' }
                    ].map((st, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-sm font-bold text-white/40 mb-2">{st.label}</span>
                            <span className="text-xl font-bold text-white">{st.val}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HiringGuides;

