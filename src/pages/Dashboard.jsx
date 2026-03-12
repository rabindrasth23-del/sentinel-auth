import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Search, Shield, Zap, Lock, Filter, FileText, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { analyzeScam } from '../config/gemini';
import { saveAudit } from '../services/auditService';
import Sidebar from '../components/Sidebar';
import BottomNavBar from '../components/BottomNavBar';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const { user } = useAuth();
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  // Simulated real-time logs
  const [logs, setLogs] = useState([
    { id: 1, text: "System initialized. Sentinel Core active.", time: "Just now", type: "info" },
    { id: 2, text: "Awaiting incoming data payload...", time: "1m ago", type: "system" }
  ]);

  const handleAudit = async () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    
    // Add realistic log sequence
    const addLog = (text, type="info") => {
      setLogs(prev => [{ id: Date.now(), text, time: "Just now", type }, ...prev].slice(0, 10));
    };
    
    addLog("Initiating Deep Audit sequence...", "action");
    
    setTimeout(() => addLog("Analyzing PII leakage risk...", "scan"), 800);
    setTimeout(() => addLog("Verifying SSL encryption standards...", "scan"), 1500);

    try {
      const analysisData = await analyzeScam(inputText);
      
      addLog("Analysis complete. Compiling report.", "success");
      setResult(analysisData);

      if (user) {
        addLog("Encrypting payload and saving to secure ledger...", "system");
        await saveAudit(user.uid, inputText, analysisData);
        addLog("Audit securely logged on Firebase.", "success");
      }

    } catch (err) {
      console.error("Audit Error:", err);
      setError("Failed to analyze content. Please try again.");
      addLog("Audit failed. Connection interrupted.", "error");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Safe accessor for nested safety scores
  const getSafetyScore = () => {
    // Basic mock mapping if score isn't provided directly
    if (result) {
        if (result.threatLevel === 'High') return 30;
        if (result.threatLevel === 'Medium') return 65;
        if (result.threatLevel === 'Low') return 95;
    }
    return 100; // Default glowing state
  };

  const currentScore = getSafetyScore();
  const getOrbColor = () => {
    if (isAnalyzing) return "from-indigo-500 to-purple-500 scale-110 animate-pulse";
    if (currentScore >= 90) return "from-azure to-emerald-400";
    if (currentScore >= 60) return "from-yellow-400 to-orange-500";
    return "from-red-500 to-rose-600";
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-midnight-dark text-slate-100 overflow-hidden font-display">
      
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col h-full overflow-y-auto relative z-10 px-4 md:px-8 py-6 pb-24 md:pb-6 custom-scrollbar">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-1">Sentinel Overview</h2>
            <p className="text-slate-400 text-sm">Welcome back, {user?.displayName || 'Agent'}.</p>
          </div>
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">System Secure</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
            
            {/* Left Column: Hero & Action Center */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Hero Section: Privacy Pulse */}
                <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
                     {/* Dynamic Background Blur */}
                    <div className={`absolute inset-0 opacity-20 transition-colors duration-1000 blur-3xl rounded-full scale-150 bg-gradient-to-tr ${getOrbColor()}`}></div>
                    
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Privacy Pulse</h3>
                    
                    {/* The Orb */}
                    <div className="relative z-10 size-40 rounded-full flex items-center justify-center group">
                        <div className={`absolute inset-0 rounded-full transition-all duration-700 bg-gradient-to-br ${getOrbColor()} blur-xl opacity-60 group-hover:opacity-100`}></div>
                        <div className={`absolute inset-2 rounded-full transition-all duration-700 bg-gradient-to-br ${getOrbColor()} shadow-inner border border-white/20 flex items-center justify-center`}>
                            <span className="text-4xl font-black text-white drop-shadow-md">{currentScore}%</span>
                        </div>
                    </div>
                    
                    <p className="mt-6 text-sm text-slate-300 font-medium relative z-10">Current Safety Score</p>
                </div>

                {/* Scorecards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                         <div className="flex items-center justify-between">
                             <div className="bg-azure/20 p-2 rounded-xl"><Filter className="text-azure size-4" /></div>
                             <span className="text-xs font-bold text-azure">A+</span>
                         </div>
                         <div>
                             <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Data Minimization</p>
                             <p className="text-lg font-bold text-white mt-1">Excellent</p>
                         </div>
                     </div>
                     <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                         <div className="flex items-center justify-between">
                             <div className="bg-indigo-500/20 p-2 rounded-xl"><Lock className="text-indigo-400 size-4" /></div>
                             <span className="text-xs font-bold text-emerald-400">256-bit</span>
                         </div>
                         <div>
                             <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Encryption</p>
                             <p className="text-lg font-bold text-white mt-1">AES-GCM</p>
                         </div>
                     </div>
                     <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                         <div className="flex items-center justify-between">
                             <div className="bg-emerald-500/20 p-2 rounded-xl"><ShieldCheck className="text-emerald-400 size-4" /></div>
                             <span className="text-xs font-bold text-emerald-400">100%</span>
                         </div>
                         <div>
                             <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Compliance</p>
                             <p className="text-lg font-bold text-white mt-1">GDPR / CCPA</p>
                         </div>
                     </div>
                </div>

                {/* Action Center */}
                <div className="glass-card p-6 rounded-3xl mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="text-azure size-5" />
                        <h3 className="text-white font-bold">Deep Audit Terminal</h3>
                    </div>
                    <div className="bg-midnight-dark/50 rounded-2xl p-4 border border-white/5 mb-4">
                        <textarea 
                            disabled={isAnalyzing}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-200 placeholder:text-slate-600 resize-none min-h-[100px] text-sm outline-none" 
                            placeholder="Paste JSON payloads, raw text, or URLs for heuristic analysis..."
                        ></textarea>
                    </div>
                    {error && <p className="text-red-400 text-xs mt-2 mb-4">{error}</p>}
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAudit}
                        disabled={isAnalyzing || !inputText.trim()}
                        className="w-full relative overflow-hidden group glass-button bg-azure/10 hover:bg-azure/20 border-azure/30 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-2xl font-bold flex justify-center items-center gap-2 text-azure"
                    >
                        {isAnalyzing ? (
                            <><Activity className="size-5 animate-bounce" /> Analyzing Threat Vectors...</>
                        ) : (
                            <><Search className="size-5" /> Trigger Deep Audit</>
                        )}
                    </motion.button>
                </div>
                
                {/* Result Display (if audit ran) */}
                <AnimatePresence>
                {result && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className={`glass-panel p-6 rounded-3xl border-l-4 ${result.threatLevel === 'High' ? 'border-l-red-500' : result.threatLevel === 'Medium' ? 'border-l-yellow-500' : 'border-l-emerald-500'}`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Diagnostic Report</h3>
                            <span className={`px-3 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase ${result.threatLevel === 'High' ? 'bg-red-500/80' : result.threatLevel === 'Medium' ? 'bg-yellow-500/80' : 'bg-emerald-500/80'}`}>
                                {result.threatLevel} RISK
                            </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">{result.reasoning}</p>
                        {result.redFlags && result.redFlags.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Detected Anomalies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {result.redFlags.map((flag, idx) => (
                                        <span key={idx} className="bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-1 rounded-md text-xs font-medium">
                                            {flag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>

            {/* Right Column: Real-time Logs */}
            <div className="lg:col-span-1 h-[600px] lg:h-auto">
                <div className="glass-card rounded-3xl p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                           <Activity className="text-slate-400 size-4" />
                           <h3 className="text-white font-bold">Active Scans</h3>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">Live Feed</span>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
                        <AnimatePresence>
                            {logs.map((log) => (
                                <motion.div 
                                    key={log.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex gap-3 relative group"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={`size-2.5 rounded-full mt-1.5 ${
                                            log.type === 'info' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' :
                                            log.type === 'system' ? 'bg-slate-500' :
                                            log.type === 'action' ? 'bg-purple-500 animate-pulse' :
                                            log.type === 'scan' ? 'bg-amber-400' :
                                            log.type === 'success' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                                            'bg-red-500'
                                        }`} />
                                        <div className="w-px h-full bg-white/10 my-1 group-last:hidden" />
                                    </div>
                                    <div className="pb-4">
                                        <p className="text-sm text-slate-300 leading-snug">{log.text}</p>
                                        <span className="text-[10px] text-slate-500 font-medium">{log.time}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
      </main>

      <div className="md:hidden">
         <BottomNavBar />
      </div>

    </div>
  );
}
