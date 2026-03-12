import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Activity, LogOut } from 'lucide-react';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Admin', icon: Activity, path: '/admin' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-midnight-dark via-midnight/90 to-transparent pointer-events-none">
      <nav className="glass-panel mx-auto max-w-sm rounded-[2rem] p-2 flex items-center justify-around pointer-events-auto border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all relative ${
                isActive ? 'bg-white/5' : 'hover:bg-white/5'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-azure/10 rounded-2xl border border-azure/20 shadow-[inset_0_1px_1px_rgba(14,211,255,0.2)]"></div>
              )}
              <Icon 
                strokeWidth={isActive ? 2.5 : 2} 
                className={`size-6 relative z-10 transition-colors ${
                  isActive ? 'text-azure drop-shadow-[0_0_8px_rgba(14,211,255,0.8)]' : 'text-slate-400'
                }`} 
              />
              <span className={`text-[10px] mt-1 font-bold relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-500'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
        
        <div className="w-px h-10 bg-white/10 mx-1"></div>
        
        <button
          onClick={logout}
          className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all hover:bg-rose-500/10 group relative"
          title="Sign Out"
        >
          <LogOut strokeWidth={2} className="size-6 text-slate-400 group-hover:text-rose-400 transition-colors relative z-10" />
          <span className="text-[10px] mt-1 font-bold text-slate-500 group-hover:text-rose-400 transition-colors relative z-10">
            Sign Out
          </span>
        </button>
      </nav>
    </div>
  );
};

export default BottomNavBar;
