import React from 'react';

const UserDashboard = () => {
    return (
        <div className="flex-1 flex flex-col max-h-screen overflow-y-auto">
            <header className="h-20 flex items-center justify-between px-8 glass border-b border-white/10 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-white text-xl font-bold tracking-tight">Security Insights</h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="relative w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                        <input className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Search system logs..." type="text" />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="size-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <button className="size-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="p-8 space-y-8">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass p-6 rounded-2xl shadow-2xl">
                        <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-2">Total Audits</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-white text-3xl font-bold">1,284</p>
                                <p className="text-emerald-400 text-xs font-bold mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +12%
                                </p>
                            </div>
                            <div className="size-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <span className="material-symbols-outlined text-[28px]">fact_check</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-2xl shadow-2xl">
                        <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-2">Threats Neutralized</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-white text-3xl font-bold">42</p>
                                <p className="text-emerald-400 text-xs font-bold mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +5%
                                </p>
                            </div>
                            <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <span className="material-symbols-outlined text-[28px]">verified_user</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-2xl shadow-2xl border-l-2 border-l-orange-500/50">
                        <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-2">Identity Health</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-white text-3xl font-bold">98.2%</p>
                                <p className="text-orange-400 text-xs font-bold mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span> -2%
                                </p>
                            </div>
                            <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                                <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-2xl shadow-2xl">
                        <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-2">System Latency</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-white text-3xl font-bold">14ms</p>
                                <p className="text-emerald-400 text-xs font-bold mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Optimal
                                </p>
                            </div>
                            <div className="size-12 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-[28px]">timer</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <section className="xl:col-span-2 space-y-8">
                        <div className="glass rounded-2xl p-8 relative overflow-hidden min-h-[400px]">
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-white text-xl font-bold">Global Threat Activity</h3>
                                    <p className="text-slate-400 text-sm">Real-time attack vectors and monitoring hubs</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">Live Monitoring</span>
                                </div>
                            </div>
                            <div className="w-full h-[300px] bg-slate-900/40 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                                <img className="w-full h-full object-cover opacity-30 grayscale" alt="Dark world map with data points" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-DKXaOduw5CVRzM7SoHgE5raXDhuu1IaPS-dCJLvmNAjPzFihCNOAjcFEsJbDJoFpZsRXOC1PP9OIkdIwfIDoBpDRi0KEE26rgXJmSvXae4ilkq9XLHRruyRG1elqy6HmJupJLuIgyjCvPCaiXBrhPGV0zVgMEzeZQyANdxxam6euWIfWOrdfvGCBYSVxQXuFrK4JZDeOF4FiROMhg__c6uM5KnWPZMubZ_tjXAnntMCjkpM3A2Nbgrt2_AH6RsYV_YfUP9ogDZw" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute top-1/4 left-1/3 size-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                                <div className="absolute bottom-1/3 right-1/4 size-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                                <div className="absolute top-1/2 right-1/2 size-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
                                <div className="absolute bottom-4 left-4 glass p-3 rounded-lg flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-red-500 animate-ping"></div>
                                    <p className="text-white text-xs font-bold">Critical Alert: DDoS Attempt (Singapore Node)</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-white text-xl font-bold mb-6">Threat Evolution</h3>
                            <div className="h-48 flex items-end justify-between gap-2">
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-2/3"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-1/2"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-3/4"></div>
                                <div className="w-full bg-indigo-500/40 rounded-t-lg h-full border-t border-indigo-400"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-1/3"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-1/2"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-2/3"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-3/4"></div>
                                <div className="w-full bg-indigo-500/40 rounded-t-lg h-full border-t border-indigo-400"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-5/6"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-2/3"></div>
                                <div className="w-full bg-indigo-500/20 rounded-t-lg h-1/2"></div>
                            </div>
                            <div className="flex justify-between mt-4 text-slate-500 text-xs font-medium px-1">
                                <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>Now</span>
                            </div>
                        </div>
                    </section>
                    
                    <aside className="space-y-8">
                        <div className="glass rounded-2xl p-8 flex flex-col items-center text-center">
                            <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-6">Global Threat Level</p>
                            <div className="relative size-48">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-white/10" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                                    <circle className="text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="553" strokeDashoffset="138" strokeWidth="12"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-white text-5xl font-black">75%</span>
                                    <span className="text-orange-300 text-xs font-bold mt-1">ELEVATED</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm mt-8 px-4 leading-relaxed">System is currently processing higher than normal suspicious login attempts from unfamiliar IP blocks.</p>
                        </div>
                        
                        <div className="glass rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-indigo-400">auto_awesome</span>
                                <h3 className="text-white text-lg font-bold">Proactive AI Advice</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                                    <p className="text-white text-sm font-bold group-hover:text-indigo-300 transition-colors">Rotate LDAP Secrets</p>
                                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">Identified as a high-risk vector based on recent peer-industry breaches.</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-400 text-[10px] font-black tracking-tighter uppercase">High Impact</span>
                                    </div>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                                    <p className="text-white text-sm font-bold group-hover:text-indigo-300 transition-colors">Enforce Geofencing</p>
                                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">Anomaly detected from Southeast Asia nodes. Recommend restricting admin login regions.</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 text-[10px] font-black tracking-tighter uppercase">Medium Impact</span>
                                    </div>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                                    <p className="text-white text-sm font-bold group-hover:text-indigo-300 transition-colors">Update Patch KB5031</p>
                                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">Security patch available for main data clusters. Resolves memory leak vulnerability.</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-tighter uppercase">Maintenance</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all active:scale-95">
                                Implement All Recommendations
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
