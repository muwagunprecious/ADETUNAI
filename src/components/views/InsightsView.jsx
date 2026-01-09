import React from 'react';
import { Card, CardHeader } from '../Card';
import { BarChart2, Zap, TrendingUp, Clock, CheckSquare, Sparkles, Download, Brain } from 'lucide-react';
import { Button } from '../Button';

const stats = [
    { label: 'Focus Score', value: '92/100', trend: '+12%', color: 'bg-brand-primary', icon: Zap },
    { label: 'Deep Work', value: '4.2h', trend: '+0.8h', color: 'bg-purple-500', icon: Clock },
    { label: 'Tasks Done', value: '24', trend: '+5', color: 'bg-green-500', icon: CheckSquare },
    { label: 'Meetings', value: '3.1h', trend: '-1.2h', color: 'bg-orange-500', icon: BarChart2 },
];

export function InsightsView() {
    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-center md:text-left">Productivity Insights</h1>
                    <p className="text-slate-500 mt-1 font-medium text-sm md:text-base text-center md:text-left">Your focus is up 15% this week.</p>
                </div>
                <div className="flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-1.5 text-xs md:text-sm font-bold bg-slate-50 text-brand-primary rounded-lg">Week</button>
                    <button className="flex-1 md:flex-none px-4 py-1.5 text-xs md:text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">Month</button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label} className="relative group overflow-hidden p-3 md:p-5">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                            <div className={`p-1.5 md:p-2 ${stat.color} bg-opacity-10 text-brand-primary rounded-lg`}>
                                <stat.icon size={16} className="md:w-5 md:h-5" />
                            </div>
                            <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate">{stat.label}</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <h2 className="text-xl md:text-3xl font-bold text-slate-800">{stat.value}</h2>
                            <span className={`text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <Card className="lg:col-span-2">
                    <CardHeader title="Focus Distribution" subtitle="Daily average breakdown" icon={BarChart2} />
                    <div className="h-48 md:h-64 flex items-end justify-between gap-1 md:gap-2 px-2 md:px-4 mt-8">
                        {[65, 45, 85, 30, 90, 55, 75].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 md:gap-3 group">
                                <div
                                    className="w-full bg-slate-100 rounded-t-xl relative overflow-hidden group-hover:bg-brand-primary/10 transition-colors"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 bg-brand-primary rounded-t-xl transition-all duration-500 group-hover:h-full" style={{ height: '40%' }} />
                                </div>
                                <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <CardHeader title="Top Distractions" icon={Zap} />
                    <div className="space-y-4 md:space-y-6">
                        {[
                            { label: 'Unscheduled Calls', value: '45m', color: 'bg-red-400' },
                            { label: 'Slack Pings', value: '32m', color: 'bg-orange-400' },
                            { label: 'Email Triaging', value: '28m', color: 'bg-blue-400' },
                        ].map((d, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs md:text-sm mb-2">
                                    <span className="text-slate-600 font-semibold">{d.label}</span>
                                    <span className="text-slate-900 font-bold">{d.value}</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                                    <div className={`h-full ${d.color} rounded-full`} style={{ width: '60%' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <Card>
                    <CardHeader title="Proactive Tips" subtitle="Based on your work habits" icon={TrendingUp} />
                    <div className="space-y-3 md:space-y-4">
                        <div className="p-3 md:p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 flex gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                <Clock size={20} />
                            </div>
                            <div className="min-w-0">
                                <h5 className="font-bold text-slate-800 text-xs md:text-sm">Earlier Starts?</h5>
                                <p className="text-[10px] md:text-xs text-slate-600 mt-1 leading-relaxed">
                                    You're 22% more productive between 8 AM and 10 AM. Consider moving deep work here.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <CardHeader title="Performance Score" subtitle="Comparative analysis" />
                    <div className="flex flex-col items-center justify-center py-4 md:py-8">
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-slate-100 stroke-[10]" />
                                <circle
                                    cx="50%" cy="50%" r="45%"
                                    className="fill-none stroke-brand-primary stroke-[10] shadow-lg shadow-brand-primary/50"
                                    strokeDasharray="283"
                                    strokeDashoffset="28"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl md:text-4xl font-black text-slate-900">92</span>
                                <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Excellent</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
