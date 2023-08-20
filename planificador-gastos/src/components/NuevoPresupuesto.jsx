import { useState } from 'react';
import Mensaje from './Mensaje';
const NuevoPresupuesto = ({
	presupuesto,
	setPresupuesto,
	setIsValidPresupuesto,
}) => {
	const [mensaje, setMensaje] = useState('');
	const handlePresupuesto = (e) => {
		e.preventDefault();
		if (!Number(presupuesto) || Number(presupuesto) < 0) {
			setMensaje('No es un presupuesto valido');
			return;
		}
		setMensaje('');
		setIsValidPresupuesto(true);
	};

	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form
				onSubmit={handlePresupuesto}
				className='formulario'>
				<div className='campo'>
					<label>Definir Presupuesto</label>
					<input
						id='inputCantidad'
						className='nuevo-presupuesto'
						type='number'
						placeholder='Añade tu Presupuesto'
						value={presupuesto}
						onFocus={() => setPresupuesto('')}
						onChange={(e) => {
							const inputValor = Number(e.target.value);
							if (!isNaN(inputValor)) {
								setPresupuesto(inputValor);
							} else {
								setPresupuesto('');
							}
						}}
						// onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input
					type='submit'
					value='Añadir'
				/>
				{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
			</form>
		</div>
	);
};

export default NuevoPresupuesto;
