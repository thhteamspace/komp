import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Check, Shield, CreditCard, Globe, Zap, FileText } from 'lucide-react';

const Card = ({ children, className }) => (
    <div className={`bg-[#111111] border border-white/10 rounded-3xl p-8 overflow-hidden relative group hover:border-white/20 transition-colors ${className}`}>
        {children}
    </div>
);

const Notification = ({ title, time, user, delay }) => (
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center gap-4 mb-3 shadow-lg max-w-sm ml-auto relative z-10"
    >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shrink-0">
            <RefreshCw size={18} className="animate-spin-slow" />
        </div>
        <div className="flex-grow min-w-0">
            <div className="text-white text-sm font-medium truncate">{title}</div>
            <div className="text-white/40 text-xs">{user} • {time}</div>
        </div>
        <Check size={16} className="text-green-500 shrink-0" />
    </motion.div>
);

const UnifiedOperatingLayer = () => {
    return (
        <section className="py-32 bg-[#050505] text-white relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-6 bg-blue-500 rounded-full" />
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Unified Operating Layer</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Automate effortlessly. <br />
                        <span className="text-white/40">Scale instantly.</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-xl">
                        A single source of truth for your entire global organization. Sync HRIS data, process payroll, and manage compliance from one command center.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Main Automation Logic (Full Width/Col Span) */}
                    <Card className="md:col-span-2 min-h-[400px] flex flex-col md:flex-row items-center md:items-start overflow-hidden">
                        <div className="flex-1 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-3">Sync Engines</h3>
                            <p className="text-white/50 mb-8 max-w-sm">
                                Bi-directional sync with 50+ HRIS platforms. Changes in Workday or BambooHR reflect instantly in KOMP.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-white/70">webhook_received</div>
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-white/70">data_processed</div>
                            </div>
                        </div>

                        {/* Visual: Floating Notifications */}
                        <div className="flex-1 w-full mt-10 md:mt-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-transparent to-transparent z-20" />
                            <Notification
                                title="New Hire: Sarah J. (Germany)"
                                user="Workday Integration"
                                time="Just now"
                                delay={0.2}
                            />
                            <Notification
                                title="Payroll Approved: UK Team"
                                user="Finance Bot"
                                time="2m ago"
                                delay={0.4}
                            />
                            <Notification
                                title="Contract Signed: Miguel R."
                                user="DocuSign Sync"
                                time="15m ago"
                                delay={0.6}
                            />
                        </div>
                    </Card>

                    {/* Card 2: Global Payroll */}
                    <Card className="min-h-[400px]">
                        <h3 className="text-2xl font-bold text-white mb-2">Global Payroll</h3>
                        <p className="text-white/50 mb-10 text-sm">Pay 1000+ employees in 160 currencies within minutes.</p>

                        <div className="relative mt-auto mx-auto w-full max-w-[300px] h-[180px]">
                            {/* Card Mock */}
                            <div className="absolute top-0 inset-x-0 h-[180px] bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="text-white/80 font-bold tracking-widest">VISA</div>
                                    <Globe className="text-white/30" />
                                </div>
                                <div className="text-white/40 text-xs font-mono mb-2">**** **** **** 4242</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-white font-bold text-lg">$142,500.00</div>
                                    <div className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">PAID</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Compliance */}
                    <Card className="min-h-[400px]">
                        <h3 className="text-2xl font-bold text-white mb-2">Auto-Compliance</h3>
                        <p className="text-white/50 mb-10 text-sm">Tax forms, labor laws, and filing requirements handled automatically.</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <FileText className="text-blue-400" size={20} />
                                <div className="flex-grow">
                                    <div className="text-sm text-white font-medium">Form W-8BEN</div>
                                    <div className="text-xs text-white/40">US / International</div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Check size={12} className="text-green-500" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                                <Shield className="text-purple-400" size={20} />
                                <div className="flex-grow">
                                    <div className="text-sm text-white font-medium">GDPR Data Audit</div>
                                    <div className="text-xs text-white/40">European Union</div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Check size={12} className="text-green-500" />
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default UnifiedOperatingLayer;
