import PropTypes from "prop-types";

import CharacterItem from "./CharacterItem";

function CharactersList({ characters }) {
	return (
		<section>
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
