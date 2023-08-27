import { useState,useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
	LiveReload,
	Link
} from "@remix-run/react";
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';

export function meta() {
	return {
		charset: 'utf-8',
		title: 'GuitarLA-Remix',
		viewport: 'width=device-width, initial-scale=1',
	};
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: 'https://necolas.github.io/normalize.css/latest/normalize.css',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			croosorigin: 'true',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
		},
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
}

export default function App() {
// primero verifica si carrito en localstorage tiene algo y lo carga y si es
	// priemara vez lo inicia en un array vacio
	const carritoLS = typeof windows !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
	const [carrito, setCarrito] = useState(carritoLS) 

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])
	
	const agregarCarrito = (guitarra) => {
		if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
			// lo que sigue es iterar el arreglo para identificar el elemento duplicado
			const carritoActualizado = carrito.map((guitarraState) => {
				if (guitarraState.id === guitarra.id) {
					// actualizar cantidad
					guitarraState.cantidad = guitarra.cantidad
				}
				return guitarraState
			})
			setCarrito(carritoActualizado)
		} else {
			setCarrito([...carrito,guitarra])
		}
	}
	const actualizarCantidad = (guitarra) => {
		const carritoActualizado = carrito.map((guitarraState) => {
			if (guitarraState.id === guitarra.id) {
				guitarraState.cantidad= guitarra.cantidad
			}
			return guitarraState
		})
		setCarrito(carritoActualizado)
	}
	const eliminarGuitarra = (id) => { 
		const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id)
		setCarrito(carritoActualizado)
	}
		
	return (
    <Document>
			<Outlet
				context={{
					agregarCarrito,
					carrito,
					actualizarCantidad,
					eliminarGuitarra
				}}
			/>
    </Document>
  );
}

function Document({ children }) {
	return (
		<html lan='es'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
				<Scripts />
				<LiveReload/>
			</body>
		</html>
	);
}


export function ErrorBoundary({error}) {
	return (
    <Document>
      <p className="error"> Something went worng !!</p>
      <p className="error"> We are already workink on fixing it </p>
      <Link className="error-enlace" to="/">
        {" "}
        "Regresar a la página principal"
      </Link>
    </Document>
  );
}
