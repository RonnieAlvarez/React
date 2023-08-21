/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas.jsx';
import { monedas } from '../data/monedas.js';
import Error from './error.jsx';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color 0.3s ease;
	margin-top: 30px;
	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;
const Formulario = ({ setMonedas }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
	const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas(
		'Elige tu CriptoMoneda',
		criptos
	);

	useEffect(() => {
		const consultarApi = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
			const respuesta = await fetch(url);
			const resultado = await respuesta.json();

			const arrayCriptos = resultado.Data.map((cripto) => {
				const objeto = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName,
				};
				return objeto;
			});
			setCriptos(arrayCriptos);
		};
		consultarApi();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if ([moneda, criptoMoneda].includes('')) {
			setError(true);
			return;
		}
		setError(false);
		setMonedas({
			moneda,
			criptoMoneda,
		});
	};
	return (
		<>
			{error && <Error>Todos los Campos son obligatorios</Error>}

			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptoMonedas />

				<InputSubmit
					type='submit'
					value='Cotizar'
				/>
			</form>
		</>
	);
};

export default Formulario;
