import { X, AlertTriangle, CheckCircle, Brain, TrendingUp } from "lucide-react";
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

export function PredictionResultModal({ isOpen, onClose, prediction }: PredictionResultModalProps) {
  if (!prediction) return null;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (prediction.probability / 100) * circumference;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${
                prediction.detected
                  ? "from-red-500/20 to-orange-500/20"
                  : "from-green-500/20 to-emerald-500/20"
              }`}>
                <div className="flex items-center gap-4 mb-2">
                  {prediction.detected ? (
                    <AlertTriangle className="w-12 h-12 text-red-400" />
                  ) : (
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      Hasil Prediksi {prediction.disease}
                    </h2>
                    <p className="text-slate-300">Powered by AI Machine Learning</p>
                  </div>
                </div>
              </div>

              {/* Result Status */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold ${
                    prediction.detected
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-green-500/20 text-green-400 border border-green-500/30"
                  }`}>
                    {prediction.detected ? "TERDETEKSI" : "TIDAK TERDETEKSI"}
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-slate-700"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className={prediction.detected ? "text-red-500" : "text-green-500"}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">
                          {prediction.probability}%
                        </div>
                        <div className="text-sm text-slate-400">Probabilitas</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confidence Score */}
                <div className="mb-8 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Brain className="w-5 h-5" />
                      <span className="font-semibold">AI Confidence Score</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{prediction.confidence}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.confidence}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-white text-lg">Rekomendasi Kesehatan</h3>
                  </div>
                  <ul className="space-y-3">
                    {prediction.recommendations.map((rec, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-cyan-400 font-bold text-sm">{idx + 1}</span>
                        </div>
                        <span className="text-slate-300">{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-sm text-yellow-200">
                    <strong>Disclaimer:</strong> Hasil prediksi ini bersifat informatif dan tidak menggantikan
                    diagnosis medis profesional. Silakan konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    Kembali
                  </button>
                  <button className="flex-1 px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all duration-300">
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
