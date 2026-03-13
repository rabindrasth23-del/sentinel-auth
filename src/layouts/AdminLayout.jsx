import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from '../components/AdminSidebar';

export default function AdminLayout() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden font-display">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
           <div className="size-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
           <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm animate-pulse">Authenticating Admin...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Enforce Admin Role
  if (user.role !== 'admin') {
    return <Navigate to="/user/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen bg-admin-radial text-slate-100 font-body selection:bg-primary/30">
      <AdminSidebar />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Dynamic Outlet for Admin Pages */}
        <Outlet />
      </div>
    </div>
  );
}
