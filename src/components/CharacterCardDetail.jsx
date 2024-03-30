import { Link } from "react-router-dom";

function CharacterCardDetail({ characterDetailData }) {
	return (
		<section className="detail">
			<div className="detail__character">
				<div className="detail__character--picture">
					<img
						src={characterDetailData.picture}
						alt={characterDetailData.name}
					/>
				</div>
				<div className="detail__character--text">
					<h4>{`Nombre: ${characterDetailData.name}`}</h4>
					<p>{`Especie: ${characterDetailData.specie}`}</p>
					<p>{`Estado: ${characterDetailData.status}`}</p>
					<p>{`Genero: ${characterDetailData.gender}`}</p>
					<p>{`Episodios: ${characterDetailData.episodes}`}</p>
				</div>
			</div>
			<Link to="/" className="close">
				X
			</Link>
		</section>
	);
}

export default CharacterCardDetail;
