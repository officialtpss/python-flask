
# 🏨 Hotel Price Estimation App

This is a simple web-based application to estimate hotel prices using a trained machine learning model. The app is built with a Flask backend and a minimal HTML frontend. The model is stored as a pickle file and served via a REST API.

---

## 📁 Project Structure

```
hotel-price-estimation/
├── client/              # Frontend HTML files
│   └── index.html
├── server/              # Flask backend
│   ├── app.py
│   └── ...
├── model/               # Pickle model file
│   └── banglore_home_prices_model.pickle 
└── README.md
```

---

## ⚙️ Requirements

- [Miniconda or Anaconda](https://docs.conda.io/en/latest/)
- Python 3.7.12 (via conda)

---

## 📦 Setting Up the Environment

1. **Clone the repository**:

```bash
git clone [https://github.com/officialtpss/python-flask](https://github.com/officialtpss/python-flask)
cd hotel-price-estimation
```

2. **Create the Conda environment**:

```bash
conda create -n hotel-price-estimator python=3.7.12
conda activate hotel-price-estimator
```

3. **Install required packages** (if you have `environment.yml`):

```bash
conda env create -f environment.yml
conda activate hotel-price-estimator
```

Or manually install the dependencies:

```bash
pip install -r server/requirements.txt
```

---

## 🚀 Running the App

1. **Start the Flask backend**:

```bash
cd server
python app.py
```

2. **Open the frontend**:

Open `client/index.html` in your browser. The HTML frontend sends requests to the Flask server to get price predictions.

---

## 🧠 Model

The trained model is stored as a pickle file in the `artifacts/` directory.

- `banglore_home_prices_model.pickle`: Trained machine learning model used for hotel price prediction.

The backend loads this model when the server starts and exposes a `/predict` endpoint to handle prediction requests.

---
conda
## 🔄 API Endpoint

- `POST /predict_home_price`

**Request JSON:**

```json
{
  "total_sqft": value1,
  "location": value2,
  ...
}
```

**Response JSON:**

```json
{
  "estimated_price": 123.45
}
```

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for more details.

---

## 🙌 Acknowledgments

- Flask for backend API
- Scikit-learn for machine learning
- HTML/CSS for frontend interface
