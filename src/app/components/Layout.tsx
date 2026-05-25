import { Outlet, NavLink } from "react-router";
import { Home, Activity, Heart, Brain, Baby, History, Info, Menu, X, Droplet } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Beranda", path: "/" },
  { icon: Activity, label: "Deteksi PCOS", path: "/pcos" },
  { icon: Droplet, label: "Deteksi Diabetes", path: "/diabetes" },
  { icon: Brain, label: "Deteksi Stroke", path: "/stroke" },
  { icon: Baby, label: "Deteksi Stunting", path: "/stunting" },
  { icon: Heart, label: "Deteksi Jantung", path: "/heart" },
  { icon: History, label: "Riwayat Prediksi", path: "/history" },
  { icon: Info, label: "Tentang", path: "/about" },
];

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="flex items-center justify-between px-6 h-16">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-cyan-500/10 text-cyan-400 transition-colors lg:hidden"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MedAI Predictor
              </h1>
              <p className="text-xs text-cyan-300/60">AI Healthcare Assistant</p>
            </div>
          </div>
          <div className="w-10" />
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-72 bg-slate-900/50 backdrop-blur-xl border-r border-cyan-500/20 transition-transform duration-300 z-30 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : ""}`} />
                  <span className="font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* AI Status Indicator */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-cyan-300">AI System Online</span>
            </div>
            <div className="text-xs text-slate-400">Model SVM Active</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-16 lg:pl-72 min-h-screen">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
