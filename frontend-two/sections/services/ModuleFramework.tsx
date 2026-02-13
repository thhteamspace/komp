'use client';

import { motion } from 'framer-motion';
import {
    Rocket,
    Users,
    LogOut,
    FolderKanban,
    Clock,
    CalendarX,
    FileText,
    ShieldAlert,
    Laptop,
    LockKeyhole,
    Settings,
    BellRing
} from 'lucide-react';

const ModuleFramework = () => {
    const modules = [
        {
            title: "KOMP Activate",
            subtitle: "LaunchPad – Client Onboarding",
            icon: Rocket,
            features: [
                "Secure client portal access with automated email activation.",
                "Guided onboarding wizard for company and stakeholder setup.",
                "Digital MSA review and e-signature workflows.",
                "Automated compliance checks during account creation.",
                "Real-time onboarding status tracking.",
                "Notification system for every activation milestone."
            ]
        },
        {
            title: "KOMP Workforce",
            subtitle: "TalentHub – Contractor Management",
            icon: Users,
            features: [
                "Add contractors individually or via bulk uploads.",
                "Resume parsing with auto-population of profiles.",
                "Manage engagement types (Independent / Subcontractor / AOR).",
                "Track lifecycle status from onboarding to offboarding.",
                "Centralized document and background verification storage.",
                "Single source of truth for global workforce data."
            ]
        },
        {
            title: "KOMP ExitOps",
            subtitle: "ExitFlow – Contractor Offboarding",
            icon: LogOut,
            features: [
                "Initiate compliant offboarding directly from the portal.",
                "Track exit workflows with real-time status updates.",
                "Automate communication with contractors and AOR partners.",
                "Manage asset recovery and final settlements.",
                "Maintain audit logs for every disengagement."
            ]
        },
        {
            title: "KOMP Projects",
            subtitle: "Workspaces – Project Management",
            icon: FolderKanban,
            features: [
                "Create and manage multiple global projects centrally.",
                "Assign contractors and roles to engagements.",
                "Activate, deactivate, or archive projects easily.",
                "Apply filters for region, role, and status views.",
                "Monitor contractor allocation across projects.",
                "Align project records with payroll and billing."
            ]
        },
        {
            title: "KOMP TimeOps",
            subtitle: "TimeTrack Pro – Timesheets",
            icon: Clock,
            features: [
                "Capture hourly, monthly, or milestone-based timesheets.",
                "Enable contractor submissions with approval workflows.",
                "Approve, reject, or edit entries before payroll.",
                "Add variable pay, bonuses, and adjustments.",
                "Export reports for finance teams.",
                "Auto-map approved time to invoices."
            ]
        },
        {
            title: "KOMP LeaveOps",
            subtitle: "LeaveFlow – Time Off Management",
            icon: CalendarX,
            features: [
                "Submit and manage leave requests digitally.",
                "Multi-level approval workflows.",
                "Track leave balances and history.",
                "Bulk approve or reject requests.",
                "Automated notifications for actions.",
                "Maintain regional policy compliance."
            ]
        },
        {
            title: "KOMP PayOps",
            subtitle: "PayDesk – Invoice Management",
            icon: FileText,
            features: [
                "Generate invoices from approved timesheets.",
                "Access AOR and contractor billing centrally.",
                "Track payment status and timelines.",
                "Download and export invoices.",
                "Maintain billing history securely.",
                "Reduce reconciliation effort."
            ]
        },
        {
            title: "KOMP Governance",
            subtitle: "AccessControl – Roles & Permissions",
            icon: ShieldAlert,
            features: [
                "Create custom roles with module-level access.",
                "Assign permissions by responsibility.",
                "Add, edit, deactivate users instantly.",
                "Maintain audit trails.",
                "Apply enterprise security controls.",
                "Prevent unauthorized access."
            ]
        },
        {
            title: "KOMP AssetOps",
            subtitle: "AssetGuard – IT Asset Management",
            icon: Laptop,
            features: [
                "Track global IT asset issuance.",
                "Assign assets with acknowledgment.",
                "Monitor return workflows.",
                "Maintain asset lifecycle records.",
                "Reduce asset loss and misuse.",
                "Generate audit reports."
            ]
        },
        {
            title: "KOMP Shield",
            subtitle: "SecurePass – Security Management",
            icon: LockKeyhole,
            features: [
                "Secure login and OTP password reset.",
                "Enable self-service recovery.",
                "Update access credentials securely.",
                "Monitor authentication activities.",
                "Protect sensitive data.",
                "Maintain platform compliance."
            ]
        },
        {
            title: "KOMP Control Hub",
            subtitle: "AccountCenter – Profile Management",
            icon: Settings,
            features: [
                "Manage company profile centrally.",
                "Update contacts and admin roles.",
                "Access agreements and documents.",
                "Maintain real-time organization data.",
                "Reduce support dependency.",
                "Improve data accuracy."
            ]
        },
        {
            title: "KOMP Insights",
            subtitle: "Pulse – Notifications & Search",
            icon: BellRing,
            features: [
                "Real-time notifications for actions.",
                "Unified activity feed.",
                "Quick navigation from alerts.",
                "Universal search across modules.",
                "Improve response time.",
                "Reduce workflow friction."
            ]
        }
    ];

    return (
        <section className="relative bg-[#f8f6f5] py-32 overflow-hidden border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <span className="text-sm font-bold text-[#FF8C1A] tracking-widest mb-4 block">
                        KOMP Premium Module Framework
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-6">
                        The Operating System for <br className="hidden md:block" />
                        <span className="text-[#FF8C1A]">Global Teams.</span>
                    </h2>
                    <p className="text-xl text-[#5F6B7C] max-w-2xl mx-auto leading-relaxed">
                        A unified suite of tools designed to streamline every aspect of your global workforce, from onboarding to offboarding and everything in between.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => {
                        const Icon = module.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF8C1A] group-hover:bg-[#FF8C1A] group-hover:text-white transition-colors duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight">
                                            {module.title}
                                        </h3>
                                        <p className="text-xs font-bold text-[#FF8C1A] uppercase tracking-wider mt-1">
                                            {module.subtitle.split('–')[0].trim()}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-sm font-medium text-slate-500 mb-6 border-b border-gray-100 pb-4">
                                    {module.subtitle.split('–')[1]?.trim() || module.subtitle}
                                </div>

                                <ul className="space-y-3">
                                    {module.features.slice(0, 4).map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C1A] mt-2 flex-shrink-0" />
                                            <p className="text-sm text-[#5F6B7C] leading-relaxed">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                    {module.features.length > 4 && (
                                        <li className="pt-2">
                                            <span className="text-xs font-bold text-[#FF8C1A] cursor-pointer hover:underline">
                                                + {module.features.length - 4} more features
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ModuleFramework;
