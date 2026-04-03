"use client";

import DashboardLayout from '../components/layout';

export const Settings = () => (
  <DashboardLayout>
    <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
    <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <p className="text-slate-600">Configure your application preferences here.</p>
    </div>
  </DashboardLayout>
);