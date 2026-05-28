from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model (Pastikan model_decision_tree.pkl ini sudah dilatih dengan dataset stroke)
model = joblib.load("model_decision_tree.pkl")

@app.route('/predict/stroke', methods=['POST'])
def predict_stroke():
    data = request.json

    # Menyesuaikan dengan 10 fitur dari gambar dataset (tanpa 'id' dan 'stroke')
    # PERHATIAN: Jika model Anda hanya menerima angka (numerik), pastikan data 
    # bertipe 'object' (seperti gender, work_type) sudah di-encode menjadi angka 
    # dari sisi frontend ATAU gunakan Pipeline pada model Anda.
    features = np.array([[
        data['gender'],                  # object
        float(data['age']),              # float64
        int(data['hypertension']),       # int64
        int(data['heart_disease']),      # int64
        data['ever_married'],            # object
        data['work_type'],               # object
        data['Residence_type'],          # object
        float(data['avg_glucose_level']),# float64
        float(data['bmi']),              # float64
        data['smoking_status']           # object
    ]])

    prediction = model.predict(features)[0]
    
    # Menghitung probabilitas
    probability = model.predict_proba(features)[0]
    confidence = round(max(probability) * 100, 2)

    return jsonify({
        "disease": "Stroke",
        "detected": bool(prediction),
        "confidence": confidence
    })

if __name__ == '__main__':
    app.run(debug=True)