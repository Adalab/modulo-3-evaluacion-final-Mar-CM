function FilterByStatus({ onChangeStatus }) {
	const handleChange = (event) => {
		onChangeStatus(event.target.value);
	};

	return (
		<div>
			<label htmlFor="Alive">Vivo</label>
			<input
				name="status"
				type="checkbox"
				value="Alive"
				id="Alive"
				onChange={handleChange}
			/>
			<label htmlFor="Dead">Muerto</label>
			<input
				name="status"
				type="checkbox"
				value="Dead"
				id="Dead"
				onChange={handleChange}
			/>
			<label htmlFor="unknown">Desconocido</label>
			<input
				name="status"
				type="checkbox"
				value="unknown"
				id="unknown"
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByStatus;
