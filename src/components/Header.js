import React from "react";
import pokedex from "../assets/img/pokedex.png";
import Tooltip from "@material-ui/core/Tooltip";

function Header({ loadHome }) {
	return (
		<header>
			<h1>
				My<strong>Anime</strong>Database
			</h1>
			<Tooltip title="Home (Top Airing Anime)" placement="bottom">
				<img onClick={loadHome} src={pokedex} alt="Home" />
			</Tooltip>
		</header>
	);
}

export default Header;
