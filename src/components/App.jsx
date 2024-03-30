import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "../scss/App.scss";

import Header from "./Header.jsx";
import Filters from "./filters/Filters.jsx";
import CharactersList from "./CharactersList.jsx";
import CharacterCardDetail from "./CharacterCardDetail.jsx";
import ResetFilters from "./ResetFilters.jsx";

import getCharactersFromAPI from "../services/getCharactersFromAPI.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const [filterName, setFilterName] = useState("");
	const [filterGender, setFilterGender] = useState("");
	const [filterSpecie, setFilterSpecie] = useState("");
	const [filterStatus, setFilterStatus] = useState([]);

	useEffect(() => {
		getCharactersFromAPI().then((charactersData) => {
			setCharacters(charactersData);
		});
	}, []);

	const handleChangeName = (value) => {
		setFilterName(value);
	};

	const handleChangeGender = (value) => {
		setFilterGender(value);
	};

	const handleChangeSpecie = (value) => {
		setFilterSpecie(value);
	};

	const handleChangeStatus = (value) => {
		if (filterStatus.includes(value)) {
			setFilterStatus(filterStatus.filter((status) => status !== value));
		} else {
			setFilterStatus([...filterStatus, value]);
		}
	};

	const handledeletetFilters = () => {
		setFilterName("");
		setFilterGender("");
		setFilterSpecie("");
		setFilterStatus([]);
		deselectCheckbox();
		document.getElementById("species").selectedIndex = 0;
	};

	function deselectCheckbox() {
		const checkbox = document.getElementsByName("status");
		checkbox.forEach((item) => (item.checked = false));
	}

	const nameCharacterFilter = characters
		.filter((character) => {
			return character.name.toLowerCase().includes(filterName.toLowerCase());
		})
		.filter((character) => {
			return filterGender ? filterGender === character.gender : true;
		})
		.filter((character) => {
			if (filterSpecie !== "Human" && filterSpecie !== "Alien") {
				return true;
			} else {
				return filterSpecie ? character.specie === filterSpecie : true;
			}
		})
		.filter((character) => {
			if (filterStatus.length === 0) {
				return true;
			} else {
				return filterStatus.includes(character.status);
			}
		});

	const { pathname } = useLocation();
	const characterDetailRoute = matchPath("/character/:idCharacter", pathname);
	const idCharacter = characterDetailRoute
		? parseInt(characterDetailRoute.params.idCharacter)
		: null;
	const characterDetailData = characters.find((character) => {
		return character.id === idCharacter;
	});

	return (
		<>
			<Header />
			<main className="main">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<ResetFilters restartFilters={handledeletetFilters} />
								<Filters
									valueName={filterName}
									valueGender={filterGender}
									valueSpecie={filterSpecie}
									onChangeName={handleChangeName}
									onChangeGender={handleChangeGender}
									onChangeSpecie={handleChangeSpecie}
									onChangeStatus={handleChangeStatus}
								/>
								<CharactersList characters={nameCharacterFilter} />
							</>
						}
					/>
					<Route
						path="/character/:idCharacter"
						element={
							<CharacterCardDetail characterDetailData={characterDetailData} />
						}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
