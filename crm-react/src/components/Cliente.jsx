/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';

export async function action({ params }) {
	await eliminarCliente(params.clienteId);
	return redirect('/');
}

function Cliente({ cliente }) {
	const navigate = useNavigate();
	const { nombre, empresa, email, telefono, id } = cliente;

	return (
		<tr className='border-b'>
			<td className='p-6 space-y-2'>
				<p className='text-2xl text-gray-800'>{nombre}</p>
				<p>{empresa}</p>
			</td>
			<td className='p-6'>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Email: </span>
					{email}
				</p>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Telefono: </span>
					{telefono}
				</p>
			</td>

			<td className='p-6 flex gap-3'>
				<button
					className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs hover:underline decoration-3  hover:border-b-6'
					type='button'
					onClick={() => navigate(`/clientes/${id}/editar`)}>
					Editar
				</button>
				<Form
					method='post'
					action={`/clientes/${id}/eliminar`}
					onSubmit={(e) => {
						if (!confirm('Desea eliminar este registro ?')) {
							e.preventDefault();
						}
					}}>
					<button
						className='text-red-600 hover:text-red-700 hover:underline decoration-3  hover:border-b-6 uppercase font-bold text-xs'
						type='submit'>
						Eliminar
					</button>
				</Form>
			</td>
		</tr>
	);
}
export default Cliente;
