"use client";

import { useEffect, useState } from "react";

export default function AdminDashboardLanding() {
  const [users, setUsers] = useState(0);
  const [sales, setSales] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((v) => (v < 12800 ? v + 200 : 12800));
      setSales((v) => (v < 8600 ? v + 150 : 8600));
      setSatisfaction((v) => (v < 98 ? v + 2 : 98));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">AdminPro</h1>

        <button className="bg-blue-600 px-4 py-2 rounded">
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-24 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Powerful Admin Dashboard for Your Business
          </h1>

          <p className="text-gray-400 mt-4">
            Manage users, analytics and sales in one modern system.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded hover:scale-105 transition">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded hover:bg-white/10 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="rounded-xl overflow-hidden h-80 shadow-lg shadow-blue-500/10">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="px-6 md:px-24 py-10 grid md:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition shadow-lg shadow-blue-500/10">
          <h2 className="text-3xl font-bold">{users.toLocaleString()}+</h2>
          <p className="text-gray-400">Active Users</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition shadow-lg shadow-blue-500/10">
          <h2 className="text-3xl font-bold">{sales.toLocaleString()}</h2>
          <p className="text-gray-400">Sales Today</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition shadow-lg shadow-blue-500/10">
          <h2 className="text-3xl font-bold">{satisfaction}%</h2>
          <p className="text-gray-400">Satisfaction</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-24 py-20">

        <h2 className="text-3xl font-bold mb-8">Features</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Analytics",
              desc: "Real-time dashboards and insights",
            },
            {
              title: "User Control",
              desc: "Manage users and roles easily",
            },
            {
              title: "Security",
              desc: "Enterprise-grade protection",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/10"
            >
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-24 py-20 text-center">

        <h2 className="text-4xl font-bold">
          Start managing your business smarter
        </h2>

        <p className="text-gray-400 mt-3">
          Join thousands of companies using AdminPro.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded hover:scale-105 transition">
          Get Started
        </button>

      </section>

    </div>
  );
}