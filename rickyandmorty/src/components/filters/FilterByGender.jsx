function FilterByGender({ onChangeGender, valueGender }) {
	const handleChange = (event) => {
		onChangeGender(event.target.value);
	};

	return (
		<div>
			<label htmlFor="female">Mujer</label>
			<input
				type="radio"
				value="Female"
				name="gender"
				id="Female"
				checked={valueGender === "Female"}
				onChange={handleChange}
			/>
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
	);
}

export default FilterByGender;
