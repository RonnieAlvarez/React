/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from "@remix-run/react";
import imagen from '../../public/img/carrito.png'

function navegacion() {
  const location = useLocation();

  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link
        to="/guitarras"
        className={location.pathname === "/guitarras" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/carrito">
        <img src={imagen} alt="Carrito de compras"/>
      </Link>
    </nav>
  );
}

export default navegacion;
