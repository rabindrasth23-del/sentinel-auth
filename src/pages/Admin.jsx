import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BottomNavBar from '../components/BottomNavBar';
import { Activity, ShieldCheck, Search, Download, Shield, Users, Globe, Zap, Database, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Admin() {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);

    if (!user) {
        return <Navigate to="/" />;
    }

    // Mock refreshing data
    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1500);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-midnight-dark text-slate-100 overflow-hidden font-display">
            
            <div className="hidden md:block">
                <Sidebar />
            </div>

            <main className="flex-1 flex flex-col h-full overflow-y-auto relative z-10 px-4 md:px-8 py-6 pb-24 md:pb-6 custom-scrollbar">
                
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-azure font-bold text-xs tracking-widest uppercase mb-2">
                             <Shield className="size-4" strokeWidth={2.5} />
                             Global Command center
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">System Intelligence</h2>
                        <p className="text-slate-400 text-sm md:text-base">Real-time macro-analysis of the Sentinel ecosystem.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="flex items-center glass-panel px-4 py-2.5 rounded-2xl group focus-within:ring-2 focus-within:ring-azure/30 transition-all w-full sm:w-64">
                            <Search className="text-slate-400 mr-2 size-5" />
                            <input 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-slate-500 w-full outline-none" 
                                placeholder="Search by Node ID or User..." 
                                type="text" 
                            />
                        </div>
                        <button className="glass-button text-white px-5 py-2.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2">
                            <Download className="size-4" /> Export Report
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                    
                    {/* Left & Middle Column: Map & System Health */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        
                        {/* Global Sentinel Map (Placeholder using advanced CSS gradients) */}
                        <div className="glass-card p-6 rounded-3xl relative overflow-hidden min-h-[350px] flex flex-col">
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <h3 className="text-white font-bold flex items-center gap-2"><Globe className="size-5 text-azure" /> Node Topology</h3>
                                <button onClick={handleRefresh} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <RefreshCw className={`size-4 text-slate-400 ${isRefreshing ? 'animate-spin text-azure' : ''}`} />
                                </button>
                            </div>
                            
                            {/* Abstract Map Visualization */}
                            <div className="absolute inset-0 top-16 bottom-6 mx-6 rounded-2xl bg-midnight border border-white/5 overflow-hidden flex items-center justify-center">
                                {/* Map Grid Lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                                
                                {/* Simulated Nodes */}
                                <div className="absolute top-[30%] left-[20%] group">
                                    <div className="size-3 rounded-full bg-azure animate-ping absolute opacity-50"></div>
                                    <div className="size-3 rounded-full bg-azure relative z-10 shadow-[0_0_15px_rgba(14,211,255,0.8)]"></div>
                                    <div className="opacity-0 group-hover:opacity-100 absolute top-4 -left-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap border border-white/10 transition-opacity">US-East-1 (Stable)</div>
                                </div>
                                
                                <div className="absolute top-[45%] left-[60%] group">
                                    <div className="size-3 rounded-full bg-emerald-400 animate-ping absolute opacity-50 delay-150"></div>
                                    <div className="size-3 rounded-full bg-emerald-400 relative z-10 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
                                    <div className="opacity-0 group-hover:opacity-100 absolute top-4 -left-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap border border-white/10 transition-opacity">EU-West-2 (Optimal)</div>
                                </div>

                                <div className="absolute bottom-[20%] right-[25%] group">
                                    <div className="size-3 rounded-full bg-amber-500 animate-ping absolute opacity-50 delay-300"></div>
                                    <div className="size-3 rounded-full bg-amber-500 relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
                                    <div className="opacity-0 group-hover:opacity-100 absolute top-4 -left-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap border border-white/10 transition-opacity">AP-South-1 (Warning: Latency)</div>
                                </div>
                                
                                {/* Connecting Lines (SVG Placeholder) */}
                                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                                    <path d="M 20% 30% Q 40% 10% 60% 45%" fill="transparent" stroke="#0ed3ff" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                                    <path d="M 60% 45% Q 70% 60% 75% 80%" fill="transparent" stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                                </svg>
                                <style>{`@keyframes dash { to { stroke-dashoffset: -1000; } }`}</style>

                                <div className="absolute bottom-4 left-4 flex gap-4 bg-midnight-dark/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                    <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-azure"></div><span className="text-[10px] uppercase font-bold text-slate-300">Auth Nodes</span></div>
                                    <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-emerald-400"></div><span className="text-[10px] uppercase font-bold text-slate-300">DB Shards</span></div>
                                    <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-amber-500"></div><span className="text-[10px] uppercase font-bold text-slate-300">Edge Cache</span></div>
                                </div>
                            </div>
                        </div>

                        {/* System Health Micro-charts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="glass-panel p-5 rounded-3xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 text-indigo-400">
                                        <Zap className="size-4" /> <span className="text-sm font-bold">Firebase Auth Latency</span>
                                    </div>
                                    <span className="text-lg font-black text-white">24ms</span>
                                </div>
                                {/* CSS-based micro chart */}
                                <div className="flex items-end gap-1 h-12 w-full">
                                    {[40, 60, 45, 80, 50, 65, 30, 70, 40, 90, 45, 60].map((h, i) => (
                                        <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-sm relative group hover:bg-indigo-400/50 transition-colors" style={{ height: `${h}%` }}>
                                             {/* Bar Glow */}
                                            <div className="absolute top-0 inset-x-0 h-1 bg-indigo-500 rounded-t-sm shadow-[0_0_5px_rgba(99,102,241,0.8)]"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500 uppercase">
                                    <span>-1h</span><span>Now</span>
                                </div>
                            </div>

                            <div className="glass-panel p-5 rounded-3xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <Database className="size-4" /> <span className="text-sm font-bold">Firestore Write Succ.</span>
                                    </div>
                                    <span className="text-lg font-black text-white">99.9%</span>
                                </div>
                                <div className="flex items-end gap-1 h-12 w-full">
                                    {[90, 85, 95, 98, 92, 99, 94, 97, 95, 96, 99, 100].map((h, i) => (
                                        <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm relative group hover:bg-emerald-400/50 transition-colors" style={{ height: `${h}%` }}>
                                            <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500 rounded-t-sm shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500 uppercase">
                                    <span>-1h</span><span>Now</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: User Management / Risk Profiles */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 rounded-3xl h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Users className="text-azure size-5" />
                                    <h3 className="text-white font-bold">User Risk Grid</h3>
                                </div>
                                <button className="text-xs text-azure font-bold hover:underline">View All</button>
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
                                {/* User Row 1 */}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border border-white/10">JW</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-azure transition-colors">Johnathan W.</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Global Admin</p>
                                        </div>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                                        <div className="size-1.5 rounded-full bg-emerald-400"></div>
                                        <span className="text-[10px] font-black uppercase text-emerald-400">Low</span>
                                    </div>
                                </div>

                                {/* User Row 2 */}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border border-white/10">EL</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Eleanor L.</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Contractor</p>
                                        </div>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-1">
                                        <div className="size-1.5 rounded-full bg-yellow-400"></div>
                                        <span className="text-[10px] font-black uppercase text-yellow-400">Medium</span>
                                    </div>
                                </div>

                                {/* User Row 3 */}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border border-white/10">SVC</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">API-Service-02</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Service Acct</p>
                                        </div>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 flex items-center gap-1 animate-pulse">
                                        <div className="size-1.5 rounded-full bg-red-500"></div>
                                        <span className="text-[10px] font-black uppercase text-red-500">Critical</span>
                                    </div>
                                </div>
                                
                                {/* User Row 4 */}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border border-white/10">MS</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Michael S.</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Auditor</p>
                                        </div>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                                        <div className="size-1.5 rounded-full bg-emerald-400"></div>
                                        <span className="text-[10px] font-black uppercase text-emerald-400">Low</span>
                                    </div>
                                </div>

                                {/* User Row 5 */}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border border-white/10">AP</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Alex P.</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Developer</p>
                                        </div>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-1">
                                        <div className="size-1.5 rounded-full bg-yellow-400"></div>
                                        <span className="text-[10px] font-black uppercase text-yellow-400">Medium</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </main>

            {/* Mobile Nav */}
            <div className="md:hidden">
                <BottomNavBar />
            </div>

        </div>
    );
}

export default Admin;
