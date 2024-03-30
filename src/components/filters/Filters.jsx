import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByGender from "./FilterByGender";

function Filters({ onChangeName, onChangeGender, valueName, valueGender }) {
	return (
		<form className="form">
			<FilterByName onChangeName={onChangeName} valueName={valueName} />
			<FilterBySpecies />
			<FilterByGender
				onChangeGender={onChangeGender}
				valueGender={valueGender}
			/>
		</form>
	);
}

export default Filters;
