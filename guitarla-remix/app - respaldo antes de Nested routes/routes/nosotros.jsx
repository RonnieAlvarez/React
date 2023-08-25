import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: "Venta de guitarras, blog de música"
  }
}
export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
  }]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique pellentesque auctor. In et tempor ipsum. Nulla facilisi.
            Sed auctor erat eget nulla tristique, euismod volutpat eros
            sagittis. 
          </p>
          <p>
            Donec vehicula libero ut hendrerit
            sagittis. Nullam auctor sem enim, in varius nunc pellentesque sit
            amet. Pellentesque facilisis auctor sem, vel pharetra nisl laoreet
            ut. Sed feugiat ultrices felis, at lacinia ipsum.
          </p>
        </h1>
      </div>
    </main>
  );
}

export default Nosotros
