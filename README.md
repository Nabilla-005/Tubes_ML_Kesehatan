# 🏥 Health Classification System Using Machine Learning

Proyek ini merupakan implementasi beberapa algoritma Machine Learning untuk melakukan klasifikasi berbagai penyakit dan kondisi kesehatan berdasarkan dataset medis. Sistem dikembangkan sebagai Tugas Besar Mata Kuliah Machine Learning TA 2025/2026.

## 👥 Tim Pengembang

| NIM | Nama |
|------|------|
| 15-2023-001 | Sintia Wati |
| 15-2023-005 | Nabilla Hasya Permana |
| 15-2023-014 | Matilde Ina Ola Dosinaeng |
| 15-2023-077 | Angelina Geronsiana Yudrikewati |
| 15-2023-137 | Asri Tanisha Rumapea |

---

## 📖 Deskripsi Proyek

Perkembangan teknologi Machine Learning memungkinkan analisis data kesehatan secara otomatis untuk membantu proses deteksi dini penyakit.

Pada proyek ini dilakukan pengembangan sistem klasifikasi kesehatan menggunakan lima algoritma Machine Learning:

- K-Nearest Neighbor (KNN)
- Support Vector Machine (SVM)
- Decision Tree
- Naïve Bayes
- Logistic Regression

Seluruh algoritma diuji pada beberapa dataset kesehatan untuk membandingkan performa dan menentukan model terbaik.

---

## 🎯 Tujuan

- Mengimplementasikan berbagai algoritma klasifikasi Machine Learning.
- Menerapkan preprocessing data kesehatan.
- Melakukan evaluasi performa model.
- Membandingkan hasil antar algoritma.
- Mengintegrasikan model ke dalam aplikasi berbasis web.

---

## 📊 Dataset

### 1. Diabetes Dataset
Digunakan untuk prediksi Diabetes.

Fitur utama:
- Pregnancies
- Glucose
- Blood Pressure
- Skin Thickness
- Insulin
- BMI
- Diabetes Pedigree Function
- Age

Target:
- 0 = Tidak Diabetes
- 1 = Diabetes

---

### 2. PCOS Dataset
Digunakan untuk prediksi Polycystic Ovary Syndrome (PCOS).

Fitur utama:
- Age
- Weight
- Height
- BMI
- Pulse Rate
- Blood Group
- Hormonal Indicators
- Follicle Measurements

Target:
- 0 = Non-PCOS
- 1 = PCOS

---

### 3. Stroke Dataset
Digunakan untuk prediksi risiko Stroke.

Fitur utama:
- Gender
- Age
- Hypertension
- Heart Disease
- Work Type
- BMI
- Average Glucose Level
- Smoking Status

Target:
- 0 = Tidak Stroke
- 1 = Stroke

---

### 4. Heart Disease Dataset
Digunakan untuk prediksi Penyakit Jantung.

Fitur utama:
- Age
- Sex
- Chest Pain Type
- Cholesterol
- Resting Blood Pressure
- Maximum Heart Rate
- Thalassemia

Target:
- 0 = Tidak Sakit
- 1 = Sakit

---

### 5. Stunting Dataset
Digunakan untuk deteksi Stunting pada balita.

Fitur utama:
- Umur (bulan)
- Jenis Kelamin
- Tinggi Badan (cm)

Target:
- 0 = normal
1 = severely stunted
2 = stunted
3 = tinggi
---

## 🛠️ Algoritma yang Digunakan

### K-Nearest Neighbor (KNN)
Digunakan untuk klasifikasi berdasarkan kedekatan data menggunakan Euclidean Distance.

### Support Vector Machine (SVM)
Menggunakan hyperplane optimal untuk memisahkan kelas dengan margin maksimum.

### Decision Tree
Membangun struktur pohon keputusan berdasarkan fitur terbaik.

### Naïve Bayes
Menggunakan pendekatan probabilitas berdasarkan Teorema Bayes.

### Logistic Regression
Menghasilkan probabilitas klasifikasi menggunakan fungsi sigmoid.

---

## ⚙️ Tahapan Machine Learning

### 1. Data Preprocessing

Meliputi:

- Data Cleaning
- Missing Value Handling
- Encoding Data Kategorikal
- Outlier Handling (IQR Method)
- Feature Scaling (StandardScaler)

### 2. Train-Test Split

Dataset dibagi menjadi:

- 80% Training Data
- 20% Testing Data

### 3. Model Training

Pelatihan model menggunakan Scikit-Learn.

### 4. Hyperparameter Tuning

Optimasi parameter model untuk memperoleh performa terbaik.

### 5. Evaluasi Model

Metrik yang digunakan:

- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix
- ROC Curve

---

## 💻 Teknologi yang Digunakan

### Backend
- Python
- Flask
- Scikit-Learn
- Pandas
- NumPy
- Joblib

### Frontend
- React.js
- Material UI

### Visualisasi
- Matplotlib
- Seaborn

---


## 📈 Hasil

Berdasarkan hasil eksperimen, setiap algoritma menunjukkan performa yang berbeda pada masing-masing dataset kesehatan.

Faktor yang memengaruhi performa:

- Karakteristik dataset
- Jumlah fitur
- Distribusi kelas
- Preprocessing
- Hyperparameter tuning

Model terbaik dipilih berdasarkan:

- Accuracy
- Precision
- Recall
- F1-Score

---

## 🔮 Pengembangan Selanjutnya

- Menambah dataset kesehatan lainnya.
- Implementasi Deep Learning.
- Deploy ke cloud platform.
- Integrasi dengan database pasien.
- Pengembangan aplikasi mobile.

---

## 📚 Mata Kuliah

**IFB-310 Machine Learning**  
Fakultas Teknologi Industri  
Institut Teknologi Nasional Bandung  
TA 2025/2026

---

## 📄 License

Project ini dibuat untuk keperluan akademik dan pembelajaran.
