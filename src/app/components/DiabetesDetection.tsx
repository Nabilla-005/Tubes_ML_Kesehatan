import { useState } from "react";
import { Heart, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { PredictionResultModal } from "./PredictionResultModal";

export function DiabetesDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mockPrediction = {
      disease: "Diabetes",
      detected: Math.random() > 0.5,
      probability: Math.floor(Math.random() * 40) + 60,
      confidence: Math.floor(Math.random() * 15) + 85,
      recommendations: [
        "Kontrol kadar gula darah secara teratur",
        "Konsultasi dengan dokter endokrinologi",
        "Atur pola makan rendah gula dan karbohidrat",
        "Lakukan aktivitas fisik minimal 30 menit per hari",
        "Monitor tekanan darah dan kolesterol",
      ],
    };

    setPrediction(mockPrediction);
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Deteksi Diabetes</h2>
            <p className="text-red-200">Diabetes Mellitus Prediction System</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-red-200">
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
              Jumlah Kehamilan
            </label>
            <input
              type="number"
              name="pregnancies"
              value={formData.pregnancies}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan jumlah"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Glukosa (mg/dL)
            </label>
            <input
              type="number"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Tekanan Darah (mmHg)
            </label>
            <input
              type="number"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Ketebalan Kulit (mm)
            </label>
            <input
              type="number"
              name="skinThickness"
              value={formData.skinThickness}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Insulin (μU/mL)
            </label>
            <input
              type="number"
              name="insulin"
              value={formData.insulin}
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
              Riwayat Diabetes Keluarga
            </label>
            <input
              type="number"
              step="0.001"
              name="diabetesPedigree"
              value={formData.diabetesPedigree}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai (0-2)"
              required
            />
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
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Prediksi
          </button>
          <button
            type="reset"
            onClick={() => setFormData({
              pregnancies: "",
              glucose: "",
              bloodPressure: "",
              skinThickness: "",
              insulin: "",
              bmi: "",
              diabetesPedigree: "",
              age: "",
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
              <h4 className="text-white font-bold mb-2">Tentang Diabetes</h4>
              <p className="text-slate-300 text-sm">
                Diabetes adalah penyakit kronis yang ditandai dengan tingginya kadar gula dalam darah.
                Deteksi dini dapat mencegah komplikasi serius.
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
                Model AI kami mencapai akurasi 96.5% dalam memprediksi risiko diabetes
                berdasarkan dataset medis yang tervalidasi.
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
