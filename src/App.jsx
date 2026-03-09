import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black flex items-center justify-center p-4">
      {/* iOS Style Glass Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full"></div>
        
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Sentinel</h1>
          <p className="text-indigo-300 text-sm font-medium mt-1 uppercase tracking-widest">Privacy Auditor</p>
        </header>

        {/* Status Section */}
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 mb-8 text-center">
          <div className="text-5xl mb-2">🛡️</div>
          <h2 className="text-white font-semibold text-xl">System Ready</h2>
          <p className="text-slate-400 text-sm mt-1">Ready for real-time scam detection</p>
        </div>

        {/* Main Action Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
          Run Deep Audit
        </button>

        <footer className="mt-8 flex justify-between items-center px-2">
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Verified by TestSprite</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-75"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
