import React from 'react';

const AuditHistory = () => {
    return (
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
            <header className="p-8 lg:p-12 pb-0">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-white text-[40px] font-black tracking-tight leading-none mb-2">Audit History</h2>
                        <p className="text-slate-300 text-lg font-medium">Reviewing 1,248 security events found in the last 30 days.</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                        <span className="material-symbols-outlined text-xl">ios_share</span>
                        Export Report
                    </button>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="relative flex-1 min-w-[300px]">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-md" placeholder="Search audit logs..." type="text" />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap">All Logs</button>
                        <button className="px-5 py-2.5 rounded-full glass text-slate-300 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors">Flagged</button>
                        <button className="px-5 py-2.5 rounded-full glass text-slate-300 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors">Critical Risk</button>
                        <button className="px-5 py-2.5 rounded-full glass text-slate-300 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors">System</button>
                    </div>
                </div>
            </header>

            <section className="px-8 lg:px-12 pb-24 space-y-4">
                <div className="glass rounded-3xl p-6 flex flex-wrap lg:flex-nowrap items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="min-w-[120px]">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">OCT 24, 14:20</p>
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                            <span className="size-2 rounded-full bg-emerald-400"></span>
                            SAFE
                        </div>
                    </div>
                    
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 uppercase">
                        Snippet
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-white font-medium text-base mb-1">Authenticated user session initialized for internal CRM.</p>
                        <p className="text-slate-400 text-sm leading-relaxed">Routine login event from recognized workstation ID:WS-9021. Multi-factor authentication successfully verified.</p>
                    </div>
                    
                    <div className="flex items-center gap-8 pr-4">
                        <div className="text-center">
                            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Risk Score</p>
                            <p className="text-2xl font-black text-white">02</p>
                        </div>
                        <button className="size-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="glass rounded-3xl p-6 flex flex-wrap lg:flex-nowrap items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="min-w-[120px]">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">OCT 24, 12:45</p>
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                            <span className="size-2 rounded-full bg-amber-400"></span>
                            WARNING
                        </div>
                    </div>
                    
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 uppercase">
                        Network Traffic
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-white font-medium text-base mb-1">Inbound request from atypical geographic location.</p>
                        <p className="text-slate-400 text-sm leading-relaxed">System detected an access attempt from Helsinki, Finland. User typically operates from Seattle, USA. No unauthorized access granted.</p>
                    </div>
                    
                    <div className="flex items-center gap-8 pr-4">
                        <div className="text-center">
                            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Risk Score</p>
                            <p className="text-2xl font-black text-amber-400">48</p>
                        </div>
                        <button className="size-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="glass rounded-3xl p-6 flex flex-wrap lg:flex-nowrap items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="min-w-[120px]">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">OCT 23, 09:12</p>
                        <div className="flex items-center gap-1.5 text-red-500 font-bold text-sm">
                            <span className="size-2 rounded-full bg-red-500"></span>
                            DANGER
                        </div>
                    </div>
                    
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 uppercase">
                        File Upload
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-white font-medium text-base mb-1">Attempted upload of obfuscated executable file.</p>
                        <p className="text-slate-400 text-sm leading-relaxed">Automated scan identified a malicious payload signature within 'invoice_scan_v2.exe'. Process terminated and user account flagged for review.</p>
                    </div>
                    
                    <div className="flex items-center gap-8 pr-4">
                        <div className="text-center">
                            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Risk Score</p>
                            <p className="text-2xl font-black text-red-500">92</p>
                        </div>
                        <button className="size-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="glass rounded-3xl p-6 flex flex-wrap lg:flex-nowrap items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="min-w-[120px]">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">OCT 22, 18:05</p>
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                            <span className="size-2 rounded-full bg-emerald-400"></span>
                            SAFE
                        </div>
                    </div>
                    
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 uppercase">
                        Snippet
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-white font-medium text-base mb-1">Database encryption keys rotated successfully.</p>
                        <p className="text-slate-400 text-sm leading-relaxed">Scheduled quarterly key rotation completed across all production clusters. No performance impact detected during the transition.</p>
                    </div>
                    
                    <div className="flex items-center gap-8 pr-4">
                        <div className="text-center">
                            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Risk Score</p>
                            <p className="text-2xl font-black text-white">05</p>
                        </div>
                        <button className="size-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="mt-auto p-4 flex justify-center sticky bottom-0 z-50">
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
                    <div className="relative flex items-center justify-center">
                        <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="absolute size-4 bg-emerald-500/30 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-xs font-bold tracking-widest text-white uppercase">All Engines Operational</span>
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <span className="text-xs font-medium text-slate-400">Node: US-WEST-2</span>
                </div>
            </footer>
        </div>
    );
};

export default AuditHistory;
