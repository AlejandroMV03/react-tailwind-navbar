import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Login() {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.error("Error de autenticación:", error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl px-10 py-12 w-full max-w-sm text-center text-white shadow-lg"
      >
    <motion.img
  src="/Google - Logo.png"
  alt="Logo"
  style={{ height: '200px' }}
  className="w-auto object-contain"
  animate={{ scale: [1, 1.05, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

       
        <h1 className="mt-24 text-center text-3xl font-light italic text-indigo-800 animate-fadeInDown">Hola, bienvenido a mi entorno de trabajo</h1>

        
        <motion.button
          onClick={loginWithGoogle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center justify-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200 mx-auto"
        >
          <FcGoogle size={20} />
          Iniciar sesión
        </motion.button>
      </motion.div>
    </div>
  );
}
