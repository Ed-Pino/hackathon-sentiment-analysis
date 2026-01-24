import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <div className="text-2xl font-bold text-green-400">SentimentAPI</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#features" className="hover:text-green-400">Características</a></li>
          <li><a href="#docs" className="hover:text-green-400">Documentación</a></li>
          <li><a href="#api" className="hover:text-green-400">API Reference</a></li>
          <li><a href="#swagger" className="hover:text-green-400">Swagger</a></li>
        </ul>
        <a
          href="#demo"
          className="bg-neon text-dark px-4 py-2 rounded hover:bg-neonHover font-semibold"
        >
          Demo API
        </a>
      </nav>

      {/* Hero Section */}
      <main className="px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          API de Análisis de Sentimiento
        </h1>
        <p className="text-lg mb-6">
          Entiende el Sentimiento de tus Clientes
        </p>

        <p className="text-muted max-w-2xl mx-auto">
          Clasificación automática de comentarios en{" "}
          <span className="text-green-400">Positivo</span>,{" "}
          <span className="text-green-400">Neutro</span> o{" "}
          <span className="text-green-400">Negativo</span> usando Machine Learning.
          Prioriza respuestas y mide la satisfacción en tiempo real.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
