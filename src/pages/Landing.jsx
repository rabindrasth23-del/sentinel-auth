import React from 'react';
import { Shield, Lock, Zap, ShieldCheck, Github, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate('/');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-slate-100 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600/20 p-2.5 rounded-2xl border border-indigo-500/30 backdrop-blur-md">
            <Shield className="text-indigo-500 size-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">Sentinel-Auth</span>
        </div>
        <div className="flex gap-4">
          <button onClick={handleLogin} className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all">
            Sign In
          </button>
          <button onClick={handleLogin} className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2">
            Get Started <ArrowRight className="size-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-20 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Next-Gen Privacy Protection
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 max-w-4xl mx-auto leading-tight mb-6">
          Military-Grade Analysis for Everyday Threats
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Paste suspicious texts, emails, or links. Our AI security engine performs deep audits instantly, backed by immutable blockchain-style logs on Firebase.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleLogin} className="px-8 py-4 rounded-2xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 ring-1 ring-indigo-500/50">
            <ShieldCheck className="size-5" /> Start Free Audit
          </button>
          <a href="#features" className="px-8 py-4 rounded-2xl text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2">
            View Analytics Protocol
          </a>
        </div>

      </main>

      {/* Feature Grid Mini */}
      <section className="relative z-10 p-6 pb-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1e293b]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all group">
            <div className="bg-indigo-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-indigo-400 size-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gemini Pro AI Engine</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Powered by state-of-the-art LLMs to detect nuanced social engineering and phishing attempts missed by standard filters.</p>
          </div>
          <div className="bg-[#1e293b]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock className="text-emerald-400 size-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Immutable Audit Trail</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Every analysis is securely logged in Firebase Firestore with strict rules ensuring data integrity and user privacy.</p>
          </div>
          <div className="bg-[#1e293b]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-blue-400 size-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Enterprise-Grade Auth</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Seamless Google Sign-In with robust session management backed by Firebase Authentication.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
