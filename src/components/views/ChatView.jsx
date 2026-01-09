import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader } from '../Card';
import { MessageSquare, Send, Sparkles, Mic, Paperclip, MoreHorizontal, User } from 'lucide-react';
import { Button } from '../Button';

const initialMessages = [
    { id: 1, role: 'assistant', content: "Hello James! I've scanned your morning. You have 3 critical emails and a strategy meeting in 15 minutes. Would you like a 1-minute summary?" },
    { id: 2, role: 'user', content: "Yes, please summarize the emails." },
    { id: 3, role: 'assistant', content: "Summarizing 3 emails from Sarah Jenkins and Google Calendar: \n\n1. Sarah sent the Q3 Partnership legal docs for review. \n2. Room change for strategy sync to 402. \n3. Draft feedback on the Adetun AI deck is ready. \n\nWould you like me to open the legal docs for you?" },
];

export function ChatView() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newUserMsg = { id: Date.now(), role: 'user', content: input };
        setMessages([...messages, newUserMsg]);
        setInput('');

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const assistantMsg = {
                id: Date.now() + 1,
                role: 'assistant',
                content: `I've noted that down. Is there anything else I can help with?`
            };
            setMessages(prev => [...prev, assistantMsg]);
        }, 1500);
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto h-[calc(100vh-80px)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4 md:mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        Adetun AI <span className="text-[10px] bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-lg uppercase tracking-widest font-bold">Active</span>
                    </h1>
                    <p className="text-slate-500 mt-1 font-medium text-xs md:text-sm">Ready for your requests.</p>
                </div>
                <button className="p-2 md:p-2.5 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <Card className="flex-1 flex flex-col p-0 overflow-hidden shadow-xl border-slate-200">
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 bg-slate-50/30">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 md:gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'assistant' && (
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-brand-primary/20 shrink-0">A</div>
                            )}
                            <div className={`max-w-[85%] md:max-w-[75%] p-3 md:p-4 rounded-2xl shadow-sm border font-medium text-xs md:text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-brand-primary text-white border-brand-primary rounded-tr-none'
                                    : 'bg-white text-slate-700 border-white rounded-tl-none'
                                }`}>
                                {msg.content}
                            </div>
                            {msg.role === 'user' && (
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 shrink-0 overflow-hidden">
                                    <User size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-brand-primary/20 shrink-0 animate-pulse">A</div>
                            <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none border border-white shadow-sm flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 md:p-6 bg-white border-t border-slate-100">
                    <div className="relative group">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Message Adetun AI..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-28 md:pr-32 focus:ring-4 focus:ring-brand-primary/5 focus:bg-white focus:border-brand-primary outline-none transition-all font-medium text-slate-700 text-sm md:text-base"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-brand-primary cursor-pointer transition-colors">
                            <Paperclip size={18} />
                        </div>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
                            <button className="p-2 text-slate-400 hover:text-brand-primary transition-colors hidden sm:block"><Mic size={20} /></button>
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="bg-brand-primary text-white p-2 md:p-2.5 rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all font-bold flex items-center gap-2"
                            >
                                <Send size={16} />
                                <span className="text-xs md:text-sm">Send</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3 md:gap-4 px-1 overflow-x-auto scrollbar-hide">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Tips:</span>
                        <button className="text-[9px] font-bold text-brand-primary hover:bg-brand-primary/5 px-2 py-1 rounded-lg transition-colors border border-brand-primary/20 shrink-0">Summarize Emails</button>
                        <button className="text-[9px] font-bold text-brand-primary hover:bg-brand-primary/5 px-2 py-1 rounded-lg transition-colors border border-brand-primary/20 shrink-0">Draft Response</button>
                        <button className="text-[9px] font-bold text-brand-primary hover:bg-brand-primary/5 px-2 py-1 rounded-lg transition-colors border border-brand-primary/20 shrink-0">Check Schedule</button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
