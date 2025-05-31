import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // El onAuthStateChanged en App detectará el login y actualizará el estado
      })
      .catch((error) => {
        console.error("Error de autenticación:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <p className="mb-4 text-xl">Inicia sesión para continuar</p>
      <button
        onClick={loginWithGoogle}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
}