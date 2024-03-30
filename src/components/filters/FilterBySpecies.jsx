function FilterBySpecies({ onChangeSpecie, valueSpecie }) {
	const handleSpecies = (event) => {
		onChangeSpecie(event.target.value);
	};

	return (
		<div>
			<label htmlFor="species"></label>
			<select name="species" id="species" onChange={handleSpecies}>
				<option value="all">Todos</option>
				<option value="Human">Humano</option>
				<option value="Alien">Alien</option>
			</select>
		</div>
	);
}

export default FilterBySpecies;
