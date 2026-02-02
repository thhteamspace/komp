'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Mail, CheckCircle, Calendar } from 'lucide-react';
import Card from '@/components/Card';

export default function DemoPage() {
    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2 pt-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
                            See KOMP in Action.
                        </h1>
                        <p className="text-xl text-brand-white/60 mb-10 leading-relaxed">
                            Book a personalized demo with our global hiring experts. We'll show you how to reduce onboarding time by 90% and eliminate compliance risk.
                        </p>

                        <div className="space-y-6">
                            {[
                                'Full platform walkthrough customised to your needs',
                                'Expert advice on global entity structures',
                                'Pricing simulation for your target countries',
                                'Q&A on local labor laws and benefits'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-500/10 p-1 rounded-full">
                                        <CheckCircle size={20} className="text-green-500" />
                                    </div>
                                    <p className="text-brand-white/80 text-lg">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-brand-white/5 rounded-xl border border-brand-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center font-bold text-brand-white">
                                G2
                            </div>
                            <div>
                                <div className="text-brand-white font-bold">#1 Rated Global Employment Platform</div>
                                <div className="text-brand-white/40 text-sm">Based on user reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:w-1/2">
                        <Card className="p-8 bg-[#0f0f0f] border border-brand-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-brand-white mb-6">Schedule Your Demo</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-brand-white/60 mb-1">First Name</label>
                                        <input type="text" className="w-full bg-brand-black border border-brand-white/10 rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-white/60 mb-1">Last Name</label>
                                        <input type="text" className="w-full bg-brand-black border border-brand-white/10 rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-brand-white/60 mb-1">Work Email</label>
                                    <input type="email" className="w-full bg-brand-black border border-brand-white/10 rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none" placeholder="jane@company.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-brand-white/60 mb-1">Company Size</label>
                                    <select className="w-full bg-brand-black border border-brand-white/10 rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none">
                                        <option>1-10 employees</option>
                                        <option>11-50 employees</option>
                                        <option>51-200 employees</option>
                                        <option>201-500 employees</option>
                                        <option>500+ employees</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-brand-white/60 mb-1">How can we help?</label>
                                    <textarea rows={3} className="w-full bg-brand-black border border-brand-white/10 rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none" placeholder="I'm interested in hiring in..." />
                                </div>

                                <Button fullWidth size="lg" className="mt-4">
                                    Book Meeting <Calendar className="ml-2 w-4 h-4" />
                                </Button>

                                <p className="text-center text-xs text-brand-white/30 mt-4">
                                    By submitting this form, you agree to our privacy policy.
                                </p>
                            </form>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}
