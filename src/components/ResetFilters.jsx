import PropTypes from "prop-types";

function ResetFilters({ restartFilters }) {
	return (
		<section className="container__reset">
			<button className="container__reset--button" onClick={restartFilters}>
				Reset
			</button>
		</section>
	);
}
ResetFilters.propTypes = {
	restartFilters: PropTypes.func.isRequired,
};

export default ResetFilters;
