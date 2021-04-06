import React from "react";

function SidebarAiring({ topAiringAnime }) {
	return (
		<aside>
			<nav>
				<h3>Top Airing Anime</h3>
				{topAiringAnime.map((anime) => (
					<a
						href={anime.url}
						target="_blank"
						rel="noreferrer"
						key={anime.mal_id}
					>
						{anime.title}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default SidebarAiring;
