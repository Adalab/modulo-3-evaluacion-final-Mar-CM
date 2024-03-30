import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByGender from "./FilterByGender";

function Filters({
	onChangeName,
	onChangeGender,
	onChangeSpecie,
	valueName,
	valueGender,
	valueSpecie,
}) {
	return (
		<form className="form">
			<FilterByName onChangeName={onChangeName} valueName={valueName} />
			<FilterBySpecies
				onChangeSpecie={onChangeSpecie}
				valueSpecie={valueSpecie}
			/>
			<FilterByGender
				onChangeGender={onChangeGender}
				valueGender={valueGender}
			/>
		</form>
	);
}

export default Filters;
