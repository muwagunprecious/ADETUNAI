import React from 'react';
import { Search, Bell, Mic, User, Menu } from 'lucide-react';
import { Button } from './Button';

export function Topbar({ onMenuClick }) {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 fixed top-0 right-0 left-0 lg:left-64 z-40 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-all"
                >
                    <Menu size={24} />
                </button>

                <div className="relative group flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-slate-50 border-none rounded-2xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 text-slate-600 outline-none transition-all placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-4">
                <Button variant="secondary" size="sm" className="hidden sm:flex rounded-2xl gap-2 h-10 px-5">
                    <Mic size={18} className="text-brand-primary animate-pulse" />
                    <span className="font-semibold">Ask Adetun</span>
                </Button>

                <div className="hidden sm:block h-8 w-px bg-slate-200 mx-2" />

                <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-500 relative transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                </button>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-slate-800 leading-none">James Wilson</p>
                        <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-1">Premium</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary p-[2px] shrink-0">
                        <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
                            <User size={24} className="text-brand-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
