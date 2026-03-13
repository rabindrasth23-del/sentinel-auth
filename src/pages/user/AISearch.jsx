import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { analyzeScam } from '../../config/gemini';
import { motion, AnimatePresence } from 'framer-motion';

const AISearch = () => {
    const { user } = useAuth();
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        {
            role: 'system',
            content: 'Hello! I am AI-Sentinel, your personal security assistant. Paste any suspicious emails, links, or describe a situation, and I will analyze it using Gemini 1.5 Pro to verify if it is a scam or threat.',
            timestamp: new Date().toISOString(),
        }
    ]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isAnalyzing]);

    const handleSend = async () => {
        if (!inputValue.trim() || isAnalyzing) return;

        const userMessage = {
            role: 'user',
            content: inputValue,
            timestamp: new Date().toISOString(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsAnalyzing(true);

        try {
            const analysis = await analyzeScam(userMessage.content);
            
            const systemMessage = {
                role: 'system',
                content: analysis.reasoning,
                analysisData: analysis,
                timestamp: new Date().toISOString(),
            };
            setMessages(prev => [...prev, systemMessage]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'system',
                content: 'I encountered an error while trying to analyze that threat. Please try again.',
                timestamp: new Date().toISOString(),
                isError: true,
            }]);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-slate-900 border-l border-white/5 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Header */}
            <header className="px-8 py-5 glass border-b border-white/10 shrink-0 z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight">AI Security Assistant</h1>
                        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                            </span>
                            Gemini 1.5 Pro Active
                        </p>
                    </div>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 z-10 custom-scrollbar scroll-smooth">
                {messages.map((msg, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        key={index} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} max-w-5xl mx-auto`}
                    >
                        <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Avatar */}
                            <div className={`size-8 shrink-0 rounded-full flex items-center justify-center border ${
                                msg.role === 'user' 
                                ? 'bg-indigo-600 border-indigo-500/50 hidden md:flex' 
                                : 'bg-blue-900 border-blue-700/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                            }`}>
                                {msg.role === 'user' ? (
                                    <span className="text-xs font-bold text-white uppercase">{user?.displayName?.[0] || 'U'}</span>
                                ) : (
                                    <span className="material-symbols-outlined text-sm text-blue-300">smart_toy</span>
                                )}
                            </div>

                            {/* Message Bubble */}
                            <div className="flex flex-col gap-2">
                                <div className={`px-5 py-3.5 rounded-3xl ${
                                    msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                                    : msg.isError 
                                        ? 'glass border border-red-500/30 text-slate-200 rounded-tl-sm'
                                        : 'glass border border-white/10 text-slate-200 rounded-tl-sm shadow-lg'
                                }`}>
                                    <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{msg.content}</p>
                                </div>

                                {/* Analysis Data Cards (if system msg has analysisData) */}
                                {msg.analysisData && (
                                    <div className="mt-2 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="glass border border-white/5 p-4 rounded-2xl flex items-center justify-between">
                                                <div>
                                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Threat Score</p>
                                                    <div className="flex items-end gap-1.5">
                                                        <span className="text-3xl font-black text-white leading-none">{msg.analysisData.threatScore}</span>
                                                        <span className="text-slate-500 text-xs font-bold mb-1">/100</span>
                                                    </div>
                                                </div>
                                                <div className={`size-12 rounded-xl flex items-center justify-center border ${
                                                    msg.analysisData.threatLevel === 'Danger' ? 'bg-red-500/20 text-red-500 border-red-500/30' :
                                                    msg.analysisData.threatLevel === 'Warning' ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' :
                                                    'bg-emerald-500/20 text-emerald-500 border-emerald-500/30'
                                                }`}>
                                                    <span className="material-symbols-outlined">
                                                        {msg.analysisData.threatLevel === 'Danger' ? 'gpp_bad' : 
                                                         msg.analysisData.threatLevel === 'Warning' ? 'warning' : 'gpp_good'}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="glass border border-white/5 p-4 rounded-2xl">
                                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-2">Recommendation</p>
                                                <p className="text-white text-sm font-medium">{msg.analysisData.recommendation}</p>
                                            </div>
                                        </div>

                                        {msg.analysisData.redFlags && msg.analysisData.redFlags.length > 0 && (
                                            <div className="glass border border-red-500/10 p-4 rounded-2xl">
                                                <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mb-2 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-sm">flag</span>
                                                    Detected Red Flags
                                                </p>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    {msg.analysisData.redFlags.map((flag, i) => (
                                                        <li key={i} className="text-slate-300 text-sm">{flag}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
                
                {isAnalyzing && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start max-w-5xl mx-auto"
                    >
                        <div className="flex gap-4 max-w-[85%]">
                            <div className="size-8 shrink-0 rounded-full flex items-center justify-center border bg-blue-900 border-blue-700/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                <span className="material-symbols-outlined text-sm text-blue-300 animate-pulse">smart_toy</span>
                            </div>
                            <div className="px-5 py-4 rounded-3xl glass border border-white/10 rounded-tl-sm flex items-center gap-2">
                                <span className="size-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="size-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="size-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                <span className="ml-2 text-slate-400 text-sm font-medium animate-pulse">Running Gemini diagnostics...</span>
                            </div>
                        </div>
                    </motion.div>
                )}
                
                <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 shrink-0 z-10 w-full">
                <div className="max-w-4xl mx-auto relative">
                    <textarea 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Paste a suspicious email, link, message, or upload a screenshot to analyze..."
                        className="w-full bg-white/5 border border-white/10 text-white rounded-3xl pl-5 pr-32 py-4 focus:ring-blue-500 focus:border-blue-500 min-h-[60px] max-h-[200px] resize-none overflow-y-auto shadow-inner text-[15px]"
                        rows={1}
                        style={{ height: inputValue.split('\n').length > 1 ? `${Math.min(inputValue.split('\n').length * 24 + 40, 200)}px` : '60px' }}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <button className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" title="Upload Screenshot (Coming Soon)">
                            <span className="material-symbols-outlined text-lg">image</span>
                        </button>
                        <button className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" title="Attach Document (Coming Soon)">
                            <span className="material-symbols-outlined text-lg">attach_file</span>
                        </button>
                        <button 
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isAnalyzing}
                            className={`size-10 rounded-2xl flex items-center justify-center ml-1 transition-all ${
                                inputValue.trim() && !isAnalyzing
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-105'
                                : 'bg-white/5 text-slate-500 pointer-events-none'
                            }`}
                        >
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Responses are generated by AI and should be verified independently.</span>
                </div>
            </div>
        </div>
    );
};

export default AISearch;
