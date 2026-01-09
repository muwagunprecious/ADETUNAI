import React from 'react';
import { Card, CardHeader } from '../Card';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Video, MapPin, Users, Plus } from 'lucide-react';
import { Button } from '../Button';

const events = [
    { id: 1, title: 'Product Strategy Sync', time: '10:30 AM - 11:15 AM', type: 'Meet', attendees: 4, location: 'Virtual' },
    { id: 2, title: 'Lunch with Design Team', time: '12:30 PM - 1:30 PM', type: 'Personal', attendees: 5, location: 'Zest Cafe' },
    { id: 3, title: 'Client Feedback Session', time: '2:30 PM - 3:30 PM', type: 'Zoom', attendees: 2, location: 'Virtual' },
    { id: 4, title: 'Weekly Review', time: '4:30 PM - 5:00 PM', type: 'Office', attendees: 3, location: 'Conference Room B' },
];

export function CalendarView() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Calendar</h1>
                    <p className="text-slate-500 mt-1 font-medium">Your schedule is looking busy but manageable today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <button className="px-4 py-2 text-sm font-bold bg-slate-50 text-brand-primary">Day</button>
                        <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">Week</button>
                        <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">Month</button>
                    </div>
                    <Button variant="primary" className="gap-2">
                        <Plus size={18} />
                        New Event
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-slate-800">January 2026</span>
                            <div className="flex gap-1">
                                <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronLeft size={16} /></button>
                                <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronRight size={16} /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d} className="text-[10px] font-bold text-slate-400">{d}</span>)}
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`text-xs py-2 rounded-lg cursor-pointer transition-all ${i + 1 === 9 ? 'bg-brand-primary text-white font-bold' : 'hover:bg-brand-primary/10 text-slate-600'}`}>
                                    {i + 1}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-slate-900 text-white border-none">
                        <h4 className="font-bold text-sm mb-4">Meeting Prep by Adetun</h4>
                        <div className="space-y-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <p className="text-xs text-blue-200 mb-1">Coming up</p>
                                <p className="text-sm font-semibold">Product Strategy Sync</p>
                                <p className="text-[10px] opacity-70 mt-1">Found 3 relevant docs in shared drive.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <div className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                    <div className="w-20 pt-1 text-right">
                                        <p className="text-sm font-bold text-slate-800">{event.time.split(' - ')[0]}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">{event.time.split(' - ')[1].split(' ')[1]}</p>
                                    </div>
                                    <div className="flex-1 flex gap-4">
                                        <div className="w-1 bg-brand-primary rounded-full group-hover:w-1.5 transition-all" />
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-base">{event.title}</h4>
                                                    <div className="flex items-center gap-4 mt-2">
                                                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                                            <Clock size={14} className="text-slate-400" />
                                                            {event.time}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                                            <MapPin size={14} className="text-slate-400" />
                                                            {event.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                                            <Users size={14} className="text-slate-400" />
                                                            {event.attendees} People
                                                        </span>
                                                    </div>
                                                </div>
                                                {event.type === 'Meet' || event.type === 'Zoom' ? (
                                                    <Button size="sm" className="gap-2 rounded-xl h-9">
                                                        <Video size={16} />
                                                        Join
                                                    </Button>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
