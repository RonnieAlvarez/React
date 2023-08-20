import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
	const [gastos, setGastos] = useState(
		localStorage.getItem('gastos')
			? JSON.parse(localStorage.getItem('gastos'))
			: []
	);

	const [presupuesto, setPresupuesto] = useState(
		Number(localStorage.getItem('presupuesto')) ?? 0
	);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

	const [modal, setModal] = useState(false);
	const [animarModal, setanimarModal] = useState(false);

	const [gastoEditar, setGastoEditar] = useState({});

	const [filtro, setFiltro] = useState('');

	const [gastosFiltrados, setGastosFiltrados] = useState([]);

	// ---------------------- useState() --------------------//
	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);

			setTimeout(() => {
				setanimarModal(true);
			}, 300);
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
	}, [gastos]);

	useEffect(() => {
		localStorage.setItem('presupuesto', presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		if (filtro) {
			const gastosFiltrados = gastos.filter(
				(gasto) => gasto.categoria === filtro
			);
			setGastosFiltrados(gastosFiltrados);
		}
	}, [filtro, gastos]);

	useEffect(() => {
		const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
		if (presupuestoLS > 0) {
			setIsValidPresupuesto(true);
		}
	}, []);

	// --------------- FUNCIONES ------------------------------------//
	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});

		setTimeout(() => {
			setanimarModal(true);
		}, 300);
	};
	const guardarGasto = (gasto) => {
		if (gasto.id) {
			//actualizar gasto
			const gastosActualizados = gastos.map((gastoState) =>
				gastoState.id === gasto.id ? gasto : gastoState
			);
			setGastos(gastosActualizados);
			setGastoEditar({});
		} else {
			//gasto es nuevo
			gasto.id = generarId();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}

		setanimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};
	const eliminarGasto = (id) => {
		const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
		setGastos(gastosActualizados);
	};
	//****************************************************************** */
	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				setGastos={setGastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<Filtros
							filtro={filtro}
							setFiltro={setFiltro}
						/>
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
							filtro={filtro}
							gastosFiltrados={gastosFiltrados}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img
							src={IconoNuevoGasto}
							alt='Imagen nuevo gasto'
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setanimarModal={setanimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
