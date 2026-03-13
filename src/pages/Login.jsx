import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, RefreshCcw } from 'lucide-react';

const Login = () => {
  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loadingType, setLoadingType] = useState(null); // 'google' or 'guest'

  const from = location.state?.from?.pathname || '/user/dashboard';

  const handleLogin = async () => {
    setLoadingType('google');
    try {
      await login();
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Failed to log in', error);
      setLoadingType(null);
    }
  };
  
  const handleGuestLogin = async () => {
    setLoadingType('guest');
    try {
      await loginAsGuest();
      // Guest inherently goes to user dashboard
      navigate('/user/dashboard', { replace: true });
    } catch (error) {
      console.error('Failed to log in as guest', error);
      setLoadingType(null);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 text-slate-100 font-body overflow-hidden bg-[#020617] selection:bg-blue-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[130px] rounded-full mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPG1hdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0yaDJ2em0wLTRoLXYtMmgydnpNMjAgMjRoLXYtMmgydnpNMjQgMjBoLXYtMmgydnpNMjgtMTJoLXYtMmgydnoiIGZpbGw9IiNmZmZiZmQiIGZpbGwtb3BhY2l0eT0iMC4wNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="max-w-md w-full bg-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl space-y-8 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
      >
        <div className="relative size-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative size-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-white/10 shadow-xl">
               <Shield className="text-blue-400 size-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />
            </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-display">
            Restricted Access
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            Identify yourself to enter the Sentinel network.
          </p>
        </div>
        
        <div className="space-y-4 pt-4">
            {/* Google Authentication */}
            <button 
              onClick={handleLogin}
              disabled={loadingType !== null}
              className={`w-full relative overflow-hidden group px-6 py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-3 ${
                loadingType === 'google' 
                ? 'bg-blue-600 cursor-wait shadow-[0_0_20px_rgba(37,99,235,0.4)] border-transparent text-white' 
                : loadingType !== null 
                  ? 'bg-white/5 text-slate-500 cursor-not-allowed border-transparent'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/30 text-white shadow-lg cursor-pointer'
              } border`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(45deg,transparent,25%,rgba(255,255,255,0.05),75%,transparent)] bg-[length:250%_250%] animate-shimmer transition-opacity duration-300 pointer-events-none"></div>
              
              {loadingType === 'google' ? (
                 <>
                   <RefreshCcw className="size-5 text-white animate-spin shrink-0" />
                   <span className="relative z-10 tracking-wide">Authenticating...</span>
                 </>
              ) : (
                 <>
                   <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5 shrink-0" />
                   <span className="relative z-10 tracking-wide">Continue with Google</span>
                 </>
              )}
            </button>

            <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-slate-500 text-xs font-bold uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-white/10"></div>
            </div>

             {/* Guest Authentication */}
             <button 
              onClick={handleGuestLogin}
              disabled={loadingType !== null}
              className={`w-full relative overflow-hidden group px-6 py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-3 ${
                loadingType === 'guest' 
                ? 'bg-indigo-600/20 cursor-wait border-indigo-500/50 text-indigo-300' 
                : loadingType !== null 
                  ? 'bg-transparent text-slate-600 cursor-not-allowed border-transparent'
                  : 'bg-transparent border-dashed border-white/20 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300 hover:text-white cursor-pointer'
              } border`}
            >
              {loadingType === 'guest' ? (
                 <>
                   <RefreshCcw className="size-5 text-indigo-400 animate-spin shrink-0" />
                   <span className="relative z-10 tracking-wide">Initializing Session...</span>
                 </>
              ) : (
                 <>
                   <Fingerprint className="size-5 shrink-0 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                   <span className="relative z-10 tracking-wide">Enter as Guest</span>
                 </>
              )}
            </button>
        </div>

        <div className="pt-8 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Strict Access Control Enforced
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
