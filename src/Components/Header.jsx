import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-purple-900/70 via-blue-900/70 to-cyan-900/70 backdrop-blur-sm p-4 text-white flex flex-col md:flex-row items-center justify-between">
      <nav className="flex flex-col md:flex-row justify-around items-center flex-1">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Recursos Humanos</h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <NavLink
              to="/Inicio"
              className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Personas"
              className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
            >
              Personas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Somos"
              className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
            >
              Somos
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Información del usuario */}
      {user && (
        <div className="flex items-center space-x-3 mt-4 md:mt-0 bg-white bg-opacity-20 backdrop-blur rounded-lg px-4 py-2">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col text-black">
            <span className="font-semibold text-sm">{user.displayName}</span>
            <button
              onClick={logout}
              className="text-xs text-red-400 hover:text-red-600 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
