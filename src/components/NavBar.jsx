import { Link, useLocation } from "react-router-dom";

export default function NavBar({ user }) {
  const location = useLocation();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 mr-8">
            <img
              src="/737964_unid.png"
              alt="Logo"
              style={{ height: '100px' }}
              className="w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/inicio"
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 border-2 border-black
                ${location.pathname === "/inicio"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/50"
                }`}
            >
              Inicio
            </Link>
            <Link
              to="/datos"
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 border-2 border-black
                ${location.pathname === "/datos"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/50"
                }`}
            >
              Datos
            </Link>
            <Link
              to="/Estudios"
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 border-2 border-black
                ${location.pathname === "/Estudios"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/50"
                }`}
            >
              Carrera
            </Link>
          </div>
        </div>

        {/* Sección usuario */}
        {user && (
  <div className="flex flex-col items-center gap-1">
    {user.photoURL && (
      <img
        src={user.photoURL}
        alt="Foto usuario"
        className="w-10 h-10 rounded-full object-cover"
      />
    )}
    <p className="text-gray-800 font-semibold text-center">
      Hola, {user.displayName || user.email || "Usuario"}
    </p>
  </div>
        )}
      </div>
    </nav>
  );
}
