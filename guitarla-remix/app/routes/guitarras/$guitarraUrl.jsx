import { useState } from 'react';
import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl)
  if (guitarra.data.length === 0) {
    throw new Response('',{
      status: 404,
      statusText:"Guitarra No Encontrada"
    })
  }
    return guitarra
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitarra No Encontrada",
      description: "Guitarras, venta de guitarras, Guitarra no encontrada",
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    decription:`Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

function Guitarra() {
// por ser un hook de react solo aqui se puede usar 
// ya que las otrs funciones son del framwork de Remix

  const [cantidad, setCantidad] = useState(0)
  
  const guitarra = useLoaderData() 
  const {nombre,descripcion,imagen,precio} = guitarra.data[0].attributes
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <form className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            onChange={(e) => setCantidad(parseInt(e.target.value))}
            //onChange={(e) => setCantidad(+e.target.value)}
            // esta forma tambien lo convierte en numero
            id="cantidad"
          >
            <option value="">-- Seleccion --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra
