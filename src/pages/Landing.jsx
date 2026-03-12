import React from 'react';
import { Shield, Zap, Activity, Smartphone, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-midnight-dark text-slate-100 relative overflow-hidden">
      {/* Blurred background orbs for deep midnight blue & azure aesthetic */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-azure/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="glass-panel p-2.5 rounded-2xl">
            <Shield className="text-azure size-6" strokeWidth={1} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sentinel-Auth</span>
        </div>
        <div className="flex gap-4">
          <button onClick={handleLogin} className="glass-button px-6 py-2.5 rounded-full text-sm font-bold text-white">
            Sign In
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-20 text-center mt-[-40px]">
        
        {/* Trust Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Network Status: Sentinel Network Active
        </div>

        {/* Visual Hook: Blurred Privacy Shield SVG Animation */}
        <div className="relative mb-12 flex justify-center items-center">
          <div className="absolute inset-0 bg-azure/30 blur-3xl rounded-full scale-150 animate-pulse-slow"></div>
          <Shield className="size-32 text-azure/80 drop-shadow-[0_0_40px_rgba(14,211,255,0.5)] animate-pulse-slow" strokeWidth={0.5} />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 max-w-4xl mx-auto leading-tight mb-6">
          Agentic Privacy for the Modern Web.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Autonomous auditing that secures your data before the first breach.
        </p>

        {/* Glass CTA */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin} 
          className="relative overflow-hidden group px-10 py-4 rounded-full text-base font-bold text-midnight-dark bg-gradient-to-r from-white to-slate-200 shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,25%,rgba(255,255,255,0.8),75%,transparent)] bg-[length:200%_100%] animate-shimmer" />
          <span className="relative z-10 flex items-center gap-2">Get Started <ArrowRight className="size-5" /></span>
        </motion.button>

      </main>

      {/* The Three Pillars Section */}
      <section className="relative z-10 p-6 pb-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 group">
            <div className="glass-panel w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-azure size-6" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI-Driven Audits</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Powered by TestSprite agentic logic. Detects nuanced social engineering and phishing attempts missed by standard filters.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 group">
            <div className="glass-panel w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Activity className="text-emerald-400 size-6" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Real-time Monitoring</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Firebase-backed live data streams. Every analysis is securely logged in Firestore with strict rules ensuring data integrity.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 group">
            <div className="glass-panel w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="text-indigo-400 size-6" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">iOS Design Standards</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Zero compromise on aesthetics and usability. Utilizing advanced glassmorphism and liquid animations for a premium feel.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
