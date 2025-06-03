import { motion } from "framer-motion";

export default function Somos() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-6 text-white">

      {/* Fondo animado de olas */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      {/* Contenido centrado y animado */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-12">

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold font-montserrat drop-shadow-lg"
        >
          ¿Quiénes Somos?
        </motion.h1>

        {/* Equipo - ahora primero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300 font-montserrat"></h2>
          <p className="text-black/90 font-blod leading-relaxed">
            Somos un equipo diverso, apasionado y comprometido a crear un ambiente donde cada colaborador se sienta valorado y motivado para alcanzar su máximo potencial.
          </p>
        </motion.div>

        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300 font-montserrat">Nuestra Misión</h2>
          <p className="text-white/90 font-light leading-relaxed">
            Somos un equipo dedicado a fomentar un ambiente laboral inclusivo, seguro y lleno de oportunidades para que cada colaborador crezca y se desarrolle.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300 font-montserrat">Nuestra Visión</h2>
          <p className="text-white/90 font-light leading-relaxed">
            Ser referentes en Recursos Humanos, promoviendo innovación, colaboración y bienestar laboral para todos los miembros de nuestra organización.
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md text-left"
        >
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300 font-montserrat">Nuestros Valores</h2>
          <ul className="list-disc list-inside text-white/90 font-light space-y-1">
            <li>Integridad</li>
            <li>Respeto</li>
            <li>Transparencia</li>
            <li>Trabajo en equipo</li>
            <li>Innovación</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

