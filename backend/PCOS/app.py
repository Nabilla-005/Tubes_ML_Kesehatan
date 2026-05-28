from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model dan fitur
model = joblib.load("model_svm_pcos.pkl")
selected_features = joblib.load("selected_features.pkl")


# Route home
@app.route("/")
def home():
    return "Backend PCOS aktif"


# Route prediksi
@app.route("/predict-pcos", methods=["POST"])
def predict_pcos():
    try:
        data = request.json

        # Mapping input dari React ke format dataset training
        input_data = {
            "Follicle No. (R)": float(data["follicleRight"]),
            "Follicle No. (L)": float(data["follicleLeft"]),
            "hair growth(Y/N)": 1 if data["hairGrowth"] == "ya" else 0,
            "Skin darkening (Y/N)": 1 if data["skinDarkening"] == "ya" else 0,
            "Weight gain(Y/N)": 1 if data["weightGain"] == "ya" else 0,
            "AMH(ng/mL)": float(data["amh"]),
            "Cycle(R/I)": 1 if data["menstrualCycle"] == "tidak-teratur" else 0,
            "Fast food (Y/N)": 1 if data["fastFoodConsumption"] == "ya" else 0,
            "LH(mIU/mL)": float(data["lh"]),
            "FSH/LH": float(data["fshLhRatio"]),
            "Hip(inch)": float(data["hipSize"]),
            "Cycle length(days)": float(data["cycleLength"]),
        }

        # Convert ke dataframe
        df = pd.DataFrame([input_data])

        # Ambil fitur sesuai training model
        df = df[selected_features]

        # Prediksi
        prediction = model.predict(df)[0]

        # Probabilitas
        probability = model.predict_proba(df)[0][1] * 100

        # Hasil response
        result = {
            "disease": "PCOS",
            "detected": bool(prediction),
            "probability": round(probability, 2),
            "confidence": round(probability, 2),
            "recommendations": [
                "Konsultasi dengan dokter spesialis kandungan",
                "Lakukan pemeriksaan hormon lebih lanjut",
                "Perbaiki pola makan dan olahraga",
                "Lakukan monitoring kesehatan reproduksi"
            ]
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)