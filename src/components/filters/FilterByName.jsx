function FilterByName({ onChangeName, valueName }) {
	const handleChange = (event) => {
		onChangeName(event.target.value);
	};
	return (
		<div className="container__name">
			<label htmlFor="name"></label>
			<input
				className="container__name--input"
				type="text"
				name="name"
				id="name"
				placeholder="Escribe el nombre de tu personaje"
				value={valueName}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByName;
