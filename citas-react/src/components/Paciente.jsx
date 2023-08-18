/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar ese paciente ? ");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  const estilos = {
    pacientes: "mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl",
    nombre: "font-bold mb-3 text-gray-700 uppercase",
    editar: "py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold uppercase",
    borrar: "py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold uppercase",
    divButton: "flex justify-between mt-10",
  };
  return (
    <div className={estilos.pacientes}>
      <p className={estilos.nombre}>
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className={estilos.nombre}>
        Propietario: <span className="font-normal normal-case"> {propietario}</span>
      </p>

      <p className={estilos.nombre}>
        Email: <span className="font-normal normal-case"> {email}</span>
      </p>

      <p className={estilos.nombre}>
        Fecha Alta: <span className="font-normal normal-case"> {fecha}</span>
      </p>

      <p className={estilos.nombre}>
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className={estilos.divButton}>
        <button type="button" className={estilos.editar} onClick={() => setPaciente(paciente)}>
          Editar
        </button>
        <button type="button" className={estilos.borrar} onClick={handleEliminar}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
