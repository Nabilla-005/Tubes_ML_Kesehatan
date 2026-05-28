from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("model_knn_diabetes.pkl")

@app.route('/predict/diabetes', methods=['POST'])
def predict_diabetes():
    data = request.json

    features = np.array([[
        float(data['pregnancies']),
        float(data['glucose']),
        float(data['bloodPressure']),
        float(data['skinThickness']),
        float(data['insulin']),
        float(data['bmi']),
        float(data['diabetesPedigree']),
        float(data['age']),
    ]])

    prediction = model.predict(features)[0]

    probability = model.predict_proba(features)[0]

    confidence = round(max(probability) * 100, 2)

    return jsonify({
        "disease": "Diabetes",
        "detected": bool(prediction),
        "confidence": confidence
    })

if __name__ == '__main__':
    app.run(debug=True)