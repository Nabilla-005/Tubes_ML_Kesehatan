import { History, Download, Eye, Trash2, Filter } from "lucide-react";

const historyData = [
  {
    id: 1,
    date: "2026-05-22",
    time: "14:30",
    type: "PCOS",
    result: "Tidak Terdeteksi",
    probability: 32,
    confidence: 92,
  },
  {
    id: 2,
    date: "2026-05-22",
    time: "13:15",
    type: "Diabetes",
    result: "Terdeteksi",
    probability: 78,
    confidence: 95,
  },
  {
    id: 3,
    date: "2026-05-21",
    time: "16:45",
    type: "Stroke",
    result: "Tidak Terdeteksi",
    probability: 28,
    confidence: 88,
  },
  {
    id: 4,
    date: "2026-05-21",
    time: "10:20",
    type: "Stunting",
    result: "Terdeteksi",
    probability: 82,
    confidence: 91,
  },
  {
    id: 5,
    date: "2026-05-20",
    time: "15:00",
    type: "PCOS",
    result: "Terdeteksi",
    probability: 71,
    confidence: 89,
  },
  {
    id: 6,
    date: "2026-05-20",
    time: "11:30",
    type: "Diabetes",
    result: "Tidak Terdeteksi",
    probability: 35,
    confidence: 93,
  },
  {
    id: 7,
    date: "2026-05-19",
    time: "14:15",
    type: "Stroke",
    result: "Terdeteksi",
    probability: 68,
    confidence: 87,
  },
  {
    id: 8,
    date: "2026-05-19",
    time: "09:45",
    type: "Stunting",
    result: "Tidak Terdeteksi",
    probability: 25,
    confidence: 94,
  },
];

export function PredictionHistory() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <History className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Riwayat Prediksi</h2>
            <p className="text-cyan-200">Daftar semua prediksi yang telah dilakukan</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <div className="text-3xl font-bold text-white mb-1">1,247</div>
          <div className="text-slate-400">Total Prediksi</div>
        </div>
        <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <div className="text-3xl font-bold text-green-400 mb-1">892</div>
          <div className="text-slate-400">Tidak Terdeteksi</div>
        </div>
        <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <div className="text-3xl font-bold text-red-400 mb-1">355</div>
          <div className="text-slate-400">Terdeteksi</div>
        </div>
        <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
          <div className="text-3xl font-bold text-cyan-400 mb-1">92.1%</div>
          <div className="text-slate-400">Rata-rata Akurasi</div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 font-semibold hover:bg-cyan-500/30 transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <select className="px-4 py-2 rounded-xl bg-slate-800 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none">
            <option value="">Semua Tipe</option>
            <option value="pcos">PCOS</option>
            <option value="diabetes">Diabetes</option>
            <option value="stroke">Stroke</option>
            <option value="stunting">Stunting</option>
          </select>
        </div>
        <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>

      {/* History Table */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">ID</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Tanggal</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Waktu</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Tipe</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Hasil</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Probabilitas</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Confidence</th>
                <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-t border-slate-700/50 hover:bg-cyan-500/5 transition-colors ${
                    idx % 2 === 0 ? "bg-slate-900/20" : ""
                  }`}
                >
                  <td className="py-4 px-6 text-slate-300 font-mono">#{item.id.toString().padStart(4, "0")}</td>
                  <td className="py-4 px-6 text-white">{item.date}</td>
                  <td className="py-4 px-6 text-slate-300">{item.time}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-cyan-500/20 text-cyan-400">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.result === "Terdeteksi"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.result}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.result === "Terdeteksi"
                              ? "bg-gradient-to-r from-red-500 to-orange-500"
                              : "bg-gradient-to-r from-green-500 to-emerald-500"
                          }`}
                          style={{ width: `${item.probability}%` }}
                        />
                      </div>
                      <span className="text-white font-semibold text-sm w-12">{item.probability}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-cyan-400 font-semibold">{item.confidence}%</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-slate-400">Menampilkan 8 dari 1,247 data</div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
            Previous
          </button>
          <button className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold">1</button>
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all">2</button>
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all">3</button>
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
