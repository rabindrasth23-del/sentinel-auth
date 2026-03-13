import React from 'react';

const Settings = () => {
    return (
        <div className="flex-1 overflow-y-auto scroll-smooth p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-wrap gap-6 justify-between items-end">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold text-white leading-tight">Settings</h1>
                        <p className="text-slate-400 text-lg">Manage your secure infrastructure and authentication policies.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2.5 rounded-2xl glass text-slate-200 font-bold hover:bg-white/10 transition-all">Cancel</button>
                        <button className="px-6 py-2.5 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">Save Preferences</button>
                    </div>
                </header>

                <div className="space-y-8">
                    {/* General Security */}
                    <section className="space-y-4">
                        <h3 className="text-primary/70 text-xs font-black uppercase tracking-widest px-1">General Security</h3>
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-white text-lg font-bold">Real-time Monitoring</p>
                                    <p className="text-slate-400 text-sm">Continuous scanning of all inbound authentication attempts.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-14 h-8 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-lg font-bold">AI Sensitivity</p>
                                    <span className="text-primary text-xs font-bold px-3 py-1.5 bg-primary/10 rounded-lg">Aggressive</span>
                                </div>
                                <input className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer border-none accent-primary" max="100" min="1" type="range" defaultValue="85" />
                                <div className="flex justify-between text-[11px] text-slate-500 font-bold uppercase tracking-tighter">
                                    <span>Conservative</span>
                                    <span>Balanced</span>
                                    <span>Aggressive</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data & Privacy */}
                    <section className="space-y-4">
                        <h3 className="text-primary/70 text-xs font-black uppercase tracking-widest px-1">Data &amp; Privacy</h3>
                        <div className="glass flex flex-col gap-6 rounded-3xl p-8">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-white text-lg font-bold">Audit Retention</p>
                                    <p className="text-slate-400 text-sm">How long system logs are stored in the cloud.</p>
                                </div>
                                <select className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm font-semibold text-white focus:ring-primary focus:border-primary appearance-none min-w-[200px] outline-none">
                                    <option className="bg-slate-900">30 Days</option>
                                    <option className="bg-slate-900" selected>60 Days (Recommended)</option>
                                    <option className="bg-slate-900">90 Days</option>
                                    <option className="bg-slate-900">1 Year</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-white text-lg font-bold">Anonymize Content</p>
                                    <p className="text-slate-400 text-sm">Mask PII data in public audit reports.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-14 h-8 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Authentication */}
                    <section className="space-y-4">
                        <h3 className="text-primary/70 text-xs font-black uppercase tracking-widest px-1">Authentication</h3>
                        <div className="glass flex flex-col gap-8 rounded-3xl p-8">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-white text-lg font-bold">MFA Status</p>
                                    <p className="text-slate-400 text-sm">Current multi-factor configuration for users.</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Configured</span>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-white text-lg font-bold">Session Timeout</p>
                                <div className="grid grid-cols-3 gap-3 p-1.5 bg-black/40 rounded-2xl border border-white/5">
                                    <button className="py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-all rounded-xl">15m</button>
                                    <button className="py-2.5 text-sm font-bold text-white bg-white/10 rounded-xl border border-white/10 shadow-sm transition-all shadow-white/5">1h</button>
                                    <button className="py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-all rounded-xl">4h</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Settings;
