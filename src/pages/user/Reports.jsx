import React from 'react';

const Reports = () => {
    const reports = [
        {
            name: "Breach_Audit_Q3_2024.pdf",
            date: "Oct 24, 2026",
            size: "4.2 MB",
            status: "READY",
            type: "pdf",
            isNew: true
        },
        {
            name: "Network_Scan_Sept_2026.pdf",
            date: "Sep 15, 2026",
            size: "2.8 MB",
            status: "READY",
            type: "pdf",
            isNew: false
        },
        {
            name: "Compliance_Check_Aug_2026.pdf",
            date: "Aug 30, 2026",
            size: "3.5 MB",
            status: "READY",
            type: "pdf",
            isNew: false
        },
        {
            name: "System_Log_Export.zip",
            date: "Aug 12, 2026",
            size: "12.1 MB",
            status: "ARCHIVED",
            type: "zip",
            isNew: false
        }
    ];

    return (
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">Report History</h2>
                        <p className="text-slate-400 text-lg">Manage and download your generated audit reports</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>Generate New Report</span>
                    </button>
                </div>

                {/* Main Glass Card Container */}
                <div className="glass overflow-hidden shadow-2xl rounded-3xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-8 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Report Name</th>
                                    <th className="px-8 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Date Generated</th>
                                    <th className="px-8 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Size</th>
                                    <th className="px-8 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {reports.map((report, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <span className={`material-symbols-outlined ${report.type === 'pdf' ? (report.isNew ? 'text-primary' : 'text-slate-400') : 'text-slate-400'}`}>
                                                    {report.type === 'pdf' ? 'picture_as_pdf' : 'folder_zip'}
                                                </span>
                                                <span className="text-white font-semibold">{report.name}</span>
                                                {report.isNew && (
                                                    <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-black">NEW</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-slate-300 font-medium">{report.date}</td>
                                        <td className="px-8 py-6 text-slate-300 font-medium">{report.size}</td>
                                        <td className="px-8 py-6">
                                            {report.status === 'READY' ? (
                                                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                                                    <span className="size-1.5 rounded-full bg-emerald-400"></span>
                                                    READY
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/10 text-slate-400 text-xs font-bold uppercase">
                                                    ARCHIVED
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            {report.status === 'READY' ? (
                                                <button className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 justify-end ml-auto group-hover:translate-x-1 transition-transform">
                                                    <span>Download</span>
                                                    <span className="material-symbols-outlined text-lg">download</span>
                                                </button>
                                            ) : (
                                                <button className="text-slate-400 hover:text-white font-bold flex items-center gap-2 justify-end ml-auto group-hover:translate-x-1 transition-transform">
                                                    <span>Restore</span>
                                                    <span className="material-symbols-outlined text-lg">unarchive</span>
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Info Card */}
                <div className="glass rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className="size-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">cloud_upload</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-base font-bold">Automatic Backups Enabled</p>
                            <p className="text-slate-400 text-sm">Your reports are automatically backed up to secure cloud storage every 30 days.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-14 h-8 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
