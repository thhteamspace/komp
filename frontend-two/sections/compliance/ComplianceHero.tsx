'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react';

export default function ComplianceHero() {
 return (
 <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-brand-white">
 {/* Background elements */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
 <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] animate-pulse" />
 <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
 </div>

 <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <span className="text-brand-blue font-bold text-sm mb-6 block">
 Global Risk & Compliance Infrastructure
 </span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="font-black tracking-tighter text-brand-black mb-8 leading-[0.9] max-w-5xl mx-auto"
 style={{ fontSize: 'clamp(55px, 8vw, 90px)' }}
 >
 Compliance built into <span className="text-brand-orange">every global hire.</span>
 </motion.h1>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto flex flex-col items-center gap-2"
 >
 <p className="flex items-center gap-2"><Scale size={18} className="text-brand-blue" /> Expert labor law alignment for 150+ jurisdictions.</p>
 <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand-blue" /> Eliminate misclassification risks with automated guardrails.</p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-4"
 >
 <Button variant="primary" size="lg" className="px-10 h-14 w-full sm:w-auto text-base font-bold group">
 Talk to a Compliance Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Button>
 <Button variant="ghost" size="lg" className="px-10 h-14 w-full sm:w-auto text-base font-bold border border-slate-200">
 View Compliance Framework
 </Button>
 </motion.div>

 {/* Hero Dashboard Visual - Refined Tech Aesthetic */}
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
 className="mt-20 relative w-full aspect-[16/8] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-200 bg-slate-50 group"
 >
 <img
 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
 alt="Global Compliance Infrastructure"
 className="w-full h-full object-cover saturate-[0.9] group-hover:scale-105 transition-all duration-1000"
 />
 </motion.div>

 {/* Authority Strip - Clean Minimalist style */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="mt-12 flex flex-wrap justify-center items-center gap-x-16 gap-y-8"
 >
 {[
 { label: 'SOC2 TYPE II', value: 'Certified', color: 'bg-emerald-500' },
 { label: 'GDPR Compliance', value: 'Active', color: 'bg-brand-blue' },
 { label: 'ISO 27001', value: 'Verified', color: 'bg-indigo-500' },
 { label: 'Risk Protection', value: '100%', color: 'bg-brand-orange' }
 ].map((item, i) => (
 <div key={i} className="flex flex-col items-center group">
 <div className="flex items-center gap-2 mb-1.5">
 <div className={`w-1.5 h-1.5 rounded-full ${item.color} group-hover:scale-150 transition-transform duration-300`} />
 <span className="text-xl font-bold text-slate-900">{item.value}</span>
 </div>
 <span className="text-[10px] font-black text-slate-400 uppercase ">{item.label}</span>
 </div>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
