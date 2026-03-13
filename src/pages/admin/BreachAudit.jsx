import React from 'react';

export default function AdminBreachAudit() {
  return (
    <main className="flex-1 flex flex-col relative overflow-y-auto">
      <header className="h-16 flex items-center justify-between px-8 glass-panel border-b border-white/10 z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold text-white tracking-tight">Breach Audit System</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input 
              className="w-full bg-white/5 border-none rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-primary/50" 
              placeholder="Search reports..." 
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-8 bg-black/20">
        <div className="max-w-xl w-full glass-card rounded-3xl shadow-glass overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-300">
          <div className="p-8 flex flex-col items-center text-center">
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-success/20 blur-2xl rounded-full"></div>
              <div className="relative size-20 bg-success/20 border border-success/30 rounded-full flex items-center justify-center shadow-glow-primary">
                <span className="material-symbols-outlined text-success text-[48px] font-bold">check</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Document Ready</h3>
            <p className="text-slate-400 text-sm max-w-sm mb-8">
              Your breach audit report for <span className="text-white font-semibold">Q3 2024</span> has been successfully generated and is now ready for secure transmission.
            </p>
            
            <div className="w-full bg-black/40 rounded-2xl p-4 mb-8 border border-white/5 flex items-center gap-4">
              <div className="size-16 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-danger text-[32px]">picture_as_pdf</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-white truncate">Breach_Audit_Q3_2024.pdf</p>
                <p className="text-xs text-slate-500 mt-0.5">Size: 4.2 MB • Format: PDF • Encrypted</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
            
            <div className="flex flex-col w-full gap-3">
              <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-bold text-base shadow-glow-primary transition-all flex items-center justify-center gap-2 active:scale-95">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download Report
              </button>
              <button className="w-full py-4 border border-white/10 hover:bg-white/10 text-slate-300 rounded-2xl font-semibold text-base transition-all active:scale-95">
                Close
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 px-8 py-4 border-t border-white/5">
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">lock</span> Secure Export</span>
              <span className="size-1 bg-slate-700 rounded-full"></span>
              <span>Audit ID: #829-001X</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-8 flex items-center gap-2 text-xs text-slate-500/50">
        <span className="material-symbols-outlined text-[14px]">info</span>
        <span>System operational: All protocols active</span>
      </div>
    </main>
  );
}
