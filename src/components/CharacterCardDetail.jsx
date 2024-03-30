import "../scss/App.scss";

function CharacterCardDetail({ characterDetailData }) {
	return (
		<div className="detail">
			<div>
				<img src={characterDetailData.picture} alt={characterDetailData.name} />
			</div>
			<div>
				<h4>{`Nombre: ${characterDetailData.name}`}</h4>
				<p>{`Especie: ${characterDetailData.specie}`}</p>
				<p>{`Estado: ${characterDetailData.status}`}</p>
				<p>{`Genero: ${characterDetailData.gender}`}</p>
				<p>{`Episodios: ${characterDetailData.episodes}`}</p>
			</div>
		</div>
	);
}

export default CharacterCardDetail;
