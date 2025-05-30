import { useState } from "react";
import NavBar from "./components/NavBar";
import Datos from "./components/DATOS";
import './index.css';


function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div className="flex min-h-screen bg-animated">
  <NavBar setVista={setVista} />
  <main className="flex-1 p-8">
    {vista === "inicio" && (
      <div className="TEexto1">
        ¡SEAN BIENVENIDOS A MI ENTORNO DE TRABAJO, SOY CRISTIAN ALEJANDRO MEX VILLACIS!
      </div>
    )}
    {vista === "datos" && <Datos />}
  </main>
</div>
  );
}

export default App;