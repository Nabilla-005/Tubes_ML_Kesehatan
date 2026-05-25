import { Info, Brain, Target, Zap, Users, Award, Shield } from "lucide-react";

export function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Info className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Tentang MedAI Predictor</h2>
            <p className="text-cyan-200">Platform Prediksi Penyakit Berbasis Artificial Intelligence</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Tentang Aplikasi</h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          MedAI Predictor adalah platform prediksi penyakit yang menggunakan teknologi Artificial Intelligence
          dan Machine Learning berbasis algoritma Support Vector Machine (SVM). Aplikasi ini dirancang untuk
          membantu deteksi dini berbagai penyakit dengan akurasi tinggi.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Dengan antarmuka yang modern dan intuitif, MedAI Predictor memudahkan tenaga medis dan masyarakat
          umum untuk melakukan screening awal kondisi kesehatan secara cepat dan akurat.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-6">
          <div className="p-3 rounded-xl bg-purple-500/20 w-fit mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
          </div>
          <h4 className="text-white font-bold mb-2">AI Machine Learning</h4>
          <p className="text-slate-300 text-sm">
            Menggunakan algoritma Support Vector Machine (SVM) untuk prediksi akurat
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-6">
          <div className="p-3 rounded-xl bg-blue-500/20 w-fit mb-4">
            <Target className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="text-white font-bold mb-2">Akurasi Tinggi</h4>
          <p className="text-slate-300 text-sm">
            Tingkat akurasi hingga 96.5% berdasarkan validasi dataset medis
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6">
          <div className="p-3 rounded-xl bg-green-500/20 w-fit mb-4">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h4 className="text-white font-bold mb-2">Prediksi Cepat</h4>
          <p className="text-slate-300 text-sm">
            Hasil prediksi dalam hitungan detik dengan proses yang efisien
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 p-6">
          <div className="p-3 rounded-xl bg-orange-500/20 w-fit mb-4">
            <Users className="w-6 h-6 text-orange-400" />
          </div>
          <h4 className="text-white font-bold mb-2">User Friendly</h4>
          <p className="text-slate-300 text-sm">
            Antarmuka modern dan mudah digunakan untuk semua kalangan
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 p-6">
          <div className="p-3 rounded-xl bg-yellow-500/20 w-fit mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
          <h4 className="text-white font-bold mb-2">Multi Penyakit</h4>
          <p className="text-slate-300 text-sm">
            Deteksi PCOS, Diabetes, Stroke, Stunting, dan Jantung dalam satu platform
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 p-6">
          <div className="p-3 rounded-xl bg-indigo-500/20 w-fit mb-4">
            <Shield className="w-6 h-6 text-indigo-400" />
          </div>
          <h4 className="text-white font-bold mb-2">Data Aman</h4>
          <p className="text-slate-300 text-sm">
            Keamanan dan privasi data pasien terjamin dengan enkripsi
          </p>
        </div>
      </div>

      {/* Supported Predictions */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Jenis Prediksi yang Didukung</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
            <h4 className="text-white font-bold mb-2">1. Deteksi PCOS</h4>
            <p className="text-slate-300 text-sm mb-3">
              Polycystic Ovary Syndrome - Gangguan hormonal pada wanita usia reproduksi
            </p>
            <div className="text-cyan-400 font-semibold">Akurasi: 94.2%</div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30">
            <h4 className="text-white font-bold mb-2">2. Deteksi Diabetes</h4>
            <p className="text-slate-300 text-sm mb-3">
              Diabetes Mellitus - Penyakit kronis dengan kadar gula darah tinggi
            </p>
            <div className="text-cyan-400 font-semibold">Akurasi: 96.5%</div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30">
            <h4 className="text-white font-bold mb-2">3. Deteksi Stroke</h4>
            <p className="text-slate-300 text-sm mb-3">
              Stroke - Gangguan aliran darah ke otak yang dapat menyebabkan kerusakan permanen
            </p>
            <div className="text-cyan-400 font-semibold">Akurasi: 91.3%</div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30">
            <h4 className="text-white font-bold mb-2">4. Deteksi Stunting</h4>
            <p className="text-slate-300 text-sm mb-3">
              Stunting Balita - Gagal tumbuh pada anak akibat kekurangan gizi kronis
            </p>
            <div className="text-cyan-400 font-semibold">Akurasi: 93.7%</div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/30">
            <h4 className="text-white font-bold mb-2">5. Deteksi Penyakit Jantung</h4>
            <p className="text-slate-300 text-sm mb-3">
              Heart Disease - Kondisi yang memengaruhi struktur dan fungsi jantung
            </p>
            <div className="text-cyan-400 font-semibold">Akurasi: 95.8%</div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Teknologi yang Digunakan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Machine Learning", desc: "SVM Algorithm" },
            { name: "Python", desc: "Backend Processing" },
            { name: "React", desc: "Frontend Framework" },
            { name: "TensorFlow", desc: "AI Framework" },
            { name: "Scikit-learn", desc: "ML Library" },
            { name: "Pandas", desc: "Data Processing" },
            { name: "NumPy", desc: "Numerical Computing" },
            { name: "REST API", desc: "Integration Layer" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <div className="text-white font-bold mb-1">{tech.name}</div>
              <div className="text-slate-400 text-xs">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-6">
        <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Disclaimer Penting
        </h4>
        <p className="text-yellow-200 text-sm leading-relaxed">
          MedAI Predictor adalah alat bantu skrining awal dan tidak menggantikan diagnosis medis profesional.
          Hasil prediksi bersifat informatif dan harus dikonfirmasi melalui pemeriksaan medis lengkap oleh
          tenaga kesehatan yang berkompeten. Selalu konsultasikan kondisi kesehatan Anda dengan dokter.
        </p>
      </div>

      {/* Contact */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Butuh Bantuan?</h3>
        <p className="text-cyan-200 mb-6">
          Hubungi tim support kami untuk informasi lebih lanjut
        </p>
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
          Hubungi Support
        </button>
      </div>
    </div>
  );
}
