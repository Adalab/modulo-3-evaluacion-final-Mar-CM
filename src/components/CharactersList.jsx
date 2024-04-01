import PropTypes from "prop-types";

import CharacterItem from "./CharacterItem";
import NotFound from "../images/rick-and-morty-rick-sanchez.gif";

function CharactersList({ characters, valueName }) {
	return (
		<section>
			<div>
				{characters.length === 0 && (
					<div className="not__found">
						<p className="not__found--text">
							No se ha encontrado &quot;{valueName}&quot;
						</p>
						<img className="not__found--img" src={NotFound} alt={valueName} />
					</div>
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
	valueName: PropTypes.string.isRequired,
};

export default CharactersList;
