import { motion } from "framer-motion";

const colaboradores = [
  
  {
    id: 1,
    nombre: "Alejandro Mex",
    puesto: "Desarrollador Web",
    departamento: "Tecnología",
    correo: "alejandromexxx@gmail.com",
    foto: "/Images/usuario.png"
  },
  
  {
    id: 2,
    nombre: "Aldo Echeverría",
    puesto: "Lider de Proyecto",
    departamento: "Innovación",
    correo: "00037413@red.unid.mx",
    foto: "/Images/usuario.png"
  }
];

export default function Personas() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 text-white overflow-hidden">

      {/* Fondo animado de olas */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 font-montserrat"
        >
          Directorio de Personas
        </motion.h1>

        {/* Tabla animada */}
        <div className="overflow-x-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
          <table className="w-full table-auto text-left text-white">
            <thead className="bg-white/20">
              <tr>
                <th className="p-4">Foto</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Puesto</th>
                <th className="p-4">Departamento</th>
                <th className="p-4">Correo</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map((colaborador, index) => (
                <motion.tr
                  key={colaborador.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-white/10 hover:bg-white/10 transition"
                >
                  <td className="p-4">
                    <img
                      src={colaborador.foto}
                      alt={colaborador.nombre}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-4">{colaborador.nombre}</td>
                  <td className="p-4">{colaborador.puesto}</td>
                  <td className="p-4">{colaborador.departamento}</td>
                  <td className="p-4">{colaborador.correo}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
