import { Activity, Brain, TrendingUp, Database, BarChart3, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { icon: Activity, label: "Total Prediksi", value: "1,247", color: "from-cyan-500 to-blue-500" },
  { icon: TrendingUp, label: "Akurasi Model", value: "94.8%", color: "from-green-500 to-emerald-500" },
  { icon: Database, label: "Model Aktif", value: "5", color: "from-purple-500 to-pink-500" },
  { icon: Clock, label: "Riwayat Prediksi", value: "328", color: "from-orange-500 to-red-500" },
];

const chartData = [
  { name: "Jan", prediksi: 65 },
  { name: "Feb", prediksi: 78 },
  { name: "Mar", prediksi: 92 },
  { name: "Apr", prediksi: 105 },
  { name: "May", prediksi: 118 },
  { name: "Jun", prediksi: 142 },
];

const recentActivities = [
  { id: 1, type: "PCOS", result: "Tidak Terdeteksi", time: "5 menit lalu", accuracy: 92 },
  { id: 2, type: "Diabetes", result: "Terdeteksi", time: "12 menit lalu", accuracy: 95 },
  { id: 3, type: "Stroke", result: "Tidak Terdeteksi", time: "1 jam lalu", accuracy: 88 },
  { id: 4, type: "Stunting", result: "Terdeteksi", time: "2 jam lalu", accuracy: 91 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Selamat Datang di MedAI Predictor
          </h2>
          <p className="text-cyan-200 text-lg mb-6">
            Platform prediksi penyakit berbasis AI menggunakan algoritma Support Vector Machine
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Mulai Prediksi
            </button>
            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300">
              Lihat Tutorial
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Analitik Prediksi</h3>
              <p className="text-slate-400 text-sm">Grafik aktivitas 6 bulan terakhir</p>
            </div>
            <BarChart3 className="w-6 h-6 text-cyan-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrediksi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #06b6d4",
                  borderRadius: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="prediksi"
                stroke="#06b6d4"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrediksi)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Model Status */}
        <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Status Model AI</h3>
          <div className="space-y-4">
            {["PCOS", "Diabetes", "Stroke", "Stunting", "Jantung"].map((model, idx) => (
              <div key={model} className="flex items-center justify-between p-3 rounded-xl bg-slate-700/30">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">{model}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-400 text-sm font-semibold">
                    {[94, 96, 91, 93, 95][idx]}%
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Aktivitas Prediksi Terbaru</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Tipe</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Hasil</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Akurasi</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-slate-700/50 hover:bg-cyan-500/5 transition-colors"
                >
                  <td className="py-4 px-4 text-white font-medium">{activity.type}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        activity.result === "Terdeteksi"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {activity.result}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-cyan-400 font-semibold">{activity.accuracy}%</td>
                  <td className="py-4 px-4 text-slate-400">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
