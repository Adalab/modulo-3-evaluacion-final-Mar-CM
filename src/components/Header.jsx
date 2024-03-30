import titleImage from "../images/Rick_and_Morty.svg.png";

function Header() {
	return (
		<>
			<header className="title">
				<img src={titleImage} alt="Logo Ricky&Morty" />
			</header>
		</>
	);
}

export default Header;
