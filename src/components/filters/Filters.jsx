import PropTypes from "prop-types";

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
		<section>
			<form className="container__form">
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
		</section>
	);
}

Filters.propTypes = {
	onChangeName: PropTypes.func.isRequired,
	onChangeGender: PropTypes.func.isRequired,
	onChangeSpecie: PropTypes.func.isRequired,
	onChangeStatus: PropTypes.func.isRequired,
	valueName: PropTypes.string.isRequired,
	valueGender: PropTypes.string.isRequired,
	valueSpecie: PropTypes.string.isRequired,
};

export default Filters;
