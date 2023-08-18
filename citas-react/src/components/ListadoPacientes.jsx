/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  const estilos = {
    parrafo: "text-lg text-center mt-5 mb-10",
    titulo: "font-black text-3xl text-center",
    contenedor: "md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll",
    span: "text-indigo-600 font-bold",
  };

  return (
    <div className={estilos.contenedor}>
      {pacientes && pacientes.length ? (
        <>
          <h2 className={estilos.titulo}>Listado Pacientes</h2>
          <p className={estilos.parrafo}>
            Administra tus <span className={estilos.span}>Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className={estilos.titulo}>No hay Pacientes</h2>
          <p className={estilos.parrafo}>
            Comienza agregando Pacientes <span className={estilos.span}>y aparecerán en este lugar.</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
