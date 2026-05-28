import { useState } from "react";
import { Activity, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { PredictionResultModal } from "./PredictionResultModal";

export function PCOSDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const [formData, setFormData] = useState({
    follicleRight: "",
    follicleLeft: "",
    hairGrowth: "",
    skinDarkening: "",
    weightGain: "",
    amh: "",
    menstrualCycle: "",
    fastFoodConsumption: "",
    lh: "",
    fshLhRatio: "",
    hipSize: "",
    cycleLength: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-pcos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setPrediction(result);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      alert("Gagal terhubung ke backend");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500">
            <Activity className="w-8 h-8 text-white" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              Deteksi PCOS
            </h2>

            <p className="text-pink-200">
              Polycystic Ovary Syndrome Detection
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-pink-200">
          <Sparkles className="w-5 h-5" />

          <span>
            AI Model menggunakan algoritma Support Vector Machine (SVM)
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
          {/* Folikel kanan */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Jumlah Folikel Kanan
            </label>

            <input
              type="number"
              name="follicleRight"
              value={formData.follicleRight}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan jumlah"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 3 - 10 folikel
            </p>
          </div>

          {/* Folikel kiri */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Jumlah Folikel Kiri
            </label>

            <input
              type="number"
              name="follicleLeft"
              value={formData.follicleLeft}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan jumlah"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 3 - 10 folikel
            </p>
          </div>

          {/* Hair Growth */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Pertumbuhan Rambut
            </label>

            <select
              name="hairGrowth"
              value={formData.hairGrowth}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>

            <p className="text-xs text-yellow-400 mt-1">
              Pilih "Ya" jika mengalami pertumbuhan rambut berlebih
            </p>
          </div>

          {/* Skin Darkening */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Penggelapan Kulit
            </label>

            <select
              name="skinDarkening"
              value={formData.skinDarkening}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>

            <p className="text-xs text-yellow-400 mt-1">
              Gejala umum PCOS berupa kulit lebih gelap di area tertentu
            </p>
          </div>

          {/* Weight Gain */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Kenaikan Berat Badan
            </label>

            <select
              name="weightGain"
              value={formData.weightGain}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>

            <p className="text-xs text-yellow-400 mt-1">
              Kenaikan berat badan dapat menjadi indikator PCOS
            </p>
          </div>

          {/* AMH */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              AMH (ng/mL)
            </label>

            <input
              type="number"
              step="0.01"
              name="amh"
              value={formData.amh}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai AMH"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 1.0 - 4.0 ng/mL
            </p>
          </div>

          {/* Menstrual Cycle */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Siklus Menstruasi
            </label>

            <select
              name="menstrualCycle"
              value={formData.menstrualCycle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="teratur">Teratur</option>
              <option value="tidak-teratur">Tidak Teratur</option>
            </select>

            <p className="text-xs text-yellow-400 mt-1">
              Siklus tidak teratur sering terjadi pada penderita PCOS
            </p>
          </div>

          {/* Fast Food */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Konsumsi Fast Food
            </label>

            <select
              name="fastFoodConsumption"
              value={formData.fastFoodConsumption}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              required
            >
              <option value="">Pilih status</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>

            <p className="text-xs text-yellow-400 mt-1">
              Konsumsi fast food berlebih dapat meningkatkan risiko PCOS
            </p>
          </div>

          {/* LH */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              LH (mIU/mL)
            </label>

            <input
              type="number"
              step="0.01"
              name="lh"
              value={formData.lh}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan nilai LH"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 1.9 - 12.5 mIU/mL
            </p>
          </div>

          {/* FSH/LH */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Rasio FSH/LH
            </label>

            <input
              type="number"
              step="0.01"
              name="fshLhRatio"
              value={formData.fshLhRatio}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan rasio"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Rasio normal sekitar 1 : 1
            </p>
          </div>

          {/* Hip Size */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Ukuran Pinggul (inch)
            </label>

            <input
              type="number"
              step="0.1"
              name="hipSize"
              value={formData.hipSize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan ukuran (inch)"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 36 - 44 inch
            </p>
          </div>

          {/* Cycle Length */}
          <div>
            <label className="block text-cyan-300 font-medium mb-2">
              Panjang Siklus Menstruasi (hari)
            </label>

            <input
              type="number"
              name="cycleLength"
              value={formData.cycleLength}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Masukkan jumlah hari"
              required
            />

            <p className="text-xs text-cyan-400 mt-1">
              Normal: 21 - 35 hari
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Prediksi
          </button>

          <button
            type="reset"
            onClick={() =>
              setFormData({
                follicleRight: "",
                follicleLeft: "",
                hairGrowth: "",
                skinDarkening: "",
                weightGain: "",
                amh: "",
                menstrualCycle: "",
                fastFoodConsumption: "",
                lh: "",
                fshLhRatio: "",
                hipSize: "",
                cycleLength: "",
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
                Tentang PCOS
              </h4>

              <p className="text-slate-300 text-sm">
                PCOS adalah gangguan hormonal yang umum terjadi pada wanita usia
                reproduksi. Deteksi dini sangat penting untuk penanganan yang tepat.
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
                Model AI kami memiliki tingkat akurasi 96% berdasarkan validasi
                dengan data klinis dari berbagai rumah sakit.
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