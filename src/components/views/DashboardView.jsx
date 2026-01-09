import React from 'react';
import { Card, CardHeader } from '../Card';
import { Sparkles, Mail, MessageSquare, CheckSquare, Clock, ArrowUpRight, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '../Button';
import { twMerge } from 'tailwind-merge';

export function DashboardView() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Greeting Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Good Morning, <span className="text-brand-primary">James Wilson</span>
          </h1>
          <p className="text-slate-500 mt-1 font-medium flex items-center gap-2">
            <Calendar size={16} />
            {currentDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="gap-2 rounded-2xl">
            <Sparkles size={18} className="text-brand-primary" />
            Daily Briefing
          </Button>
        </div>
      </section>

      {/* Quick Stats/Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary border-none text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Sparkles size={120} />
          </div>
          <div className="relative z-10">
            <p className="text-blue-100 font-medium text-sm">Productivity Balance</p>
            <div className="flex items-end gap-3 mt-4">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Elite</h2>
              <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full mb-1">
                <TrendingUp size={12} />
                +12%
              </div>
            </div>
            <p className="mt-6 text-blue-50 text-sm leading-relaxed opacity-90">
              You've cleared 85% of your high-priority tasks this week. Keep the momentum!
            </p>
          </div>
        </Card>

        <Card className="relative group transition-all hover:-translate-y-1">
          <CardHeader title="Next Meeting" subtitle="Starts in 15 mins" icon={Clock} />
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between hover:border-brand-primary/20 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                  <img src="https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be4244abb057915562d3cb59367f01bf.svg" className="h-4" alt="Meet" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">Product Strategy Sync</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">10:30 AM - 11:15 AM</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-300" />
            </div>
            <Button variant="primary" className="w-full rounded-2xl h-11">Join Zoom Meeting</Button>
          </div>
        </Card>

        <Card className="transition-all hover:-translate-y-1">
          <CardHeader title="Unread Criticals" subtitle="Gmail Scan (Mock)" icon={Mail} />
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group">
                <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm truncate max-w-[180px]">Legal Review for Q3...</h4>
                  <p className="text-[11px] text-slate-400 font-medium line-clamp-1 mt-1">From: Sarah Jenkins • 2 hours ago</p>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <button className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                View all 12 unread <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="h-[400px] flex flex-col">
          <CardHeader title="Adetun AI Chat" subtitle="Intelligent context-aware assistant" icon={MessageSquare} />
          <div className="flex-1 bg-slate-50/50 rounded-2xl p-4 overflow-y-auto mb-4 border border-slate-100">
            <div className="space-y-4 text-sm font-medium">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold">A</div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-[80%]">
                  Hello James! I've scanned your morning. You have 3 critical emails and a strategy meeting in 15 minutes. Would you like a 1-minute summary?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-brand-primary text-white p-3 rounded-2xl rounded-tr-none shadow-md shadow-brand-primary/10 max-w-[80%]">
                  Yes, please summarize the emails.
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <input
              type="text"
              placeholder="Ask Adetun something..."
              className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-5 pr-12 focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all shadow-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-white rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Sparkles size={16} />
            </button>
          </div>
        </Card>

        <Card className="h-[400px]">
          <CardHeader title="Daily Priorities" subtitle="Track your key objectives" icon={CheckSquare} />
          <div className="space-y-4">
            {[
              { label: 'Finalize quarterly growth forecast', done: true },
              { label: 'Review Adetun frontend components', done: false },
              { label: 'Prepare for product strategy session', done: false },
              { label: 'Audit Gmail mock data structure', done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100">
                <div className={twMerge(
                  "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                  task.done ? "bg-brand-primary border-brand-primary" : "border-slate-200"
                )}>
                  {task.done && <CheckSquare size={14} className="text-white" />}
                </div>
                <span className={twMerge(
                  "font-semibold text-sm transition-all",
                  task.done ? "text-slate-400 line-through" : "text-slate-700"
                )}>
                  {task.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
