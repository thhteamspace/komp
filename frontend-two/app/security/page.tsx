'use client';

import { motion } from 'framer-motion';
import { Lock, Server, ShieldCheck, Key } from 'lucide-react';
import Card from '@/components/Card';

export default function SecurityPage() {
    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
                        Enterprise-Grade <br />
                        <span className="text-green-500">Data Security.</span>
                    </h1>
                    <p className="text-xl text-brand-white/60 max-w-2xl mx-auto">
                        Your data is our most critical asset. We employ banking-level encryption and strict access controls.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <Card className="p-8 bg-brand-white/5 border border-brand-white/10 text-center">
                        <ShieldCheck size={48} className="text-green-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-brand-white mb-2">SOC 2 Type II</h3>
                        <p className="text-brand-white/50">Fully certified and audited annually for security, availability, and confidentiality.</p>
                    </Card>
                    <Card className="p-8 bg-brand-white/5 border border-brand-white/10 text-center">
                        <Server size={48} className="text-blue-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-brand-white mb-2">GDPR & ISO 27001</h3>
                        <p className="text-brand-white/50">Strict adherence to EU data protection laws and international security standards.</p>
                    </Card>
                    <Card className="p-8 bg-brand-white/5 border border-brand-white/10 text-center">
                        <Lock size={48} className="text-purple-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-brand-white mb-2">Banking-Level Encryption</h3>
                        <p className="text-brand-white/50">Data is encrypted at rest (AES-256) and in transit (TLS 1.2+).</p>
                    </Card>
                </div>

                <div className="max-w-4xl mx-auto bg-[#0f0f0f] border border-brand-white/10 rounded-2xl p-10">
                    <h3 className="text-2xl font-bold text-brand-white mb-6">Infrastructure Security</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['AWS Cloud Infrastructure', 'Single Sign-On (SSO)', 'Role-Based Access Control (RBAC)', '24/7 Threat Monitoring', 'Regular Penetration Testing', 'Automated Disaster Recovery'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-brand-white/70">
                                <Key size={16} className="text-brand-orange" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
