const Filtros = ({ filtro, setFiltro }) => {
	return (
		<div className='filtros sombra contenedor'>
			<form>
				<div className='campo'>
					<label>Filtrar Gastos</label>
					<select
						value={filtro}
						onChange={(e) => setFiltro(e.target.value)}>
						<option value=''>--Todas las Categorias--</option>
						<option value='ahorro'>Ahorro</option>
						<option value='comida'>Comida</option>
						<option value='casa'>Casa</option>
						<option value='varios'>Gastos Varios</option>
						<option value='ocio'>Entretenimiento</option>
						<option value='salud'>Salud</option>
						<option value='suscripciones'>Suscripciones</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filtros;
