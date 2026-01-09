import React from 'react';
import { Home, Calendar, Mail, CheckSquare, MessageSquare, BarChart2, Bell, Settings, LogOut } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'gmail', icon: Mail, label: 'Gmail Scan' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
    { id: 'chat', icon: MessageSquare, label: 'Adetun Chat' },
    { id: 'insights', icon: BarChart2, label: 'Insights' },
];

export function Sidebar({ activeTab, onTabChange }) {
    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200/60 flex flex-col z-50">
            <div className="p-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                        <span className="font-bold text-xl">A</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-800">Adetun AI</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id)}
                        className={twMerge(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                            activeTab === item.id
                                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                                : "text-slate-500 hover:bg-slate-50 hover:text-brand-primary"
                        )}
                    >
                        <item.icon size={20} className={twMerge(activeTab === item.id ? "text-white" : "group-hover:scale-110 transition-transform")} />
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-100 mt-auto space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-brand-primary transition-all">
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
