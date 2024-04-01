import PropTypes from "prop-types";

function FilterBySpecies({ onChangeSpecie }) {
	const handleSpecies = (event) => {
		onChangeSpecie(event.target.value);
	};

	return (
		<div className="container__species">
			<label htmlFor="species"></label>
			<select
				className="container__species--select"
				name="species"
				id="species"
				onChange={handleSpecies}
			>
				<option value="all">Todos</option>
				<option value="Human">Humano</option>
				<option value="Alien">Alien</option>
			</select>
		</div>
	);
}

FilterBySpecies.propTypes = {
	onChangeSpecie: PropTypes.func.isRequired,
};

export default FilterBySpecies;
