import React from 'react';

export default function AdminLogs() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      {/* Header Bar */}
      <header className="flex items-center justify-between px-8 py-4 glass-panel border-t-0 border-x-0 border-b z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">System Logs</span>
            <span className="material-symbols-outlined text-slate-600 text-xs">chevron_right</span>
            <span className="text-white text-sm font-medium">Edit Log Entry #ADM-8291-POL</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              className="bg-white/5 border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:ring-primary focus:border-primary w-64" 
              placeholder="Search logs..." 
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-10 max-w-6xl mx-auto w-full">
        {/* Title & Actions */}
        <div className="flex justify-between items-end mb-8">
          <div className="space-y-1">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Policy Modification</span>
            <h2 className="text-white text-4xl font-black tracking-tight font-display">Edit Log Entry: ID #ADM-8291-POL</h2>
            <p className="text-slate-400 text-lg">Detailed audit of policy modification for data retention.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Log Detail Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-3xl p-8 overflow-hidden relative shadow-glass">
              {/* Background Accent */}
              <div className="absolute -top-24 -right-24 size-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-glow-primary">
                      <span className="material-symbols-outlined text-3xl">policy</span>
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">Updated Data Retention Policy</h3>
                      <p className="text-slate-400">Security configuration change detected</p>
                    </div>
                  </div>
                  <div className="bg-success/10 border border-success/20 text-success px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    Verified Action
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                  <div className="space-y-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Previous Value</p>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">history</span>
                      <p className="text-slate-300 text-2xl font-medium">365 Days</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">New Value</p>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">update</span>
                      <p className="text-white text-2xl font-bold">180 Days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Change Reasoning</p>
                    <textarea 
                      className="w-full bg-black/40 border border-white/10 text-white rounded-2xl p-4 mt-2 focus:ring-primary focus:border-primary min-h-[120px] leading-relaxed shadow-inner" 
                      placeholder="Enter the reasoning for this policy change..."
                      defaultValue="Compliance update for ISO27001 - Aligning internal storage cycles with new regulatory standard requirements."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-slate-500 text-[10px] font-black uppercase mb-1">Timestamp</p>
                      <p className="text-white font-medium text-sm">Oct 24, 2023, 14:22:15 UTC</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-slate-500 text-[10px] font-black uppercase mb-1">Network Origin</p>
                      <p className="text-white font-medium text-sm">192.168.1.45 <span className="text-primary/80 text-xs ml-1">(VPN)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Footer Card */}
            <div className="glass-panel rounded-2xl p-6 flex items-center justify-between border-primary/20 shadow-glass">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-glow-primary">
                  <span className="material-symbols-outlined">fingerprint</span>
                </div>
                <div>
                  <p className="text-white font-bold">Cryptographic Verification</p>
                  <p className="text-slate-400 text-sm">Signature valid and fully encrypted with SHA-256</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-success text-3xl">verified_user</span>
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="space-y-6">
            {/* Admin Profile Card */}
            <div className="glass-card rounded-3xl p-6 text-center shadow-glass">
              <div className="relative inline-block mb-4">
                <div className="size-24 rounded-full border-4 border-primary/30 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                    <span className="material-symbols-outlined text-5xl mt-4 text-slate-500">person</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 size-6 bg-success rounded-full border-4 border-[#0f172a]"></div>
              </div>
              <h4 className="text-white text-xl font-bold">Marcus Thorne</h4>
              <p className="text-primary font-medium text-sm mb-4">Global Administrator</p>
              
              <div className="space-y-2 text-left bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Session ID</span>
                  <span className="text-slate-300 text-xs font-mono">#SES-912</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Auth Method</span>
                  <span className="text-slate-300 text-xs">MFA (Hardware)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Device</span>
                  <span className="text-slate-300 text-xs">macOS (Chrome)</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-2xl transition-all shadow-glow-primary active:scale-95 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-xl">save</span>
                Save Changes
              </button>
              <button className="w-full py-4 border border-white/10 text-slate-400 font-bold hover:text-white hover:bg-white/10 transition-all active:scale-95 rounded-2xl flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-xl">close</span>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
