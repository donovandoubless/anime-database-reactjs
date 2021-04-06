import React from "react";
import pokedex from "../assets/img/pokedex.png";

function Header({ loadHome }) {
	return (
		<header>
			<h1>
				My<strong>Anime</strong>Database
			</h1>
			<img onClick={loadHome} src={pokedex} alt="Home" />
		</header>
	);
}

export default Header;
