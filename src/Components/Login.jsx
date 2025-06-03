import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Ruta a donde redirigir después del login, si viene de otra ruta
  const from = location.state?.from?.pathname || "/Inicio";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-animated p-6 relative overflow-hidden">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-screen-xl text-center text-white px-4 relative z-10"
      >
        <motion.div
          className="flex flex-wrap justify-center text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold font-montserrat drop-shadow-lg tracking-wider"
        >
          {"Sitio De Recursos Humanos".split("").map((char, index) => {
            if (char === " ") {
              return (
                <span key={index} className="w-[30px] sm:w-[40px] md:w-[45px]" />
              );
            }
            const directions = [
              { x: -200, y: 0 },
              { x: 200, y: 0 },
              { x: 0, y: -200 },
              { x: 0, y: 200 },
            ];
            const randomDir = directions[Math.floor(Math.random() * directions.length)];

            return (
              <motion.span
                key={index}
                initial={{ ...randomDir, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.button
          onClick={loginWithGoogle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4 bg-white text-gray-800 text-lg font-medium px-8 py-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200 mx-auto"
        >
          <FcGoogle size={27} />
          <span className="text-lg">Iniciar sesión</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
