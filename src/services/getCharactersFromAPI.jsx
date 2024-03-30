const getCharactersFromAPI = () => {
	return fetch("https://rickandmortyapi.com/api/character")
		.then((response) => response.json())
		.then((data) => {
			const charactersInput = data.results.map((character) => {
				return {
					id: character.id,
					name: character.name,
					picture: character.image,
					specie: character.species,
					status: character.status,
					gender: character.gender,
					origin: character.origin.name,
					episodes: character.episode.length,
				};
			});
			return charactersInput;
		});
};

export default getCharactersFromAPI;
