import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ className, variant = 'primary', size = 'md', children, ...props }) {
    const variants = {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20',
        secondary: 'bg-white text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/5',
        ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/5',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={twMerge(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
