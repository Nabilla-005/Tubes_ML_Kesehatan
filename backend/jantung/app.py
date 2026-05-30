from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

# =========================================================
# INISIALISASI FLASK
# =========================================================

app = Flask(__name__)
CORS(app)

# =========================================================
# LOAD MODEL
# =========================================================

model = joblib.load('heart_model.pkl')

# =========================================================
# ROUTE PREDIKSI JANTUNG
# =========================================================

@app.route('/predict-heart', methods=['POST'])
def predict_heart():

    try:
        # Ambil data JSON dari frontend
        data = request.json

        # Susun fitur sesuai urutan dataset
        fitur = np.array([[
            data['age'],
            data['sex'],
            data['cp'],
            data['trestbps'],
            data['chol'],
            data['fbs'],
            data['restecg'],
            data['thalach'],
            data['exang'],
            data['oldpeak'],
            data['slope'],
            data['ca'],
            data['thal']
        ]])

        # Prediksi model
        prediction = model.predict(fitur)

        probability = model.predict_proba(fitur)

        confidence = round(np.max(probability) * 100, 2)

        # Konversi hasil prediksi
        hasil = (
            "Terindikasi Penyakit Jantung"
            if prediction[0] == 1
            else "Tidak Terindikasi Penyakit Jantung"
        )

        # Return hasil ke frontend
        return jsonify({
            'prediction': hasil,
            'confidence': confidence
        })

    except Exception as e:
        return jsonify({
            'error': str(e)
        })

# =========================================================
# MENJALANKAN SERVER
# =========================================================

if __name__ == '__main__':
    app.run(debug=True)