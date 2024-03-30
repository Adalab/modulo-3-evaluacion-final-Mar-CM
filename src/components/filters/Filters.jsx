import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByGender from "./FilterByGender";
import FilterByStatus from "./FilterByStatus";

function Filters({
	onChangeName,
	onChangeGender,
	onChangeSpecie,
	onChangeStatus,
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
			<FilterByStatus onChangeStatus={onChangeStatus} />
		</form>
	);
}

export default Filters;
