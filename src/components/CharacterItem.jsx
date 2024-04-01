import { Link } from "react-router-dom";

function CharacterItem({ characterItem }) {
	return (
		<li className="list__characters">
			<Link to={`/character/${characterItem.id}`}>
				<img src={characterItem.picture} alt={characterItem.name} />
				<h3 className="list__characters--title">{characterItem.name}</h3>
				<p className="list__characters--text">
					{characterItem.specie}
					{characterItem.specie === "Human" ? `🧍🏽` : `👽`}
				</p>
			</Link>
		</li>
	);
}

export default CharacterItem;
