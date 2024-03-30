function ResetFilters({ restartFilters }) {
	return (
		<section className="container__reset">
			<button className="container__reset--button" onClick={restartFilters}>
				Reset
			</button>
		</section>
	);
}

export default ResetFilters;
