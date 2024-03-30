import "../scss/App.scss";
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

export default CharactersList;
