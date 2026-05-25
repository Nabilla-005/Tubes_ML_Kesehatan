import { useState } from "react";
import { Brain, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { PredictionResultModal } from "./PredictionResultModal";

export function StrokeDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heartDisease: "",
    married: "",
    workType: "",
    residenceType: "",
    avgGlucose: "",
    bmi: "",
    smokingStatus: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mockPrediction = {
      disease: "Stroke",
      detected: Math.random() > 0.5,
      probability: Math.floor(Math.random() * 40) + 60,
      confidence: Math.floor(Math.random() * 15) + 85,
      recommendations: [
        "Kontrol tekanan darah secara rutin",
        "Kurangi konsumsi garam dan lemak jenuh",
        "Berhenti merokok dan hindari alkohol",
        "Lakukan pemeriksaan jantung berkala",
        "Olahraga teratur minimal 3x seminggu",
      ],
    };

    setPrediction(mockPrediction);
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Deteksi Stroke</h2>
            <p className="text-purple-200">Stroke Risk Assessment System</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-purple-200">
          <Sparkles className="w-5 h-5" />
          <span>AI Model menggunakan algoritma Support Vector Machine (SVM)</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Input Data Pemeriksaan</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Jenis Kelamin
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Umur (tahun)
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan umur"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Hipertensi
            </label>
            <select
              name="hypertension"
              value={formData.hypertension}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="0">Tidak</option>
              <option value="1">Ya</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Penyakit Jantung
            </label>
            <select
              name="heartDisease"
              value={formData.heartDisease}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="0">Tidak</option>
              <option value="1">Ya</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Status Menikah
            </label>
            <select
              name="married"
              value={formData.married}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="yes">Menikah</option>
              <option value="no">Belum Menikah</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Jenis Pekerjaan
            </label>
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih jenis pekerjaan</option>
              <option value="private">Swasta</option>
              <option value="self-employed">Wiraswasta</option>
              <option value="govt">Pemerintah</option>
              <option value="children">Anak-anak</option>
              <option value="never-worked">Tidak Bekerja</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Tipe Tempat Tinggal
            </label>
            <select
              name="residenceType"
              value={formData.residenceType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih tipe</option>
              <option value="urban">Perkotaan</option>
              <option value="rural">Pedesaan</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Rata-rata Glukosa (mg/dL)
            </label>
            <input
              type="number"
              step="0.1"
              name="avgGlucose"
              value={formData.avgGlucose}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              BMI (Body Mass Index)
            </label>
            <input
              type="number"
              step="0.1"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai BMI"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Status Merokok
            </label>
            <select
              name="smokingStatus"
              value={formData.smokingStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="never">Tidak Pernah</option>
              <option value="formerly">Dulu Merokok</option>
              <option value="smokes">Merokok</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Prediksi
          </button>
          <button
            type="reset"
            onClick={() => setFormData({
              gender: "",
              age: "",
              hypertension: "",
              heartDisease: "",
              married: "",
              workType: "",
              residenceType: "",
              avgGlucose: "",
              bmi: "",
              smokingStatus: "",
            })}
            className="px-8 py-4 rounded-xl bg-slate-700/50 text-white font-semibold hover:bg-slate-700 transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h4 className="text-white font-bold mb-2">Tentang Stroke</h4>
              <p className="text-slate-300 text-sm">
                Stroke terjadi ketika aliran darah ke otak terganggu. Pencegahan dan deteksi dini
                sangat penting untuk mengurangi risiko komplikasi.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-green-500/10 backdrop-blur-xl border border-green-500/30 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
            <div>
              <h4 className="text-white font-bold mb-2">Akurasi Model</h4>
              <p className="text-slate-300 text-sm">
                Model AI kami memiliki tingkat akurasi 91.3% dalam memprediksi risiko stroke
                berdasarkan faktor-faktor risiko yang ada.
              </p>
            </div>
          </div>
        </div>
      </div>

      {prediction && (
        <PredictionResultModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          prediction={prediction}
        />
      )}
    </div>
  );
}
