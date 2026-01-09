import React from 'react';
import { Card, CardHeader } from '../Card';
import { BarChart2, TrendingUp, Target, Brain, CloudRain, Zap, Users, Download } from 'lucide-react';
import { Button } from '../Button';

const stats = [
    { label: 'Weekly Focus', value: '38h 12m', icon: Brain, color: 'bg-purple-500', trend: '+14%' },
    { label: 'Task Velocity', value: '92%', icon: Zap, color: 'bg-orange-500', trend: '+2%' },
    { label: 'Deep Work', value: '4.5h', icon: Target, color: 'bg-blue-500', trend: '-5%' },
    { label: 'Team Sync', value: '12h', icon: Users, color: 'bg-green-500', trend: '+22%' },
];

export function InsightsView() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Insights & Productivity</h1>
                    <p className="text-slate-500 mt-1 font-medium">Adetun has observed a positive shift in your deep work focus.</p>
                </div>
                <Button variant="secondary" className="gap-2">
                    <Download size={18} />
                    Export Data
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label} className="relative group overflow-hidden">
                        <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform`}>
                            <stat.icon size={80} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2 ${stat.color} bg-opacity-10 text-${stat.color.split('-')[1]}-600 rounded-lg`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <h2 className="text-3xl font-bold text-slate-800">{stat.value}</h2>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="h-[400px]">
                    <CardHeader title="Focus Distribution" icon={TrendingUp} />
                    <div className="flex items-end justify-between h-48 gap-3 mt-12 px-4">
                        {[45, 60, 35, 80, 55, 90, 75].map((h, i) => (
                            <div key={i} className="flex-1 group relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                                    {h}%
                                </div>
                                <div
                                    className="bg-brand-primary w-full rounded-t-lg transition-all duration-1000 group-hover:bg-brand-secondary"
                                    style={{ height: `${h}%` }}
                                />
                                <div className="text-center mt-3 text-[10px] font-bold text-slate-400 uppercase">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex items-center justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-brand-primary rounded-sm" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Productive Focus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-slate-200 rounded-sm" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Meetings/Sync</span>
                        </div>
                    </div>
                </Card>

                <Card className="h-[400px] flex flex-col justify-between">
                    <CardHeader title="Adetun Proactive Tips" icon={Sparkles} />
                    <div className="space-y-4 flex-1 mt-4">
                        <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100/50 flex gap-4">
                            <Brain className="text-brand-primary mt-1 shrink-0" size={24} />
                            <div>
                                <h5 className="font-bold text-blue-900 mb-1">Schedule Deep Work</h5>
                                <p className="text-sm text-blue-800 font-medium opacity-80 leading-relaxed">
                                    Based on your Friday patterns, you're most productive between 10 AM and 1 PM. I can block this for you.
                                </p>
                                <Button variant="primary" size="sm" className="mt-4 rounded-xl shadow-blue-400/20">Block Time</Button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100/50 flex items-center gap-4">
                        <CloudRain className="text-orange-500" size={24} />
                        <p className="text-xs font-bold text-orange-900 opacity-80">
                            Heads up: You've skipped lunch 3 times this week. Adetun recommends a 30m break.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
