function FilterByName({ onChangeName, valueName }) {
	const handleChange = (event) => {
		onChangeName(event.target.value);
	};
	return (
		<>
			<div>
				<label htmlFor="name"></label>
				<input
					className="form__input"
					type="text"
					name="name"
					id="name"
					placeholder="Escribe el nombre de tu personaje"
					value={valueName}
					onChange={handleChange}
				/>
				<label />
			</div>
		</>
	);
}

export default FilterByName;
