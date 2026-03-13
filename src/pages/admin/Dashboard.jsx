import React, { useState } from 'react';
import { analyzeScam } from '../../config/gemini';

export default function AdminDashboard() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    threatLevel: 'Danger',
    threatScore: 98,
    reasoning: 'AI-Sentinel has detected a sophisticated session hijacking attempt originating from an unmapped IP block in Eastern Europe. The attacker successfully bypassed the primary firewall using an expired JWT token variant, targeting the administrative API endpoint.',
    recommendation: 'Immediate endpoint isolation and session key revocation required.',
    redFlags: ['Unmapped IP block', 'Expired JWT variant', 'Admin API targeting']
  });
  
  const [actionStates, setActionStates] = useState({
    revoking: false,
    isolating: false,
    revoked: false,
    isolated: false
  });

  const handleAction = (action) => {
    setActionStates(prev => ({ ...prev, [action]: true }));
    setTimeout(() => {
      setActionStates(prev => ({ ...prev, [action]: false, [`${action}ed`]: true }));
      // Reset success state after 3 seconds
      setTimeout(() => {
        setActionStates(prev => ({ ...prev, [`${action}ed`]: false }));
      }, 3000);
    }, 1500);
  };

  const handleAnalyze = async () => {
    if (!query.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeScam(query);
      setAnalysisResult({
        threatLevel: result.threatLevel,
        threatScore: result.threatScore,
        reasoning: result.reasoning,
        recommendation: result.recommendation || 'No specific action recommended.',
        redFlags: result.redFlags || []
      });
      setQuery('');
    } catch (error) {
       console.error("Analysis failed:", error);
       setAnalysisResult({
         threatLevel: 'Warning',
         threatScore: 50,
         reasoning: 'Analysis failed due to a system error. Please try again.',
         recommendation: 'Check system logs for connectivity issues.',
         redFlags: []
       });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-8">
        <div>
          <h2 className="text-5xl font-black text-white tracking-tight font-display">System Monitor</h2>
          <p className="text-slate-400 mt-2 text-lg">Real-time surveillance & AI diagnostics active</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="size-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="size-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      {/* Alert Section */}
      <section className="px-6 mb-8">
        <div className={`glass-card rounded-3xl p-8 border-l-4 overflow-hidden relative ${
            analysisResult.threatLevel === 'Danger' ? 'border-l-danger animate-[pulse_3s_ease-in-out_infinite]' :
            analysisResult.threatLevel === 'Warning' ? 'border-l-amber-500' : 'border-l-emerald-500'
        }`}>
          <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32 ${
            analysisResult.threatLevel === 'Danger' ? 'bg-danger/10' :
            analysisResult.threatLevel === 'Warning' ? 'bg-amber-500/10' : 'bg-emerald-500/10'
          }`}></div>
          <div className="flex flex-col xl:flex-row gap-8 items-start relative z-10">
            <div className={`size-24 rounded-3xl border flex items-center justify-center shrink-0 ${
              analysisResult.threatLevel === 'Danger' ? 'bg-danger/20 border-danger/30 text-danger' :
              analysisResult.threatLevel === 'Warning' ? 'bg-amber-500/20 border-amber-500/30 text-amber-500' : 
              'bg-emerald-500/20 border-emerald-500/30 text-emerald-500'
            }`}>
              <span className="material-symbols-outlined text-5xl">
                {analysisResult.threatLevel === 'Danger' ? 'gpp_bad' : 
                 analysisResult.threatLevel === 'Warning' ? 'warning' : 'gpp_good'}
              </span>
            </div>
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase ${
                    analysisResult.threatLevel === 'Danger' ? 'bg-danger' :
                    analysisResult.threatLevel === 'Warning' ? 'bg-amber-500' : 'bg-emerald-500'
                }`}>
                    {analysisResult.threatLevel} ({analysisResult.threatScore}/100)
                </span>
                <span className="text-slate-400 text-sm">Threat ID: #AX-{Math.floor(Math.random() * 90000) + 10000}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Diagnostic Analysis Result</h3>
              <div className="max-w-4xl">
                <p className="text-slate-300 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                  {analysisResult.reasoning}
                </p>
                {analysisResult.recommendation && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Recommended Action</p>
                        <p className="text-slate-200">{analysisResult.recommendation}</p>
                    </div>
                )}
                {analysisResult.threatLevel === 'Danger' && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      <button 
                        onClick={() => handleAction('revok')}
                        disabled={actionStates.revoking || actionStates.revoked}
                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-glow-danger active:scale-95 ${
                          actionStates.revoked ? 'bg-emerald-500 text-white shadow-glow-emerald cursor-default' : 
                          'bg-danger hover:bg-red-600 text-white'
                        }`}
                      >
                        {actionStates.revoking ? (
                          <span className="material-symbols-outlined text-lg animate-spin">sync</span>
                        ) : (
                          <span className="material-symbols-outlined text-lg">{actionStates.revoked ? 'check_circle' : 'key_off'}</span>
                        )}
                        {actionStates.revoking ? 'Revoking...' : actionStates.revoked ? 'Keys Revoked' : 'Revoke Session Keys'}
                      </button>
                      
                      <button 
                        onClick={() => handleAction('isolat')}
                        disabled={actionStates.isolating || actionStates.isolated}
                        className={`text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                          actionStates.isolated ? 'bg-emerald-500 glass-button cursor-default text-emerald-100 shadow-[inset_0_0_20px_rgba(16,185,129,0.5)]' : 
                          'glass-button'
                        }`}
                      >
                        {actionStates.isolating ? (
                          <span className="material-symbols-outlined text-lg animate-spin">sync</span>
                        ) : (
                          <span className="material-symbols-outlined text-lg">{actionStates.isolated ? 'verified_user' : 'block'}</span>
                        )}
                        {actionStates.isolating ? 'Isolating...' : actionStates.isolated ? 'Endpoint Isolated' : 'Isolate Endpoint'}
                      </button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Input Section */}
      <section className="mt-auto px-6 pb-6">
        <div className="glass-card rounded-3xl p-4 shadow-glass">
          <div className="bg-white/5 border-2 border-transparent focus-within:border-blue-500/30 rounded-2xl p-4 transition-colors">
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-500 resize-none min-h-[120px] text-lg font-medium" 
              placeholder="Paste suspicious logs, URLs, or describe a system event to analyze..."
              disabled={isAnalyzing}
            ></textarea>
            <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
              <div className="flex items-center gap-2">
                <button className="size-10 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                </button>
                <button className="size-10 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">upload_file</span>
                </button>
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={!query.trim() || isAnalyzing}
                className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-3 ${
                  query.trim() && !isAnalyzing
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-glow-primary'
                    : 'bg-white/5 text-slate-500 cursor-not-allowed'
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <span className="material-symbols-outlined text-xl animate-spin">sync</span>
                    Analyzing Target...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xl">radar</span>
                    Run Diagnostics
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-500 text-xs mt-4 tracking-wide uppercase">
          Secured by Sentinel-AI. All actions are logged for compliance.
        </p>
      </section>
    </div>
  );
}
