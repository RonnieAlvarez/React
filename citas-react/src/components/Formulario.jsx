/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Error from "./Error.jsx";
// eslint-disable-next-line react/prop-types
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const estilos = {
    contenedor: "md:w-1/2 lg:w-2/5 mx-5",
    titulo: "font-black text-3xl text-center",
    parrafo: "text-lg text-center mt-5 mb-10",
    formulario: "bg-white shadow-md rounded-lg py-10 px-5 mb-10",
    input: "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",
    alta: "border-2 w-full p-2 mt-2 rounded-md",
    submit: "bg-indigo-600 cursor-pointer w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 transition-all",
    editar: "bg-amber-500 cursor-pointer w-full p-3 text-stone uppercase font-bold rounded-lg hover:bg-amber-600 transition-all",
    label: "block text-gray-700 uppercase font-bold",
    span: "text-indigo-600 font-bold",
    error: "bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objetoPaciente = { nombre, propietario, email, fecha, sintomas };
    if (paciente.id) {
      // Editando nuevo registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) => (pacienteState.id === paciente.id ? objetoPaciente : pacienteState));
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Create a new registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className={estilos.contenedor}>
      <h2 className={estilos.titulo}>Seguimiento Pacientes</h2>
      <p className={estilos.parrafo}>
        Añadir Pacientes y <span className={estilos.span}>Administralos</span>
      </p>
      <form className={estilos.formulario} onSubmit={handleSubmit}>
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label htmlFor="mascota" className={estilos.label}>
            Nombre Mascotas
          </label>
          <input
            id="mascota"
            type="text"
            className={estilos.input}
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className={estilos.label}>
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className={estilos.input}
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className={estilos.label}>
            email
          </label>
          <input
            id="email"
            type="email"
            className={estilos.input}
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className={estilos.label}>
            alta
          </label>
          <input id="alta" type="date" className={estilos.alta} value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className={estilos.label}>
            sintomas
          </label>
          <textarea
            id="sintomas"
            className={estilos.input}
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit" value={paciente.id ? "Actualizar Paciente" : "Agregar Paciente"} className={paciente.id ? estilos.editar : estilos.submit} />
      </form>
    </div>
  );
};

export default Formulario;
