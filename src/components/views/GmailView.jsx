import React from 'react';
import { Card, CardHeader } from '../Card';
import { Mail, Search, Star, Filter, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../Button';

const mockEmails = [
    { id: 1, from: 'Sarah Jenkins', subject: 'Legal Review for Q3 Partnership', snippet: 'Hi James, please find the attached documents regarding...', time: '2h ago', priority: 'high' },
    { id: 2, from: 'Google Calendar', subject: 'Updated Invitation: Strategy Sync', snippet: 'The meeting has been moved to Room 402...', time: '4h ago', priority: 'medium' },
    { id: 3, from: 'Slack Security', subject: 'New Login from Chrome on Windows', snippet: 'Was this you? A new device logged into your account...', time: '5h ago', priority: 'high' },
    { id: 4, from: 'Pitch Deck Review', subject: 'Feedback on Adetun AI Deck', snippet: 'Overall the flows look great, but we should refine...', time: '1d ago', priority: 'low' },
];

export function GmailView() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Gmail Scan</h1>
                    <p className="text-slate-500 mt-1 font-medium">Adetun has analyzed 24 new emails since your last check.</p>
                </div>
                <Button variant="primary" className="gap-2">
                    <Search size={18} />
                    Scan for Action Items
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <button className="text-sm font-bold text-brand-primary border-b-2 border-brand-primary pb-1">Unread (12)</button>
                                <button className="text-sm font-medium text-slate-400 pb-1">All Mail</button>
                                <button className="text-sm font-medium text-slate-400 pb-1">Personal</button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-slate-600"><Filter size={18} /></button>
                            </div>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {mockEmails.map((email) => (
                                <div key={email.id} className="py-4 flex gap-4 group cursor-pointer hover:bg-slate-50/50 -mx-6 px-6 transition-colors">
                                    <div className="mt-1">
                                        <div className={`w-2 h-2 rounded-full ${email.priority === 'high' ? 'bg-red-500' : 'bg-blue-400'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-slate-800 text-sm">{email.from}</h4>
                                            <span className="text-xs text-slate-400 font-medium">{email.time}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-slate-700 truncate">{email.subject}</p>
                                        <p className="text-xs text-slate-500 mt-1 truncate">{email.snippet}</p>
                                    </div>
                                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-slate-400 hover:text-brand-primary"><Star size={18} /></button>
                                        <button className="p-2 text-slate-400 hover:text-brand-primary"><ArrowRight size={18} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-brand-primary/5 border-brand-primary/10">
                        <CardHeader title="AI Insight" icon={ShieldCheck} />
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            I've identified a <span className="text-red-600 font-bold">critical legal document</span> that needs your signature by end of today. Sarah also mentioned some blockers in the strategy sync email.
                        </p>
                        <Button variant="primary" className="w-full mt-6 rounded-2xl">Create Summary Report</Button>
                    </Card>

                    <Card>
                        <CardHeader title="Search Habits" icon={Clock} />
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500 font-medium">Fastest response</span>
                                <span className="text-slate-800 font-bold text-xs uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">Sarah J.</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500 font-medium">Most active hour</span>
                                <span className="text-slate-800 font-bold">10:00 AM</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
