import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Importa la instancia ya creada

import NavBar from "./components/NavBar";
import Datos from "./components/DATOS";
import Estudios from "./components/Estudios";
import Login from "./components/Login";
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (checkingAuth) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <div className="fixed inset-0 z-0">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <NavBar />
        <main className="relative z-10 flex justify-center items-start px-8 py-8">
          <div className="w-full max-w-6xl">
            <Routes>
              <Route
                path="/inicio"
                element={
                  <div className="TEexto1 animate-fadeInDown text-center">
                    ¡SEAN BIENVENIDOS A MI ENTORNO DE TRABAJO, SOY CRISTIAN ALEJANDRO MEX VILLACIS!
                  </div>
                }
              />
              <Route path="/datos" element={<Datos />} />
              <Route path="/Estudios" element={<Estudios />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
