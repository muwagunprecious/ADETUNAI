import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ className, children, ...props }) {
    return (
        <div
            className={twMerge(
                'bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, icon: Icon, className }) {
    return (
        <div className={twMerge('flex items-center justify-between mb-6', className)}>
            <div className="flex items-center gap-3">
                {Icon && (
                    <div className="p-2 bg-brand-primary/5 rounded-lg text-brand-primary">
                        <Icon size={20} />
                    </div>
                )}
                <div>
                    <h3 className="font-semibold text-slate-800 tracking-tight">{title}</h3>
                    {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
}
