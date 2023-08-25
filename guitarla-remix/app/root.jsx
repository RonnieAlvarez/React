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
	return (
    <Document>
      <Outlet/>
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
// export function ErrorBoundary({ error }) {
//   console.error(error);
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <p className="error">Oh no!</p>
//         <Scripts />
//       </body>
//     </html>
//   );
// }