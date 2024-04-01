import PropTypes from "prop-types";

import CharacterItem from "./CharacterItem";

function CharactersList({ characters, valueName }) {
	return (
		<section>
			<div>
				{characters.length === 0 && (
					<p className="not__found">No results found {valueName}</p>
				)}
			</div>
			<ul className="list">
				{characters.map((character) => {
					return <CharacterItem key={character.id} characterItem={character} />;
				})}
			</ul>
		</section>
	);
}
CharactersList.propTypes = {
	characters: PropTypes.object.isRequired,
};

export default CharactersList;
