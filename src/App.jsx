import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import Personas from "./Pages/Personas";
import Somos from "./Pages/Somos";
import Header from "./Components/Header";

function AppRoutes() {
  const { user, checkingAuth } = useAuth();
  const location = useLocation();

  console.log("checkingAuth:", checkingAuth);
  console.log("user:", user);
  console.log("location:", location);

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Cargando...
      </div>
    );
  }

  if (!user) {
    // Ruta explícita /login para que funcione el login por separado
    if (location.pathname !== "/login") {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <Login />;
  }

  // Usuario autenticado:
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Navigate to="/Inicio" replace />} />
        <Route path="/" element={<Navigate to="/Inicio" replace />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Personas" element={<Personas />} />
        <Route path="/Somos" element={<Somos />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
