import "../scss/App.scss";
import { Link } from "react-router-dom";

function CharacterItem({ characterItem }) {
	return (
		<li className="list__characters">
			<Link to={`/character/${characterItem.id}`}>
				<img src={characterItem.picture} alt={characterItem.name} />
				<h1>{characterItem.name}</h1>
				<p>{characterItem.specie}</p>
			</Link>
		</li>
	);
}

export default CharacterItem;