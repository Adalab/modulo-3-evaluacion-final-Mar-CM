function FilterByGender({ onChangeGender, valueGender }) {
	const handleChange = (event) => {
		onChangeGender(event.target.value);
	};

	return (
		<div className="container__gender">
			<div className="container__gender--female">
				<label htmlFor="female">Mujer</label>
				<input
					type="radio"
					value="Female"
					name="gender"
					id="Female"
					checked={valueGender === "Female"}
					onChange={handleChange}
				/>
			</div>
			<div className="container__gender--male">
				<label htmlFor="male">Hombre</label>
				<input
					type="radio"
					value="Male"
					name="gender"
					id="Male"
					checked={valueGender === "Male"}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default FilterByGender;
