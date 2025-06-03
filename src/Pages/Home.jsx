import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-6 text-white">

      {/* Fondo animado de olas */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      {/* Contenido centrado y animado */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold font-montserrat drop-shadow-lg"
        >
          Bienvenido al portal de Recursos Humanos
        </motion.h1>

        {/* Mensaje principal */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-white/90 leading-relaxed"
        >
          En este espacio puedes conocer a las personas que forman parte de nuestra organización,
          acceder a información del equipo de RRHH y estar al tanto de todo lo que construimos juntos.
        </motion.p>

        {/* Lista con animación y estilo */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-left bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md space-y-4 text-white font-light"
        >
          {[
            "En el espacio de Personas, encontrarás el directorio de colaboradores.",
            "En el espacio de Somos, conocerás más sobre nuestra misión, visión y el equipo que acompaña tu camino laboral."
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              className="flex items-start gap-2"
            >
              <span className="text-yellow-300">•</span> {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
