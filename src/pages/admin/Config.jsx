import React from 'react';

export default function AdminConfig() {
  return (
    <main className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-10 p-8 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">System Configuration</h2>
          <p className="text-slate-400 font-medium">Global security parameters and audit controls</p>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <button className="glass-panel size-12 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm bg-primary hover:bg-primary-hover text-white border-none shadow-glow-primary transition-colors active:scale-95">
            <span className="material-symbols-outlined text-sm">save</span>
            Deploy Changes
          </button>
        </div>
      </header>

      <div className="px-8 pb-12 max-w-6xl mx-auto space-y-8">
        {/* AI Sensitivity & Core Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Sensitivity Controls */}
          <section className="glass-card p-8 rounded-3xl shadow-glass space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shadow-glow-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h3 className="font-bold text-lg text-white">AI Sensitivity Controls</h3>
              </div>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Adjust the behavioral analysis engine threshold for automated threat detection and account lockdowns.</p>
            
            <div className="bg-white/5 p-1 rounded-2xl flex relative h-12">
              <input className="peer/cons hidden" id="cons" name="sensitivity" type="radio" value="Conservative" />
              <label className="flex-1 flex items-center justify-center text-sm font-bold z-10 cursor-pointer text-slate-500 peer-checked/cons:text-white transition-all" htmlFor="cons">Conservative</label>
              
              <input defaultChecked className="peer/bal hidden" id="bal" name="sensitivity" type="radio" value="Balanced" />
              <label className="flex-1 flex items-center justify-center text-sm font-bold z-10 cursor-pointer text-slate-500 peer-checked/bal:text-white transition-all" htmlFor="bal">Balanced</label>
              
              <input className="peer/agg hidden" id="agg" name="sensitivity" type="radio" value="Aggressive" />
              <label className="flex-1 flex items-center justify-center text-sm font-bold z-10 cursor-pointer text-slate-500 peer-checked/agg:text-white transition-all" htmlFor="agg">Aggressive</label>
              
              <div className="absolute top-1 left-1 bottom-1 w-[calc(33.33%-4px)] bg-slate-800 rounded-xl shadow-sm transition-all duration-300 transform peer-checked/bal:translate-x-full peer-checked/agg:translate-x-[200%]"></div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">Heuristic Confidence</span>
                <span className="text-sm font-mono text-primary">82%</span>
              </div>
              <input className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" defaultValue={82} />
            </div>
          </section>

          {/* MFA Enforcement */}
          <section className="glass-card p-8 rounded-3xl shadow-glass space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="size-10 rounded-2xl bg-warning/20 text-warning flex items-center justify-center shadow-glow-warning">
                <span className="material-symbols-outlined">key</span>
              </div>
              <h3 className="font-bold text-lg text-white">MFA Enforcement</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Require physical hardware keys (FIDO2/WebAuthn) for all administrative accounts and privileged operations.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-sm font-bold text-white">Hardware Security Keys</span>
                <div className="relative inline-block w-11 h-6 align-middle select-none">
                  <input defaultChecked className="ios-toggle hidden" id="mfa-toggle" type="checkbox" />
                  <label className="ios-toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-200 shadow-inner" htmlFor="mfa-toggle"></label>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-sm font-bold text-white">SMS/Email Fallback</span>
                <div className="relative inline-block w-11 h-6 align-middle select-none">
                  <input className="ios-toggle hidden" id="fallback-toggle" type="checkbox" />
                  <label className="ios-toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-200 shadow-inner" htmlFor="fallback-toggle"></label>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Data Retention Policies */}
        <section className="glass-card p-8 rounded-3xl shadow-glass">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <div className="size-10 rounded-2xl bg-success/20 text-success flex items-center justify-center shadow-glow-success">
              <span className="material-symbols-outlined">data_saver_on</span>
            </div>
            <h3 className="font-bold text-lg text-white">Data Retention Policies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">Audit Logs</label>
              <select className="w-full bg-transparent border-none p-0 font-bold text-lg text-white focus:ring-0 [&>option]:text-black hover:text-primary transition-colors cursor-pointer" defaultValue="7 Years (ISO27001)">
                <option>90 Days</option>
                <option>1 Year</option>
                <option>7 Years (ISO27001)</option>
                <option>Indefinite</option>
              </select>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">Session Metadata</label>
              <select className="w-full bg-transparent border-none p-0 font-bold text-lg text-white focus:ring-0 [&>option]:text-black hover:text-primary transition-colors cursor-pointer" defaultValue="30 Days">
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
              </select>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">Failed Auth Records</label>
              <select className="w-full bg-transparent border-none p-0 font-bold text-lg text-white focus:ring-0 [&>option]:text-black hover:text-primary transition-colors cursor-pointer" defaultValue="7 Days">
                <option>24 Hours</option>
                <option>7 Days</option>
                <option>30 Days</option>
              </select>
            </div>
          </div>
        </section>

        {/* API & Webhooks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* API Key Management */}
          <section className="glass-card p-8 rounded-3xl shadow-glass col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">api</span>
                </div>
                <h3 className="font-bold text-lg text-white">API Key Management</h3>
              </div>
              <button className="text-sm font-bold text-primary hover:text-primary-hover transition-colors flex items-center gap-1 active:scale-95">
                <span className="material-symbols-outlined text-sm">add</span>
                Create Key
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-sm text-slate-300">key_visualizer</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Production_Web_Client</p>
                    <p className="text-xs font-mono text-slate-500">sk_live_....9x2y</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-success bg-success/10 px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
                  <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">more_vert</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 opacity-70 hover:opacity-100 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-sm text-slate-400">key_visualizer</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Staging_Internal_CLI</p>
                    <p className="text-xs font-mono text-slate-500">sk_test_....4r1p</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-500/10 px-3 py-1 rounded-full uppercase tracking-wider">Expired</span>
                  <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">more_vert</span>
                </div>
              </div>
            </div>
          </section>

          {/* Webhook Integrations */}
          <section className="glass-card p-8 rounded-3xl shadow-glass">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="size-10 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center">
                <span className="material-symbols-outlined">webhook</span>
              </div>
              <h3 className="font-bold text-lg text-white">Webhooks</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-white">Slack Notifications</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Event: login.failure</p>
                </div>
                <span className="material-symbols-outlined text-success text-sm bg-success/10 p-1 rounded-full">check_circle</span>
              </div>
              <div className="flex items-center justify-between p-3 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-white">Datadog Audit</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Event: user.privileged</p>
                </div>
                <span className="material-symbols-outlined text-success text-sm bg-success/10 p-1 rounded-full">check_circle</span>
              </div>
              <div className="flex items-center justify-between p-3 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-xl transition-colors cursor-pointer opacity-60 hover:opacity-100">
                <div>
                  <p className="text-sm font-bold text-white">Custom SIEM</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Event: *</p>
                </div>
                <span className="material-symbols-outlined text-danger text-sm bg-danger/10 p-1 rounded-full">error</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-bold text-white transition-all hover:border-primary/50 hover:text-primary active:scale-95 shadow-inner">
              Manage All Webhooks
            </button>
          </section>
        </div>

        {/* Footer System Info */}
        <footer className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest pt-8 border-t border-white/10 mt-8">
          <div className="flex gap-6">
            <span>Cluster: US-EAST-1A</span>
            <span>Node Version: 20.11.0-LTS</span>
            <span className="text-success">Uptime: 99.998%</span>
          </div>
          <div>
            <span>© 2024 Sentinel-Auth v4.2.0-STABLE</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
