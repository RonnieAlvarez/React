// eslint-disable-next-line react/prop-types
const Error = ({ mensaje }) => {
  const estilos = {
    error: "bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",
  };
  return (
    <div className={estilos.error}>
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
