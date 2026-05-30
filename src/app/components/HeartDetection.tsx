import { useState } from "react";
import {
  Heart,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Activity,
} from "lucide-react";
import { PredictionResultModal } from "./PredictionResultModal";

export function HeartDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    chestPainType: "",
    restingBloodPressure: "",
    cholesterol: "",
    fastingBloodSugar: "",
    restingECG: "",
    maxHeartRate: "",
    exerciseAngina: "",
    oldpeak: "",
    stSlope: "",
    numVessels: "",
    thalassemia: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-heart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          age: Number(formData.age),
          sex: Number(formData.gender),
          cp: Number(formData.chestPainType),
          trestbps: Number(formData.restingBloodPressure),
          chol: Number(formData.cholesterol),
          fbs: Number(formData.fastingBloodSugar),
          restecg: Number(formData.restingECG),
          thalach: Number(formData.maxHeartRate),
          exang: Number(formData.exerciseAngina),
          oldpeak: Number(formData.oldpeak),
          slope: Number(formData.stSlope),
          ca: Number(formData.numVessels),
          thal: Number(formData.thalassemia),
        }),
      });

      const result = await response.json();

      setPrediction({
        disease: "Penyakit Jantung",
        detected: result.prediction.includes("Terindikasi"),
        confidence: result.confidence,
      });

      setConfidence(result.confidence);

      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/20 border border-rose-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 relative">
            <Heart className="w-8 h-8 text-white animate-pulse" />
            <div className="absolute inset-0 rounded-2xl bg-rose-400/30 animate-ping" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              Deteksi Penyakit Jantung
            </h2>
            <p className="text-rose-200">Heart Disease Prediction Using AI</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-rose-200">
          <Sparkles className="w-5 h-5" />
          <span>AI Model menggunakan algoritma Naive Bayes</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          Input Data Pemeriksaan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <option value="1">Laki-laki</option>
              <option value="0">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Tipe Nyeri Dada
            </label>
            <select
              name="chestPainType"
              value={formData.chestPainType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih tipe nyeri dada</option>
              <option value="0">Typical Angina (Nyeri Dada Khas)</option>
              <option value="1">Atypical Angina (Nyeri Dada Tidak Khas)</option>
              <option value="2">Non-Anginal Pain (Nyeri Non-Angina)</option>
              <option value="3">Asymptomatic (Tanpa Gejala)</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Tekanan Darah Istirahat (mmHg)
            </label>
            <input
              type="number"
              name="restingBloodPressure"
              value={formData.restingBloodPressure}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Contoh: 120"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Kolesterol (mg/dL)
            </label>
            <input
              type="number"
              name="cholesterol"
              value={formData.cholesterol}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai kolesterol"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Gula Darah Puasa
            </label>
            <select
              name="fastingBloodSugar"
              value={formData.fastingBloodSugar}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="1">&gt; 120 mg/dL (Tinggi)</option>
              <option value="0">≤ 120 mg/dL (Normal)</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Hasil Elektrokardiogram (ECG)
            </label>
            <select
              name="restingECG"
              value={formData.restingECG}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih hasil ECG</option>
              <option value="0">Normal</option>
              <option value="1">
                ST-T Wave Abnormality (Kelainan Gelombang ST-T)
              </option>
              <option value="2">
                Left Ventricular Hypertrophy (Hipertrofi Ventrikel Kiri)
              </option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Detak Jantung Maksimum (bpm)
            </label>
            <input
              type="number"
              name="maxHeartRate"
              value={formData.maxHeartRate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Contoh: 150"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Nyeri Dada Saat Olahraga
            </label>
            <select
              name="exerciseAngina"
              value={formData.exerciseAngina}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Oldpeak (Depresi ST)
            </label>
            <input
              type="number"
              step="0.1"
              name="oldpeak"
              value={formData.oldpeak}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Contoh: 1.5"
              required
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Kemiringan Segmen ST
            </label>
            <select
              name="stSlope"
              value={formData.stSlope}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih kemiringan</option>
              <option value="0">Upsloping (Naik)</option>
              <option value="1">Flat (Datar)</option>
              <option value="2">Downsloping (Turun)</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Jumlah Pembuluh Darah (0-3)
            </label>
            <select
              name="numVessels"
              value={formData.numVessels}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih jumlah</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Thalassemia
            </label>
            <select
              name="thalassemia"
              value={formData.thalassemia}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="0">Normal</option>
              <option value="1">Fixed Defect (Cacat Tetap)</option>
              <option value="2">Reversible Defect (Cacat Reversibel)</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Prediksi
          </button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                age: "",
                gender: "",
                chestPainType: "",
                restingBloodPressure: "",
                cholesterol: "",
                fastingBloodSugar: "",
                restingECG: "",
                maxHeartRate: "",
                exerciseAngina: "",
                oldpeak: "",
                stSlope: "",
                numVessels: "",
                thalassemia: "",
              })
            }
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
              <h4 className="text-white font-bold mb-2">
                Tentang Penyakit Jantung
              </h4>
              <p className="text-slate-300 text-sm">
                Penyakit jantung adalah kondisi yang memengaruhi struktur dan
                fungsi jantung. Deteksi dini sangat penting untuk mencegah
                komplikasi serius seperti serangan jantung.
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
                Model AI kami telah mencapai akurasi 80% dalam memprediksi risiko
                penyakit jantung berdasarkan data klinis tervalidasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Heart Health Analytics Card */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-6 h-6 text-rose-400" />
          <h3 className="text-xl font-bold text-white">Medical AI Analytics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/30">
            <div className="text-rose-400 text-sm mb-1">
              Faktor Risiko Utama
            </div>
            <div className="text-white font-bold">
              Kolesterol & Tekanan Darah
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
            <div className="text-blue-400 text-sm mb-1">Parameter Kritis</div>
            <div className="text-white font-bold">13 Indikator Kesehatan</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <div className="text-green-400 text-sm mb-1">Tingkat Akurasi</div>
            <div className="text-white font-bold">
              {confidence ? `${confidence}% Confidence` : "Waiting Prediction"}
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
