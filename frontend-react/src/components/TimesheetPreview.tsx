

import { motion } from 'framer-motion';
import { Search, Settings, Bell, HelpCircle, Save, PlusCircle } from 'lucide-react';

const TimesheetPreview = () => {
    return (
        <div className="w-full h-full bg-[#F8FAFC] flex flex-col p-6 rounded-[2rem] overflow-hidden shadow-inner border border-slate-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="relative w-72">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search for Employee"
                        readOnly
                        className="w-full h-10 pl-12 pr-4 rounded-full bg-white border border-slate-100 text-xs font-medium shadow-sm outline-none"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-100 shadow-sm">
                        <span className="text-lg">🇺🇸</span>
                        <Settings size={16} className="text-slate-400" />
                        <Bell size={16} className="text-slate-400" />
                        <HelpCircle size={16} className="text-slate-400" />
                        <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold">H</div>
                    </div>
                </div>
            </div>

            {/* Timesheet Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-6">
                <div className="p-1">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                <th className="py-4 px-4 text-left">Period</th>
                                <th className="py-4">Mon</th>
                                <th className="py-4">Tue</th>
                                <th className="py-4">Wed</th>
                                <th className="py-4">Thu</th>
                                <th className="py-4">Fri</th>
                                <th className="py-4">Sat</th>
                                <th className="py-4">Sun</th>
                                <th className="py-4">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-bold text-slate-700">
                            {[
                                { range: '3-9 Nov', values: [8, 8, 8, 8, 8, 0, 0], total: 40, colors: ['bg-green-500', 'bg-green-500', 'bg-purple-500', 'bg-green-500', 'bg-green-500', 'bg-slate-100', 'bg-slate-100'] },
                                { range: '10-16 Nov', values: [8, 8, 8, 8, 8, 0, 0], total: 40, colors: ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-purple-500', 'bg-green-500', 'bg-slate-100', 'bg-slate-100'] },
                                { range: '17-23 Nov', values: [0, 8, 8, 8, 8, 0, 0], total: 32, colors: ['bg-rose-400', 'bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-slate-100', 'bg-slate-100'] },
                                { range: '24-30 Nov', values: [8, 8, 8, 8, 8, 0, 0], total: 40, colors: ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-brand-blue', 'bg-green-500', 'bg-slate-100', 'bg-slate-100'] },
                            ].map((row, i) => (
                                <tr key={i} className="border-t border-slate-50">
                                    <td className="py-4 px-4 text-left text-slate-400 text-[10px]">{row.range}</td>
                                    {row.values.map((v, vi) => (
                                        <td key={vi} className="py-4">
                                            <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-lg ${row.colors[vi]} ${v === 0 && row.colors[vi] === 'bg-slate-100' ? 'text-slate-400' : 'text-white'} shadow-sm`}>
                                                {v}
                                            </div>
                                        </td>
                                    ))}
                                    <td className="py-4 text-slate-900">{row.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 bg-slate-50/50 flex items-center justify-between border-t border-slate-100">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-green-500" /> <span className="text-[10px] font-bold text-slate-500">Working</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-brand-blue" /> <span className="text-[10px] font-bold text-slate-500">Holiday</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-purple-500" /> <span className="text-[10px] font-bold text-slate-500">Paid Leave</span></div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[11px] font-bold text-blue-600 italic">** Timesheet for the selected period is APPROVED **</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-brand-orange text-white rounded-lg text-xs font-black shadow-lg shadow-brand-orange/20">Create Invoice</button>
                            <button className="px-4 py-2 bg-slate-200 text-slate-400 rounded-lg text-xs font-black">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Commissions Section */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                    <PlusCircle size={18} className="text-slate-400" />
                    <h5 className="font-black text-slate-900 tracking-tight text-sm">Commissions</h5>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {['From', 'To', 'Commission Amount', 'Comment'].map((label, i) => (
                        <div key={label} className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
                            <div className="h-10 px-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center">
                                {i === 0 ? '11/01/2025' : i === 1 ? '11/30/2025' : i === 2 ? '780.00' : 'Incentive'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimesheetPreview;
