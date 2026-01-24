# archivo: train_pipelines.py
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib
from pathlib import Path

# =========================
# Datos de entrenamiento
# =========================
data_es = [
    ("Me encanta este producto", "Positivo"),
    ("Es una porquería", "Negativo"),
    ("Muy útil y fácil de usar", "Positivo"),
    ("No funciona bien", "Negativo"),
]

data_en = [
    ("I love this product", "Positive"),
    ("This is garbage", "Negative"),
    ("Very helpful and easy to use", "Positive"),
    ("It doesn't work well", "Negative"),
]

X_es, y_es = zip(*data_es)
X_en, y_en = zip(*data_en)

# =========================
# Crear pipelines
# =========================
pipeline_es = Pipeline([
    ('vect', CountVectorizer()),
    ('clf', MultinomialNB())
])
pipeline_es.fit(X_es, y_es)

pipeline_en = Pipeline([
    ('vect', CountVectorizer()),
    ('clf', MultinomialNB())
])
pipeline_en.fit(X_en, y_en)

# =========================
# Guardar modelos
# =========================
models_dir = Path(__file__).resolve().parent / "api" / "models"
models_dir.mkdir(parents=True, exist_ok=True)

joblib.dump(pipeline_es, models_dir / "pipeline_sentimientos_español.pkl")
joblib.dump(pipeline_en, models_dir / "pipeline_sentimientos_ingles.pkl")

print("✅ Modelos entrenados y guardados en:", models_dir)
