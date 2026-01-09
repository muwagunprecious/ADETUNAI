import React, { useState } from 'react';
import { Card, CardHeader } from '../Card';
import { CheckSquare, Plus, Clock, Filter, MoreVertical, GripVertical, AlertCircle } from 'lucide-react';
import { Button } from '../Button';
import { twMerge } from 'tailwind-merge';

const initialTasks = [
    { id: 1, label: 'Finalize quarterly growth forecast', category: 'Finance', priority: 'high', done: true },
    { id: 2, label: 'Review Adetun frontend components', category: 'Project A', priority: 'high', done: false },
    { id: 3, label: 'Prepare for product strategy session', category: 'Product', priority: 'medium', done: false },
    { id: 4, label: 'Audit Gmail mock data structure', category: 'Engineering', priority: 'medium', done: false },
    { id: 5, label: 'Buy coffee for the team', category: 'General', priority: 'low', done: false },
];

export function TasksView() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Today's Tasks</h1>
                    <p className="text-slate-500 mt-1 font-medium">You have 4 pending tasks for today.</p>
                </div>
                <Button variant="primary" className="gap-2">
                    <Plus size={18} />
                    New Task
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-6">
                                <button className="text-sm font-bold text-brand-primary border-b-2 border-brand-primary pb-1">To Do</button>
                                <button className="text-sm font-medium text-slate-400 pb-1">Completed</button>
                                <button className="text-sm font-medium text-slate-400 pb-1">Upcoming</button>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-slate-600"><Filter size={18} /></button>
                        </div>

                        <div className="space-y-3">
                            {tasks.map((task) => (
                                <div
                                    key={task.id}
                                    onClick={() => toggleTask(task.id)}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50/50 transition-all group cursor-pointer"
                                >
                                    <GripVertical size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 cursor-grab" />
                                    <div className={twMerge(
                                        "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                                        task.done ? "bg-brand-primary border-brand-primary" : "border-slate-200"
                                    )}>
                                        {task.done && <CheckSquare size={14} className="text-white" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={twMerge(
                                            "font-semibold text-sm transition-all truncate",
                                            task.done ? "text-slate-400 line-through" : "text-slate-700"
                                        )}>
                                            {task.label}
                                        </p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-slate-100">
                                                {task.category}
                                            </span>
                                            {task.priority === 'high' && !task.done && (
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase">
                                                    <AlertCircle size={10} />
                                                    High Priority
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="p-2 text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVertical size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckSquare size={100} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="font-bold text-sm mb-4">Task Velocity</h4>
                            <div className="text-4xl font-bold mb-2">78%</div>
                            <p className="text-xs text-slate-400 font-medium">Clearance rate this morning. You're faster than 92% of your peers today.</p>
                            <div className="w-full h-1 bg-white/10 rounded-full mt-6">
                                <div className="w-[78%] h-full bg-brand-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <CardHeader title="Reminders" icon={Clock} />
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1 h-10 bg-orange-400 rounded-full" />
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">Submit expense report</h5>
                                    <p className="text-[10px] text-slate-500 font-medium mt-1">Tomorrow at 9:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
