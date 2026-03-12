import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShieldAlert, LayoutDashboard, Shield, LogOut, Code, Activity, Server, FileText } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'System Intelligence', icon: Activity, path: '/admin' },
  ];

  return (
    <aside className="w-72 h-[calc(100vh-2rem)] flex flex-col glass-card m-4 rounded-[2rem] shrink-0 z-10 transition-all sticky top-4 overflow-hidden border-white/5 shadow-2xl">
      {/* Brand Header */}
      <div className="p-8 pb-6 flex items-center gap-3 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-azure/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 size-11 bg-gradient-to-br from-azure to-cyan-400 rounded-2xl flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(14,211,255,0.4)]">
            <div className="w-full h-full bg-midnight-dark rounded-[14px] flex items-center justify-center">
                <ShieldAlert className="text-azure size-6" strokeWidth={2.5} />
            </div>
        </div>
        <div className="flex flex-col relative z-10">
          <h1 className="text-white text-xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Sentinel</h1>
          <span className="text-azure text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Auth Core</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar relative z-10">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <button 
              key={item.path}
              onClick={() => navigate(item.path)} 
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group relative overflow-hidden ${
                isActive 
                ? 'bg-azure/10 border border-azure/20 shadow-[inset_0_1px_1px_rgba(14,211,255,0.2)]' 
                : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-azure rounded-r-md shadow-[0_0_10px_#0ed3ff]"></div>
              )}
              <Icon strokeWidth={isActive ? 2.5 : 2} className={`size-5 transition-colors ${isActive ? 'text-azure drop-shadow-[0_0_8px_rgba(14,211,255,0.8)]' : 'text-slate-400 group-hover:text-slate-200'}`} />
              <span className={`text-sm font-bold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto mb-2 relative z-10">
        <button 
          onClick={logout} 
          className="w-full glass-panel p-4 py-3 rounded-[1.5rem] flex items-center gap-3 hover:bg-white/10 transition-colors group cursor-pointer border border-white/5 relative overflow-hidden"
          title="Sign Out"
        >
          <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-white/10 shrink-0 relative z-10">
             {user?.photoURL ? (
               <img src={user.photoURL} alt="Profile" className="size-full object-cover" />
             ) : (
               <span className="text-xs font-bold text-slate-300 uppercase">{user?.displayName?.[0] || 'A'}</span>
             )}
          </div>
          <div className="flex-1 min-w-0 text-left relative z-10">
            <p className="text-sm font-bold text-white truncate group-hover:text-azure transition-colors">{user?.displayName || 'Admin Role'}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                <div className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]"></div> Active
            </p>
          </div>
          <div className="size-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-colors border border-white/5 relative z-10">
            <LogOut className="size-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
