import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "../scss/App.scss";

import Header from "./Header.jsx";
import Filters from "./filters/Filters.jsx";
import CharactersList from "./CharactersList.jsx";
import CharacterCardDetail from "./CharacterCardDetail.jsx";

import getCharactersFromAPI from "../services/getCharactersFromAPI.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const [filterName, setFilterName] = useState("");
	const [filterGender, setFilterGender] = useState("");
	const [filterSpecie, setFilterSpecie] = useState("");

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

	const nameCharacterFilter = characters
		.filter((character) => {
			return character.name.toLowerCase().includes(filterName.toLowerCase());
		})
		.filter((character) => {
			return filterGender ? filterGender === character.gender : true;
		})
		.filter((character) => {
			return filterSpecie ? character.specie === filterSpecie : true;
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
								<Filters
									valueName={filterName}
									valueGender={filterGender}
									valueSpecie={filterSpecie}
									onChangeName={handleChangeName}
									onChangeGender={handleChangeGender}
									onChangeSpecie={handleChangeSpecie}
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
