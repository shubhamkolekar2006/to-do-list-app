# 🧠 Multimodal Physiological Feature Analysis

This project implements a **comprehensive, reproducible pipeline** for analyzing and interpreting **multimodal physiological signals** – EEG, Eye Tracking, GSR, and Facial features – for:
✔️ Participant classification
✔️ Clustering
✔️ Cognitive mapping

It combines **Machine Learning (PCA, LDA, Random Forest, Autoencoder)** and **Explainable AI (LIME)** to provide **robust analysis and interpretation**.

---

## 🚀 Project Workflow

1. 🧹 **Data Preprocessing & Cleaning** – Raw CSVs are cleaned and aligned.
2. 📉 **Dimensionality Reduction** – PCA & LDA extract key patterns and group differences.
3. 🌳 **Feature Importance** – Random Forest + LIME highlight top features.
4. 🤖 **Autoencoder** – Compresses & reconstructs features for unsupervised evaluation.
5. 👥 **Clustering** – Groups participants based on learned features.
6. 🧩 **Cognitive & Modality Mapping** – Links features to physiological domains & cognitive states.
7. 💾 **Model Saving** – All trained models & analyses are reproducible.

---

## 📂 File & Directory Organization

```
project/
│
├── data/
│   ├── EEG.csv
│   ├── GSR.csv
│   ├── EYE.csv, IVT.csv
│   ├── TIVA.csv
│   └── PSY.csv / ENG.csv   # supervised targets
│
├── notebooks/
│   ├── 01_preprocessing.ipynb
│   ├── 02_feature_cleaning.ipynb
│   ├── 03_pca_analysis.ipynb
│   ├── 04_lda_analysis.ipynb
│   ├── 05_autoencoder_feature_learning.ipynb
│   └── 06_feature_importance_analysis.ipynb
│
├── models/
│   ├── pca_components.pkl
│   ├── lda_model.pkl
│   ├── random_forest_model.pkl
│   ├── autoencoder_model.pt
│   ├── feature_importance.csv
│   └── lime_explanation_instance_0.csv/png
│
└── README.md
```

---

## 🛠️ Requirements

- Python 3.8+
- Libraries:

  ```bash
  pip install numpy pandas scikit-learn matplotlib joblib lime torch
  ```

(Or install one by one if preferred: `pip install numpy`, `pip install pandas`, etc.)

---

## 📖 Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```

2. Navigate to **notebooks/** and open Jupyter notebooks.

3. Follow stepwise workflow:

   - Preprocessing → Cleaning → PCA/LDA/Autoencoder/Feature Importance → Clustering

4. Inspect outputs in **models/** folder.

5. Interpret findings from:

   - 📊 PCA variance plots & projections
   - 📈 LDA classification & confusion matrix
   - 🤖 Autoencoder reconstructions
   - 🌳 Random Forest feature rankings
   - 🔍 LIME explanations
   - 👥 Clustering results (silhouette score & groups)

---

## 🏆 Main Results & Outputs

- **PCA**: Explained variance plots, 2D projections
- **LDA**: Accuracy, confusion matrix, group separation
- **Autoencoder**: Reconstruction error, latent features
- **Feature Importance**: Ranked features, domain mapping
- **LIME**: Instance-wise explanation (visuals & tables)
- **Clustering**: Silhouette score & participant groups

---

## 📌 Interpretation & Documentation

- 🧩 Modality & cognitive mapping shows domain contribution
- 📊 Outputs (plots, tables) saved at each step
- 📝 Notebooks contain step-by-step explanations

---
