import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { name: 'System Monitor', icon: 'monitoring', path: '/admin/dashboard' },
    { name: 'User Management', icon: 'shield_person', path: '/admin/users' },
    { name: 'System Logs', icon: 'description', path: '/admin/logs' },
    { name: 'Breach Audit', icon: 'verified_user', path: '/admin/breach-audit' },
    { name: 'System Config', icon: 'settings_applications', path: '/admin/config' },
    { name: 'Audit Analysis', icon: 'analytics', path: '/admin/audit-analysis' },
  ];

  return (
    <aside className="w-72 h-[calc(100vh-2rem)] flex flex-col bg-slate-900/40 backdrop-blur-2xl border-r border-white/10 m-4 rounded-3xl shrink-0 z-10 transition-all sticky top-4 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="p-8 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary">
          <span className="material-symbols-outlined text-white text-2xl">hardware</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-bold leading-tight font-display">Sentinel-Auth</h1>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold text-primary">Admin Console</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
        <div className="px-4 pb-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">Core Systems</div>
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <a 
              key={item.path}
              onClick={() => navigate(item.path)} 
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${
                isActive 
                ? 'bg-primary/20 text-white border border-primary/20 shadow-glow-primary' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
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
          className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-red-500/10 hover:border-red-500/30 transition-all group"
          title="Sign Out (Admin)"
        >
          <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-primary/20 flex items-center justify-center overflow-hidden bg-slate-800 shrink-0">
             {user?.photoURL ? (
               <img src={user.photoURL} alt="Profile" className="size-full object-cover" />
             ) : (
               <span className="text-xs font-bold text-white uppercase">{user?.displayName?.[0] || 'A'}</span>
             )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{user?.displayName || 'System Admin'}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-tight">Root Access</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-red-400 transition-colors">logout</span>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
