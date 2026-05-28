import {
  X,
  AlertTriangle,
  CheckCircle,
  Brain,
  TrendingUp,
  ArrowLeft,
  Download,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

interface PredictionResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  prediction: {
    disease: string;
    detected: boolean;
    probability: number;
    confidence: number;
    recommendations: string[];
  };
}

export function PredictionResultModal({
  isOpen,
  onClose,
  prediction,
}: PredictionResultModalProps) {
  if (!prediction) return null;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const safeProbability = Math.min(
    Math.max(prediction.probability, 0),
    100
  );

  const strokeDashoffset =
    circumference - (safeProbability / 100) * circumference;

  const handleSaveResult = () => {
    const resultText = `
HASIL DETEKSI ${prediction.disease}

Status:
${prediction.detected ? "TERDETEKSI" : "TIDAK TERDETEKSI"}

Probabilitas:
${prediction.probability}%

Confidence Score:
${prediction.confidence}%

Rekomendasi:
${prediction.recommendations
  .map((rec, index) => `${index + 1}. ${rec}`)
  .join("\n")}
`;

    const blob = new Blob([resultText], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `hasil_deteksi_${prediction.disease}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-white transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div
                className={`p-8 border-b border-white/10 bg-gradient-to-br ${
                  prediction.detected
                    ? "from-red-500/20 to-orange-500/20"
                    : "from-green-500/20 to-emerald-500/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-4 rounded-2xl ${
                      prediction.detected
                        ? "bg-red-500/20"
                        : "bg-green-500/20"
                    }`}
                  >
                    {prediction.detected ? (
                      <AlertTriangle className="w-12 h-12 text-red-400" />
                    ) : (
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    )}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      Hasil Prediksi {prediction.disease}
                    </h2>

                    <p className="text-slate-300">
                      Analisis AI berbasis Machine Learning
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Status */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold border ${
                      prediction.detected
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : "bg-green-500/20 text-green-400 border-green-500/30"
                    }`}
                  >
                    {prediction.detected
                      ? "PCOS TERDETEKSI"
                      : "PCOS TIDAK TERDETEKSI"}
                  </div>

                  <p className="text-slate-400 text-sm mt-3">
                    Berdasarkan hasil analisis data pemeriksaan pasien
                  </p>
                </div>

                {/* Circle */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <svg className="w-52 h-52 transform -rotate-90">
                      <circle
                        cx="104"
                        cy="104"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="14"
                        fill="none"
                        className="text-slate-700"
                      />

                      <motion.circle
                        cx="104"
                        cy="104"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="14"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.2 }}
                        className={
                          prediction.detected
                            ? "text-red-500"
                            : "text-green-500"
                        }
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-white">
                          {prediction.probability}%
                        </div>

                        <div className="text-sm text-slate-400 mt-1">
                          Probabilitas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confidence */}
                <div className="mb-8 p-5 rounded-2xl bg-slate-800/60 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Brain className="w-5 h-5" />

                      <span className="font-semibold">
                        AI Confidence Score
                      </span>
                    </div>

                    <span className="text-2xl font-bold text-white">
                      {prediction.confidence}%
                    </span>
                  </div>

                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.confidence}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />

                    <h3 className="font-bold text-white text-lg">
                      Rekomendasi Kesehatan
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {prediction.recommendations.map((rec, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-400 font-bold text-sm">
                            {idx + 1}
                          </span>
                        </div>

                        <span className="text-slate-300 leading-relaxed">
                          {rec}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-sm text-yellow-200 leading-relaxed">
                    <strong>Disclaimer:</strong> Hasil prediksi ini bersifat
                    informatif dan tidak menggantikan diagnosis medis
                    profesional. Konsultasikan dengan dokter untuk pemeriksaan
                    lebih lanjut.
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                  {/* Kembali */}
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Kembali
                  </button>

                  {/* Simpan */}
                  <button
                    onClick={handleSaveResult}
                    className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Simpan Hasil
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}