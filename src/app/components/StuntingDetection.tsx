import { useState } from "react";
import { Baby, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { PredictionResultModal } from "./PredictionResultModal";

export function StuntingDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/predict/stunting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            age: Number(formData.age),
            // male = 1, female = 0
            gender: formData.gender === "male" ? 1 : 0,
            height: Number(formData.height),
          }),
        }
      );

      const result = await response.json();

      const predictionResult = {
        disease: result.disease,
        detected: result.detected,
        confidence: result.confidence,
        probability: result.probability, // <- PROPERTI INI SEKARANG SUDAH DITAMBAHKAN ✅
        recommendations: result.detected
          ? [
              "Konsultasi dengan dokter anak atau ahli gizi",
              "Berikan asupan gizi seimbang",
              "Pantau pertumbuhan anak secara rutin",
              "Perhatikan sanitasi dan kebersihan lingkungan",
            ]
          : [
              "Pertumbuhan anak tergolong normal",
              "Tetap jaga pola makan sehat",
              "Lakukan kontrol pertumbuhan berkala",
            ],
      };

      setPrediction(predictionResult);
      setIsModalOpen(true);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              Deteksi Stunting Balita
            </h2>
            <p className="text-green-200">
              Child Stunting Detection System
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-200">
          <Sparkles className="w-5 h-5" />
          <span>
            AI Model menggunakan algoritma Logistic Regression
          </span>
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
          {/* Gender */}
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

          {/* Age */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Umur (bulan)
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
              max="60"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan umur dalam bulan (0-60)"
              required
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Tinggi Badan (cm)
            </label>
            <input
              type="number"
              step="0.1"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan tinggi badan"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Prediksi
          </button>

          <button
            type="reset"
            onClick={() =>
              setFormData({
                gender: "",
                age: "",
                height: "",
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
                Tentang Stunting
              </h4>
              <p className="text-slate-300 text-sm">
                Stunting adalah kondisi gagal tumbuh pada anak akibat
                kekurangan gizi kronis. Deteksi dan intervensi dini sangat
                penting untuk masa depan anak.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-green-500/10 backdrop-blur-xl border border-green-500/30 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
            <div>
              <h4 className="text-white font-bold mb-2">
                Akurasi Model
              </h4>
              <p className="text-slate-300 text-sm">
                Model AI kami mencapai akurasi 93.7% dalam mendeteksi
                stunting pada balita berdasarkan standar WHO.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Chart Info */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4">
          Standar Pertumbuhan WHO
        </h3>
        <p className="text-slate-300 mb-4">
          Deteksi stunting berdasarkan kurva pertumbuhan standar
          World Health Organization (WHO) dengan mempertimbangkan
          tinggi badan terhadap umur (TB/U).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <div className="text-green-400 font-bold mb-1">
              Normal
            </div>
            <div className="text-sm text-slate-300">
              TB/U ≥ -2 SD
            </div>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
            <div className="text-yellow-400 font-bold mb-1">
              Stunting Ringan
            </div>
            <div className="text-sm text-slate-300">
              -3 SD ≤ TB/U &lt; -2 SD
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
            <div className="text-red-400 font-bold mb-1">
              Stunting Berat
            </div>
            <div className="text-sm text-slate-300">
              TB/U &lt; -3 SD
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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