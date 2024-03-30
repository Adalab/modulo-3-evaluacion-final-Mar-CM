function FilterBySpecies() {
	return (
		<div>
			<label htmlFor="species"></label>
			<select name="species" id="species">
				<option value="all">Todos</option>
				<option value="human">Humano</option>
				<option value="alien">Alien</option>
			</select>
		</div>
	);
}

export default FilterBySpecies;
