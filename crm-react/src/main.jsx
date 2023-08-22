import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import NuevoCliente, {
	action as nuevoClienteAction,
} from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditarCliente, {
	loader as editarClienteLoader,
	action as editarClienteAction,
} from './pages/EditarCliente';
import { action as eliminarClienteAction } from './components/Cliente';

////////////////////////////////////////////////////////////////
//  							json-server --watch db.json
// 		Debe estar funcionando el JsonServer
// 		para simular la base de datos
//    https://www.npmjs.com/package/json-server
////////////////////////////////////////////////////////////////

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: clientesLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
				action: nuevoClienteAction,
				errorElement: <ErrorPage />,
			},
			{
				path: '/clientes/:clienteId/editar',
				element: <EditarCliente />,
				loader: editarClienteLoader,
				action: editarClienteAction,
				errorElement: <ErrorPage />,
			},
			{
				path: '/clientes/:clienteId/eliminar',
				action: eliminarClienteAction,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
