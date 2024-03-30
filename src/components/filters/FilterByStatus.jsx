function FilterByStatus({ onChangeStatus }) {
	const handleChange = (event) => {
		onChangeStatus(event.target.value);
	};

	return (
		<div className="container__status">
			<div className="container__status--alive">
				<label htmlFor="Alive">Vivo</label>
				<input
					name="status"
					type="checkbox"
					value="Alive"
					id="Alive"
					onChange={handleChange}
				/>
			</div>
			<div className="container__status--dead">
				<label htmlFor="Dead">Muerto</label>
				<input
					name="status"
					type="checkbox"
					value="Dead"
					id="Dead"
					onChange={handleChange}
				/>
			</div>
			<div className="container__status--unknown">
				<label htmlFor="unknown">Desconocido</label>
				<input
					name="status"
					type="checkbox"
					value="unknown"
					id="unknown"
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default FilterByStatus;
