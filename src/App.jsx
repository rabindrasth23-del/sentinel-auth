import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Login';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';

// Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminLogs from './pages/admin/Logs';
import AdminBreachAudit from './pages/admin/BreachAudit';
import AdminConfig from './pages/admin/Config';
import AdminAuditAnalysis from './pages/admin/AuditAnalysis';
import UserDashboard from './pages/user/Dashboard';
import UserAuditHistory from './pages/user/AuditHistory';
import UserReports from './pages/user/Reports';
import UserAISearch from './pages/user/AISearch';
import UserSettings from './pages/user/Settings';

// Redirects logged-in users away from the Landing page
function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // Let PrivateRoute handle the loading state visual
  // TEMPORARY: Redirect to user dashboard for now, later we'll redirect based on role
  return !user ? children : <Navigate to="/user/dashboard" />;
}

// Ensure at root '/' we decide where to go
function RootRoute() {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Landing />;
  
  if (user.role === 'admin') {
    return <Navigate to="/admin/dashboard" />;
  }
  
  return <Navigate to="/user/dashboard" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootRoute />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          
          {/* Strict Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="logs" element={<AdminLogs />} />
            <Route path="breach-audit" element={<AdminBreachAudit />} />
            <Route path="config" element={<AdminConfig />} />
            <Route path="audit-analysis" element={<AdminAuditAnalysis />} />
            {/* More admin routes will go here */}
          </Route>

          {/* Strict User Routes */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Navigate to="/user/dashboard" replace />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="history" element={<UserAuditHistory />} />
            <Route path="ai-search" element={<UserAISearch />} />
            <Route path="reports" element={<UserReports />} />
            <Route path="settings" element={<UserSettings />} />
            {/* More user routes will go here */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
