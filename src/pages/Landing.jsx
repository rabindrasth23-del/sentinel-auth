import React from 'react';
import { Shield, Zap, Activity, Smartphone, ArrowRight, ShieldCheck, Lock, Eye } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 relative overflow-hidden selection:bg-blue-500/30 font-body">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[130px] rounded-full mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-cyan-500/5 blur-[100px] rounded-full mix-blend-screen"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPG1hdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0yaDJ2em0wLTRoLXYtMmgydnpNMjAgMjRoLXYtMmgydnpNMjQgMjBoLXYtMmgydnpNMjgtMTJoLXYtMmgydnoiIGZpbGw9IiNmZmZiZmQiIGZpbGwtb3BhY2l0eT0iMC4wNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Shield className="text-blue-400 size-6" strokeWidth={2} />
          </div>
          <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-display">
            Sentinel Auth
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => navigate('/login')} 
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:text-blue-300 transition-all backdrop-blur-md shadow-lg"
          >
            Access Portal
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-10 md:py-20 text-center">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Gemini 1.5 Pro Integrated
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[1.1] mb-8 font-display">
            Authentication, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Secured by AI.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Next-generation identity management with real-time threat intelligence. Sentinel protects your users before the breach happens.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="group relative px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(45deg,transparent,25%,rgba(255,255,255,0.3),75%,transparent)] bg-[length:250%_250%] animate-shimmer transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enter Sentinel <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              Explore Features
            </button>
          </motion.div>
        </motion.div>

        {/* Floating UI Elements Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 50 }}
          className="mt-20 relative w-full max-w-4xl mx-auto h-48 md:h-64 pointer-events-none"
        >
          {/* Center Main Shield */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-32 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center z-20">
            <ShieldCheck className="size-16 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" strokeWidth={1.5} />
          </div>
          
          {/* Floating Card 1 */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-[10%] md:left-[20%] top-[20%] w-48 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3 z-10"
          >
            <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Lock className="size-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Access Granted</p>
              <p className="text-slate-400 text-xs">Risk Score: 0/100</p>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute right-[5%] md:right-[15%] bottom-[10%] w-56 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3 z-30"
          >
            <div className="size-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <Eye className="size-5 text-red-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Network Scanned</p>
              <p className="text-slate-400 text-xs text-red-400">1 Anomaly Detected</p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Feature Section */}
      <section id="features" className="relative z-10 px-6 py-24 bg-slate-950/50 backdrop-blur-lg border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white font-display mb-4">Enterprise-grade security. <br/> Start-up speed.</h2>
             <p className="text-slate-400 text-lg">Built for hackathons, designed for scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Feature 1 */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-blue-400 size-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Threat Detection</h3>
              <p className="text-slate-400 leading-relaxed">Continuous analysis of suspicious activities powered by Gemini 1.5 Pro. Instantly spots complex phishing and credential stuffing attacks.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-indigo-400 size-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero-Trust Architecture</h3>
              <p className="text-slate-400 leading-relaxed">Robust Role-Based Access Control (RBAC). Complete isolation between standard users and system administrators at the application layer.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="text-cyan-400 size-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Liquid UI/UX</h3>
              <p className="text-slate-400 leading-relaxed">A beautifully crafted, responsive interface using modern frosted glass techniques, vivid fluid gradients, and micro-interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        <p>Built with React, Tailwind, Firebase & Gemini. Secured by Sentinel.</p>
      </footer>
    </div>
  );
}
