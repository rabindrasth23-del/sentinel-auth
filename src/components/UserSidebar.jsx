import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { name: 'Security Dashboard', icon: 'shield', path: '/user/dashboard' },
    { name: 'Audit History', icon: 'history', path: '/user/history' },
    { name: 'AI Security Assistant', icon: 'auto_awesome', path: '/user/ai-search' },
    { name: 'My Reports', icon: 'bar_chart', path: '/user/reports' },
    { name: 'Settings', icon: 'settings', path: '/user/settings' },
  ];

  return (
    <aside className="w-72 h-[calc(100vh-2rem)] flex flex-col bg-slate-900/40 backdrop-blur-2xl border-r border-white/10 m-4 rounded-3xl shrink-0 z-10 transition-all sticky top-4 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="p-8 flex items-center gap-3">
        <div className="size-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20">
          <span className="material-symbols-outlined text-white text-2xl">verified_user</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-bold leading-tight font-display">Sentinel</h1>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Personal Security</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <a 
              key={item.path}
              onClick={() => navigate(item.path)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${
                isActive 
                ? 'bg-white/10 text-white border border-white/5 shadow-glass' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.name}</span>
            </a>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div 
          onClick={logout} 
          className="glass border border-white/5 p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-all group"
          title="Sign Out"
        >
          <div className="size-10 rounded-full bg-cover bg-center ring-1 ring-white/20 flex items-center justify-center overflow-hidden bg-slate-800 shrink-0">
             {user?.photoURL ? (
               <img src={user.photoURL} alt="Profile" className="size-full object-cover" />
             ) : (
               <span className="text-xs font-bold text-white uppercase">{user?.displayName?.[0] || 'U'}</span>
             )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{user?.displayName || 'User'}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-tight">Standard Account</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-white transition-colors">logout</span>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
