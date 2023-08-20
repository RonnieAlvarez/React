import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';

const ControlPresupuesto = ({
	gastos,
	setGastos,
	presupuesto,
	setPresupuesto,
	setIsValidPresupuesto,
}) => {
	const [porcentaje, setPorcentaje] = useState(0);
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce(
			(total, gasto) => gasto.cantidad + total,
			0
		);
		const totalDisponible = presupuesto - totalGastado;
		//calcular el porcentaje de los gastos
		const nuevoPorcentaje = (
			((presupuesto - totalDisponible) / presupuesto) *
			100
		).toFixed(2);
		setDisponible(totalDisponible);
		setGastado(totalGastado);
		setTimeout(() => {
			setPorcentaje(nuevoPorcentaje);
		}, 500);
	}, [gastos, presupuesto]);

	const formatearCantidad = (cantidad) => {
		return cantidad.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	};
	const handleResetApp = () => {
		const resultador = confirm('Desea Reiniciar la App ?');
		if (resultador) {
			setGastos([]);
			setPresupuesto(0);
			setIsValidPresupuesto(false);
		}
	};
	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: porcentaje > 100 ? '#db2777' : '#3b82f6',
						trailColor: '#f5f5f5',
						textColor: porcentaje > 100 ? '#db2777' : '#3b82f6',
					})}
					value={porcentaje}
					text={`${porcentaje}% Gastado`}
				/>
			</div>
			<div className='contenido-presupuesto'>
				<button
					type='button'
					className='reset-app'
					onClick={handleResetApp}>
					Resetear App
				</button>
				<p>
					<span>Presupuesto:</span> {formatearCantidad(presupuesto)}
				</p>
				<p className={`${disponible < 0 ? 'negativo' : ''}`}>
					<span>Diponible:</span> {formatearCantidad(disponible)}
				</p>
				<p>
					<span>Gastado:</span> {formatearCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
