import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, History, FileText, Settings, Shield, Zap, Search, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { analyzeScam } from '../config/gemini';
import { saveAudit } from '../services/auditService';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAudit = async () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      // 1. Analyze with Gemini
      const analysisData = await analyzeScam(inputText);
      
      // 2. Parse the result 
      const parsedResult = JSON.parse(analysisData);
      setResult(parsedResult);

      // 3. Save to Firestore
      if (user) {
        await saveAudit(user.uid, inputText, parsedResult);
      }

    } catch (err) {
      console.error("Audit Error:", err);
      setError("Failed to analyze content. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'high': return 'bg-red-500/20 text-red-500 border-red-500/40 ring-red-500/20';
      case 'medium': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/40 ring-yellow-500/20';
      case 'low': return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/40 ring-emerald-500/20';
      default: return 'bg-slate-500/20 text-slate-500 border-slate-500/40 ring-slate-500/20';
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020617] text-slate-100 overflow-hidden font-display selection:bg-blue-500/30">
      
      {/* Sidebar Navigation */}
      <aside className="w-72 h-full flex flex-col bg-white/[0.03] backdrop-blur-[40px] border-r border-white/10 m-4 rounded-3xl shrink-0 z-10 transition-all">
        <div className="p-8 flex items-center gap-3">
          <div className="size-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
             <Shield className="text-white size-6" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-lg font-bold leading-tight">Sentinel-Auth</h1>
            <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">v2.4 Enterprise</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="bg-blue-500/20 border border-blue-500/30 flex items-center gap-3 px-4 py-3 rounded-2xl text-white transition-all">
            <Search className="size-[22px]" />
            <span className="text-sm font-medium">Security Insights</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <History className="size-[22px]" />
            <span className="text-sm font-medium">Audit History</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <FileText className="size-[22px]" />
            <span className="text-sm font-medium">Reports</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <Settings className="size-[22px]" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        {/* Profile */}
        <div className="p-4 mt-auto">
          <div 
             className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-all"
             onClick={logout}
             title="Click to Sign Out"
          >
             <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-blue-500/20 flex items-center justify-center overflow-hidden bg-slate-800">
               {user?.photoURL ? (
                 <img src={user.photoURL} alt="Profile" className="size-full object-cover" />
               ) : (
                 <span className="text-xs font-bold text-white uppercase">{user?.displayName?.[0] || 'U'}</span>
               )}
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-sm font-bold text-white truncate">{user?.displayName || 'Admin User'}</p>
               <p className="text-[10px] text-slate-400 uppercase tracking-tight">Security Architect</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full p-4 pl-0 overflow-y-auto relative z-10">
        
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-8">
          <div>
             <h2 className="text-5xl font-black text-white tracking-tight">System Monitor</h2>
             <p className="text-slate-400 mt-2 text-lg">Real-time surveillance & AI diagnostics active</p>
          </div>
        </header>

        {/* Dynamic Alert Section based on Result */}
        {result && (
          <section className="px-6 mb-8">
             <div className={`rounded-3xl p-8 border-l-4 overflow-hidden relative bg-white/[0.03] backdrop-blur-[40px] border border-white/10 ${result.threatLevel === 'High' ? 'border-l-red-500' : result.threatLevel === 'Medium' ? 'border-l-yellow-500' : 'border-l-emerald-500'}`}>
                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32 ${result.threatLevel === 'High' ? 'bg-red-500/10' : result.threatLevel === 'Medium' ? 'bg-yellow-500/10' : 'bg-emerald-500/10'}`}></div>
                
                <div className="flex flex-col xl:flex-row gap-8 items-start relative z-10">
                   <div className={`size-24 rounded-3xl border flex items-center justify-center ${result.threatLevel === 'High' ? 'bg-red-500/20 border-red-500/30' : result.threatLevel === 'Medium' ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-emerald-500/20 border-emerald-500/30'}`}>
                      {result.threatLevel === 'High' ? <ShieldAlert className="text-red-500 size-12" /> : <ShieldCheck className="text-emerald-500 size-12" />}
                   </div>
                   
                   <div className="flex-1 flex flex-col w-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase ${result.threatLevel === 'High' ? 'bg-red-500' : result.threatLevel === 'Medium' ? 'bg-yellow-500' : 'bg-emerald-500'}`}>
                           {result.threatLevel} RISK
                        </span>
                        <span className="text-slate-400 text-sm">Score: {result.threatScore}/10</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">Audit Findings</h3>
                      
                      <div className="max-w-3xl">
                         <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            {result.reasoning}
                         </p>
                         
                         {result.redFlags && result.redFlags.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Detected Red Flags</h4>
                              <ul className="flex flex-wrap gap-2 text-sm text-slate-200">
                                 {result.redFlags.map((flag, idx) => (
                                     <li key={idx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm">{flag}</li>
                                 ))}
                              </ul>
                            </div>
                         )}
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* Empty State / Welcome */}
        {!result && (
            <section className="px-6 mb-8 flex-1 flex flex-col justify-center max-w-4xl opacity-80">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to scan</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                  Paste any suspicious text, email content, or API payload into the diagnostic terminal below. AI-Sentinel will perform a deep heuristic analysis to detect zero-day phishing, social engineering, and malicious payloads.
              </p>
            </section>
        )}
        
        {/* Error State */}
        {error && (
            <div className="mx-6 mb-8 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm font-medium">
               {error}
            </div>
        )}

        {/* Diagnostic Input Section */}
        <section className="mt-auto px-6 pb-6">
           <div className={`bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-3xl p-4 shadow-2xl transition-all ${isAnalyzing ? 'animate-pulse ring-2 ring-blue-500/30' : ''}`}>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                 <textarea 
                   disabled={isAnalyzing}
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                   className="w-full bg-transparent border-none focus:ring-0 text-slate-200 placeholder:text-slate-500 resize-none min-h-[120px] text-lg font-medium outline-none" 
                   placeholder="Describe diagnostic query or paste suspicious content..."
                 ></textarea>
                 
                 <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 gap-4">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                       {/* Input decor UI mimicking the Stitch design */}
                       <div className="size-2 rounded-full bg-slate-600"></div>
                       <div className="size-2 rounded-full bg-slate-600"></div>
                       <div className="size-2 rounded-full bg-blue-500/50"></div>
                    </div>
                    
                    <button 
                       onClick={handleAudit}
                       disabled={isAnalyzing || !inputText.trim()}
                       className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 disabled:text-slate-400 text-white pl-5 pr-7 py-3 rounded-2xl font-bold transition-all flex justify-center items-center gap-3 shadow-xl shadow-blue-500/20"
                    >
                       {isAnalyzing ? (
                          <><Loader2 className="size-5 animate-spin"/> <span>Analyzing...</span></>
                       ) : (
                          <><Zap className="size-5" /> <span>Run Deep Audit</span></>
                       )}
                    </button>
                 </div>
              </div>
           </div>
           
           <p className="text-center text-slate-500 text-xs mt-4 tracking-wide uppercase font-semibold">
              Secured by Sentinel-AI. All actions are logged for compliance.
           </p>
        </section>

      </main>
    </div>
  );
}
