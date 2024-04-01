import PropTypes from "prop-types";
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
					<h3 className="detail__character--text-title">
						{characterDetailData.name}
					</h3>
					<p>Especie: {characterDetailData.specie === "Human" ? `👨🏻` : `👽`}</p>
					<p>Estado: {characterDetailData.status === "Dead" ? `☠️` : `🫀`}</p>
					<p>Origen: {characterDetailData.origin}</p>
					<p>Episodios: {characterDetailData.episodes}</p>
				</div>
			</div>
			<Link to="/" className="close">
				X
			</Link>
		</section>
	);
}
CharacterCardDetail.propTypes = {
	characterDetailData: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	specie: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	origin: PropTypes.string.isRequired,
	episodes: PropTypes.string.isRequired,
};

export default CharacterCardDetail;
