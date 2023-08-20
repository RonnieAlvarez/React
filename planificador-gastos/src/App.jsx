import { useState, useEffect } from 'react';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
	const [gastos, setGastos] = useState([]);

	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

	const [modal, setModal] = useState(false);
	const [animarModal, setanimarModal] = useState(false);

	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);

			setTimeout(() => {
				setanimarModal(true);
			}, 300);
		}
	}, [gastoEditar]);

	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});

		setTimeout(() => {
			setanimarModal(true);
		}, 300);
	};
	const guardarGasto = (gasto) => {
		gasto.id = generarId();
		gasto.fecha = Date.now();

		setGastos([...gastos, gasto]);
		setanimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};
	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
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
				/>
			)}
		</div>
	);
}

export default App;
