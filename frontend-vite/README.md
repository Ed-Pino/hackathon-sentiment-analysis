# Frontend – Hackathon Sentiment Analysis

Frontend web del proyecto **Hackathon Sentiment Analysis**, desarrollado con **React + Vite + TailwindCSS**.  
Permite a los usuarios autenticarse y analizar texto para obtener su **sentimiento (positivo / negativo)** usando un servicio de Machine Learning.

---

## 🧱 Arquitectura General

```text
React (Frontend)
   ↓ HTTP (JSON)
FastAPI (ML Service)
   ↓
Modelo scikit-learn (sentiment analysis)


📂 Estructura del Proyecto

frontend-vite/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── api/
│   │   └── sentimentApi.js     # Llamadas HTTP al backend ML
│   ├── assets/
│   │   └── tailwind.css        # Estilos base Tailwind
│   ├── components/             # Componentes reutilizables
│   ├── pages/
│   │   ├── Dashboard.jsx       # Análisis de sentimientos
│   │   ├── Login.jsx           # Login de usuario
│   │   └── Register.jsx        # Registro de usuario
│   ├── routes/
│   │   └── ProtectedRoute.jsx  # Rutas protegidas
│   ├── App.jsx                 # Definición de rutas
│   ├── main.jsx                # Entry point React
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md



Tecnologuias Usadas:

React 18
Vite
Tailwind CSS
React Router DOM
Axios
JavaScript (ES6*)


⚙️ Instalación y Ejecución
1️⃣ Entrar a la carpeta frontend
cd frontend-vite

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar en modo desarrollo
npm run dev


📍 La aplicación estará disponible en:
👉 http://localhost:5173

🔌 Conexión con el Backend (FastAPI)

El frontend consume el endpoint de predicción:

POST http://127.0.0.1:8000/predict


Ejemplo de payload enviado:

{
  "text": "Me encanta este proyecto",
  "lang": "es"
}


Ejemplo de respuesta:

{
  "prediction": "Positivo",
  "probability": 0.99,
  "timestamp": "2026-01-19T18:42:44"
}

🧪 Flujo de Uso

Usuario inicia sesión o se registra

Accede al Dashboard

Ingresa texto a analizar

Frontend envía el texto al servicio FastAPI

Se muestra el resultado del sentimiento y su probabilidad

🛠 Estado Actual

✅ Estructura base completa

✅ Routing configurado

✅ Integración con FastAPI

✅ Tailwind configurado

🔄 Autenticación en desarrollo

🔄 Validaciones UI pendientes

👥 Equipo – Frontend

Frontend Developer: [Eduin Pino]

Proyecto Hackathon ONE

📌 Notas

Este frontend está pensado para ser independiente del backend Spring Boot

Se puede integrar posteriormente vía API Gateway o backend intermedio