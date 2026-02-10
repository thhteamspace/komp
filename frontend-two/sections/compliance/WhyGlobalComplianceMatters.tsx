'use client';

import { motion } from 'framer-motion';
import { AlertOctagon, Scale, TrendingDown, BookOpen } from 'lucide-react';
import Card from '@/components/Card';

const risks = [
 {
 icon: <AlertOctagon className="w-8 h-8 text-red-500" />,
 title: "Misclassification Risks",
 description: "Incorrectly labeling workers as contractors instead of employees can lead to severe fines and legal action."
 },
 {
 icon: <Scale className="w-8 h-8 text-brand-orange" />,
 title: "Regulatory Penalties",
 description: "Non-compliance with local labor laws often results in significant financial penalties and operational bans."
 },
 {
 icon: <TrendingDown className="w-8 h-8 text-yellow-500" />,
 title: "Tax & Labor Law Variation",
 description: "Every country has unique tax codes and employment regulations that change frequently."
 },
 {
 icon: <BookOpen className="w-8 h-8 text-brand-blue" />,
 title: "Operational Liability",
 description: "Your company is liable for every worker. Ignorance of local laws is not a valid legal defense."
 }
];

export default function WhyGlobalComplianceMatters() {
 return (
 <section className="py-32 bg-white relative overflow-hidden">
 {/* Soft ambient glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

 <div className="container mx-auto px-6 relative z-10">
 <div className="text-center mb-24 max-w-4xl mx-auto">
 <motion.span
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-brand-blue font-bold text-sm mb-4 block"
 >
 Risk Landscape
 </motion.span>
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="font-black text-brand-black mb-6 tracking-tighter"
 style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
 >
 Why Global <span className="text-brand-orange">Compliance Matters.</span>
 </motion.h2>
 <p className="text-xl text-slate-500 max-w-2xl mx-auto">
 Expanding globally introduces complex legal challenges. Understanding the risks is the first step to scaling with confidence.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
 {risks.map((risk, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 >
 <Card className="h-full bg-white border-2 border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl transition-all duration-500 p-8 flex items-start gap-8 group rounded-[2.5rem]">
 <div className="p-5 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300 shrink-0 shadow-sm border border-slate-100">
 {risk.icon}
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition-colors">{risk.title}</h3>
 <p className="text-slate-600 leading-relaxed font-medium">
 {risk.description}
 </p>
 </div>
 </Card>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
