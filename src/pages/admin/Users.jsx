import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All'); // 'All', 'Admins', 'Users', 'Guests'

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('lastLogin', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const filteredUsers = users.filter(user => {
    if (filter === 'All') return true;
    if (filter === 'Admins') return user.role === 'admin';
    if (filter === 'Users') return user.role === 'user';
    if (filter === 'Guests') return user.role === 'guest';
    return true;
  });

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-primary/10 text-primary border-primary/20';
      case 'user': return 'bg-slate-800 text-slate-300 border-slate-700';
      case 'guest': return 'bg-slate-800 text-slate-400 border-slate-700';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const getInitials = (name) => {
     if (!name || name === 'Unknown') return '?';
     if (name.includes(' ')) {
         return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
     }
     return name.substring(0, 2).toUpperCase();
  };

  return (
    <main className="flex-1 w-full p-4 lg:p-10 flex flex-col gap-8 overflow-y-auto">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">User Management</h2>
          <p className="text-slate-400 text-lg">Control access levels and monitor platform security.</p>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 size-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined p-2 bg-primary/10 text-primary rounded-xl">group</span>
            <span className="text-xs font-bold text-success bg-success/10 px-2.5 py-1 rounded-full">Live</span>
          </div>
          <div>
            <p className="text-slate-400 font-medium text-sm">Total Authenticated Identities</p>
            <h3 className="text-3xl font-bold mt-1 text-white">{loading ? '...' : users.length}</h3>
            <p className="text-slate-400 text-xs mt-2 italic">Synced with Firebase Auth</p>
          </div>
        </div>
        
        <div className="glass-card rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 size-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined p-2 bg-purple-500/10 text-purple-600 rounded-xl">shield_person</span>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Secure</span>
          </div>
          <div>
            <p className="text-slate-400 font-medium text-sm">Active Administrators</p>
            <h3 className="text-3xl font-bold mt-1 text-white">{loading ? '...' : users.filter(u => u.role === 'admin').length}</h3>
            <p className="text-slate-400 text-xs mt-2 italic">Users with elevated platform access</p>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 mr-2">Filters:</span>
          {['All', 'Admins', 'Users', 'Guests'].map(f => (
             <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    filter === f 
                    ? 'bg-primary text-white shadow-glow-primary border-primary' 
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-primary'
                }`}
             >
                 {f === 'All' ? 'All Users' : f}
             </button>
          ))}
        </div>
        
        <div className="glass rounded-3xl overflow-hidden shadow-glass">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/50 border-b border-white/10">
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Identity</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Last Sync</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-slate-400">Loading user intelligence...</td>
                            </tr>
                        ) : filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-slate-400">No identities found matching the current filter.</td>
                            </tr>
                        ) : (
                            filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt={user.displayName} className="size-10 rounded-full border border-white/10" />
                                            ) : (
                                                <div className="size-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold border border-white/5">
                                                    {getInitials(user.displayName)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-semibold text-white">{user.displayName}</p>
                                                <p className="text-xs text-slate-400">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 border text-xs font-bold rounded-full capitalize ${getRoleBadgeColor(user.role)}`}>
                                            {user.role || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-success"></span>
                                            <span className="text-sm font-medium text-white">Active</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-400">
                                        {user.lastLogin?.toDate ? new Date(user.lastLogin.toDate()).toLocaleString() : 'Just now'}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-white/10 bg-black/20">
                <p className="text-sm text-slate-400 font-medium">Showing <span className="text-white">{filteredUsers.length}</span> identities</p>
            </div>
        </div>
      </section>
    </main>
  );
}
