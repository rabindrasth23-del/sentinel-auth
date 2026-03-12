import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

// Custom PrivateRoute component to protect the Dashboard
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-azure rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-6">
           <div className="size-16 border-2 border-azure/20 border-t-azure rounded-full animate-spin shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
           <div className="flex flex-col items-center">
             <p className="text-azure font-bold tracking-[0.3em] uppercase text-xs animate-pulse">Initializing Sentinel Core</p>
             <p className="text-white/20 text-[10px] font-medium tracking-widest mt-2 uppercase">Decrypting Secure Vault...</p>
           </div>
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/" />;
}

// Redirects logged-in users away from the Landing page
function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return !user ? children : <Navigate to="/dashboard" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
