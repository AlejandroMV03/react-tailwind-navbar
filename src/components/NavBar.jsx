export default function NavBar({ setVista }) {
  return (
    <nav className="bg-gradient-to-b from-indigo-700 to-purple-800 text-white p-4 flex flex-col gap-4 w-48 min-h-screen shadow-lg font-sans">
      <button
        onClick={() => setVista("inicio")}
        className="text-lg font-semibold hover:bg-white hover:text-indigo-700 transition px-4 py-2 rounded-md text-left"
      >
        Inicio
      </button>
      <button
        onClick={() => setVista("datos")}
        className="text-lg font-semibold hover:bg-white hover:text-purple-800 transition px-4 py-2 rounded-md text-left"
      >
        Ver Datos
      </button>
    </nav>
  );
}