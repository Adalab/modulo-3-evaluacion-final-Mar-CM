import titleImage from "../images/Rick_and_Morty.svg.png";
import "../scss/App.scss";

function Header() {
	return (
		<>
			<div className="title">
				<img src={titleImage} alt="Logo Ricky&Morty" />
			</div>
		</>
	);
}

export default Header;
