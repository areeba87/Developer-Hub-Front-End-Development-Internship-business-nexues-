// src/layouts/DashboardLayout.jsx
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Business Nexus</h2>
        <nav className="flex flex-col gap-2">
          <a href="/dashboard/investor" className="hover:underline">Investor Dashboard</a>
          <a href="/dashboard/entrepreneur" className="hover:underline">Entrepreneur Dashboard</a>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
