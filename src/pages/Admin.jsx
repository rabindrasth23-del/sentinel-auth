import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function Admin() {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/" />;
    }

    // TODO: Retrieve specific admin privileges from custom claims or DB, for now anyone logged in can view
    // if (!isAdmin) { return <Navigate to="/dashboard" /> }

    return (
        <div className="font-display text-slate-100 antialiased bg-[#050505] min-h-screen">
            <style>{`
                body {
                    background: radial-gradient(circle at top left, #1e1b4b 0%, #0f172a 35%, #050505 100%);
                    min-height: 100vh;
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(32px);
                    -webkit-backdrop-filter: blur(32px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }
                .glass-sidebar {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(24px);
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                }
                .active-link {
                    background: rgba(236, 91, 19, 0.15);
                    border: 1px solid rgba(236, 91, 19, 0.3);
                }
            `}</style>
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="w-72 glass-sidebar flex flex-col sticky top-0 h-screen shrink-0">
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="size-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                                <span className="material-symbols-outlined text-white">shield_person</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight text-white">Sentinel</h1>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Auth Intelligence</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-2">
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="/dashboard">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-semibold">Dashboard</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#">
                                <span className="material-symbols-outlined">security</span>
                                <span className="text-sm font-semibold">Security Shield</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl active-link text-white shadow-xl shadow-orange-600/5" href="/admin">
                                <span className="material-symbols-outlined text-orange-500">history_edu</span>
                                <span className="text-sm font-bold">Admin Logs</span>
                            </a>
                        </nav>
                    </div>
                    <div className="mt-auto p-8 border-t border-white/5">
                        <div className="flex items-center gap-3 p-3 glass-card rounded-2xl">
                            <img alt="Admin Profile" className="size-10 rounded-lg" src={currentUser.photoURL || "https://lh3.googleusercontent.com/aida-public/AB6AXuAFOiJWVMg_A0ZwqmOl9mMeRfqXhNPgFk2URnqBi9Y8lfrOWBtG0lxCFGhzyQl17NRuQT6dIQ97ICVfRfJUULsWoJ36T6qpmHc_O4yQLP1hqZx5WohvIY0bi70RTH7PF0zVdtfEMUxncc0L6SYblPM_0vnOxyNqalejLnWj9CVFPPqcVzdsKCsqoyFiTXKj_r-yB7joIkmRRVfoiXQrrnauWYqBJgwyP6bbblWAFd0DkP0y6BCSHAJ0FTgEIRIGS53uuDXBwqAUpzk"} />
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-white truncate">{currentUser.displayName || "Admin User"}</p>
                                <p className="text-[10px] text-slate-400 font-medium">Global Admin</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 px-10 py-12">
                    {/* Header Section */}
                    <header className="flex justify-between items-end mb-12">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest uppercase">
                                <span className="material-symbols-outlined text-sm">visibility</span>
                                Audit Trail
                            </div>
                            <h2 className="text-5xl font-extrabold tracking-tighter text-white">System Activity Logs</h2>
                            <p className="text-slate-400 text-lg">Detailed record of every administrative action within the Sentinel ecosystem.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center glass-card px-4 py-2 rounded-xl border-white/10 group focus-within:border-orange-500/50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
                                <input className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-slate-500 w-64 outline-none" placeholder="Search by admin or action..." type="text" />
                            </div>
                            <button className="bg-orange-600 hover:bg-orange-600/90 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-transform active:scale-95">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Export Report
                            </button>
                        </div>
                    </header>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-4 gap-6 mb-10">
                        <div className="glass-card p-6 rounded-2xl border-white/10">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Total Actions</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">4,821</span>
                                <span className="text-emerald-400 text-xs font-bold">+12%</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl border-white/10">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Security Critical</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">24</span>
                                <span className="text-rose-400 text-xs font-bold">-2</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl border-white/10">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Active Admins</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">18</span>
                                <span className="text-slate-500 text-xs font-bold">Stable</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl border-white/10">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Avg. Daily Logs</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">142</span>
                                <span className="text-emerald-400 text-xs font-bold">+5%</span>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-3 mb-8">
                        <button className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs">All Activity</button>
                        <button className="px-5 py-2.5 rounded-full glass-card text-white font-bold text-xs hover:bg-white/10 transition-colors">Security Only</button>
                        <button className="px-5 py-2.5 rounded-full glass-card text-white font-bold text-xs hover:bg-white/10 transition-colors">User Management</button>
                        <button className="px-5 py-2.5 rounded-full glass-card text-white font-bold text-xs hover:bg-white/10 transition-colors">System Updates</button>
                        <div className="ml-auto flex items-center gap-2 px-4 glass-card rounded-xl border-white/10 text-xs font-bold text-slate-400">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            Last 24 Hours
                        </div>
                    </div>

                    {/* Activity Table */}
                    <div className="glass-card rounded-3xl overflow-hidden border-white/10 shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Timestamp</th>
                                    <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Administrator</th>
                                    <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Type</th>
                                    <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Action Performed</th>
                                    <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 text-right">Operation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Demo Row 1 */}
                                <tr className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-bold text-white">Oct 24, 2023</p>
                                        <p className="text-[10px] text-slate-500 font-medium">14:22:15 UTC</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-400">MT</div>
                                            <span className="text-sm font-semibold text-slate-200">Marcus Thorne</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30">Security</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-medium text-slate-200">Updated Data Retention Policy</p>
                                        <p className="text-xs text-slate-500 truncate max-w-xs">Reduced storage duration from 365 to 180 days for PII data.</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="px-4 py-2 rounded-lg glass-card border-white/5 text-xs font-bold text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">Details</button>
                                    </td>
                                </tr>
                                {/* Demo Row 2 */}
                                <tr className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-bold text-white">Oct 24, 2023</p>
                                        <p className="text-[10px] text-slate-500 font-medium">13:45:02 UTC</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-400">ER</div>
                                            <span className="text-sm font-semibold text-slate-200">Elena Rodriguez</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">System</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-medium text-slate-200">Modified AI Sensitivity</p>
                                        <p className="text-xs text-slate-500 truncate max-w-xs">Increased threshold for adaptive authentication engine.</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="px-4 py-2 rounded-lg glass-card border-white/5 text-xs font-bold text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">Details</button>
                                    </td>
                                </tr>
                                {/* Demo Row 3 */}
                                <tr className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-bold text-white">Oct 24, 2023</p>
                                        <p className="text-[10px] text-slate-500 font-medium">11:10:55 UTC</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-400">SJ</div>
                                            <span className="text-sm font-semibold text-slate-200">Samuel J.</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">User</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-medium text-slate-200">Revoked Global Access</p>
                                        <p className="text-xs text-slate-500 truncate max-w-xs">User 'contractor_v4' session terminated due to inactivity.</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="px-4 py-2 rounded-lg glass-card border-white/5 text-xs font-bold text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bg-white/5 px-8 py-4 flex justify-between items-center">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Showing 3 of 1,284 entries</p>
                            <div className="flex gap-2">
                                <button className="size-8 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                <button className="px-3 h-8 rounded-lg bg-orange-600 text-white text-xs font-bold">1</button>
                                <button className="px-3 h-8 rounded-lg glass-card text-slate-400 text-xs font-bold hover:text-white">2</button>
                                <button className="px-3 h-8 rounded-lg glass-card text-slate-400 text-xs font-bold hover:text-white">3</button>
                                <button className="size-8 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Admin;
