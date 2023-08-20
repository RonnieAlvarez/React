import { useState, useEffect } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({
	setModal,
	animarModal,
	setanimarModal,
	guardarGasto,
	gastoEditar,
}) => {
	const [mensaje, setMensaje] = useState('');
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState('');
	const [categoria, setCategoria] = useState('');
	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setNombre(gastoEditar.nombre);
			setCantidad(gastoEditar.cantidad);
			setCategoria(gastoEditar.categoria);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ocultarModal = () => {
		setanimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if ([nombre, cantidad, categoria].includes('')) {
			setMensaje('Todos los campos son obligatorios');
			setTimeout(() => {
				setMensaje('');
			}, 2000);
			return;
		}
		guardarGasto({ nombre, cantidad, categoria });
	};
	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img
					src={CerrarBtn}
					alt='Boton de cerrar modal'
					onClick={ocultarModal}
				/>
			</div>
			<form
				onSubmit={handleSubmit}
				className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
				<legend>Nuevo Gasto</legend>
				{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
				<div className='campo'>
					<label htmlFor='nombre'>Nombre del Gasto</label>
					<input
						type='text'
						id='nombre'
						placeholder='Añade el nombre del Gasto'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className='campo'>
					<label htmlFor='cantidad'>Monto</label>
					<input
						type='number'
						id='cantidad'
						placeholder='Añade la Cantidad del Gasto ej. 350'
						value={cantidad}
						onChange={(e) => setCantidad(Number(e.target.value))}
					/>
				</div>

				<div className='campo'>
					<label htmlFor='categoria'>Categoria</label>
					<select
						id='categoria'
						value={categoria}
						onChange={(e) => setCategoria(e.target.value)}>
						<option value=''>--Seleccione--</option>
						<option value='ahorro'>Ahorro</option>
						<option value='comida'>Comida</option>
						<option value='casa'>Casa</option>
						<option value='varios'>Gastos Varios</option>
						<option value='ocio'>Entretenimiento</option>
						<option value='salud'>Salud</option>
						<option value='suscripciones'>Suscripciones</option>
					</select>
				</div>
				<input
					type='submit'
					value='Añadir Gasto'
				/>
			</form>
		</div>
	);
};

export default Modal;
