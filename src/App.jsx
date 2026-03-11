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
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
           <div className="size-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
           <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm animate-pulse">Initializing Sentinel Core...</p>
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/" />;
}

// Redirects logged-in users away from the Landing page
function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // Let PrivateRoute handle the loading state visual
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
