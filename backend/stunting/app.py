from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model dan scaler
model = joblib.load("logistic_model_binary.pkl")
scaler = joblib.load("scaler_binary.pkl")


@app.route('/predict/stunting', methods=['POST'])
def predict_stunting():
    try:
        data = request.json

        # Ambil data dari frontend
        age = float(data['age'])
        gender = float(data['gender'])
        height = float(data['height'])

        # Format feature
        features = np.array([[
            age,
            gender,
            height
        ]])

        # Scaling menggunakan fitur asli sebelum diprediksi
        features_scaled = scaler.transform(features)

        # Prediksi menggunakan fitur yang sudah diskalakan
        prediction = model.predict(features_scaled)[0]

        # Probability
        probability = model.predict_proba(features_scaled)[0]

        # Confidence score
        confidence = round(max(probability) * 100, 2)

        # Return JSON sesuai format yang diminta
        return jsonify({
            "disease": "Stunting",
            "detected": bool(prediction),
            "probability": round(max(probability) * 100, 2),
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True)