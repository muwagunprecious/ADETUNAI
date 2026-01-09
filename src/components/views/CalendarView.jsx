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
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Calendar</h1>
                    <p className="text-slate-500 mt-1 font-medium text-sm md:text-base">Your schedule is busy but manageable.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                    <div className="flex bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-bold bg-slate-50 text-brand-primary border-r border-slate-200">Day</button>
                        <button className="flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors border-r border-slate-200">Week</button>
                        <button className="flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">Month</button>
                    </div>
                    <Button variant="primary" className="gap-2 w-full sm:w-auto text-sm">
                        <Plus size={18} />
                        New Event
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-4 md:p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-slate-800 text-sm md:text-base">January 2026</span>
                            <div className="flex gap-1">
                                <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronLeft size={16} /></button>
                                <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronRight size={16} /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d} className="text-[10px] font-bold text-slate-400 pb-2">{d}</span>)}
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`text-[10px] md:text-xs py-2 rounded-lg cursor-pointer transition-all ${i + 1 === 9 ? 'bg-brand-primary text-white font-bold' : 'hover:bg-brand-primary/10 text-slate-600'}`}>
                                    {i + 1}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-slate-900 text-white border-none">
                        <h4 className="font-bold text-sm mb-4">Meeting Prep by Adetun</h4>
                        <div className="space-y-3">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <p className="text-[10px] text-blue-200 mb-1 font-bold uppercase tracking-wider">Coming up</p>
                                <p className="text-sm font-semibold">Product Strategy Sync</p>
                                <p className="text-[10px] opacity-70 mt-1 leading-relaxed">Found 3 relevant docs in shared drive.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <div className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                    <div className="sm:w-20 sm:text-right shrink-0">
                                        <p className="text-sm font-bold text-slate-800 leading-none">{event.time.split(' - ')[0]}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Start Time</p>
                                    </div>
                                    <div className="flex-1 flex gap-4 min-w-0">
                                        <div className="w-1 bg-brand-primary rounded-full shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                                <div className="min-w-0">
                                                    <h4 className="font-bold text-slate-800 text-base md:text-lg truncate">{event.title}</h4>
                                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                                                        <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-500 font-medium">
                                                            <MapPin size={14} className="text-slate-400" />
                                                            {event.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-500 font-medium font-bold px-2 py-0.5 bg-slate-100 rounded-full">
                                                            <Users size={14} className="text-slate-400" />
                                                            {event.attendees}
                                                        </span>
                                                    </div>
                                                </div>
                                                {event.type === 'Meet' || event.type === 'Zoom' ? (
                                                    <Button size="sm" className="gap-2 rounded-xl h-9 w-full sm:w-auto text-xs">
                                                        <Video size={16} />
                                                        Join Session
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
