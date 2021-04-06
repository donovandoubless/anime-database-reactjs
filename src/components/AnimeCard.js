import React from "react";

function AnimeCard({ anime }) {
	return (
		<article className="anime-card">
			<a href={anime.url} target="_blank" rel="noreferrer">
				<figure>
					<div className="score">
						<div className="score-btn">
							<h5>{anime.score}</h5>
						</div>
					</div>
					<img src={anime.image_url} alt="Anime" />
				</figure>
				<h4>{anime.title}</h4>
			</a>
		</article>
	);
}

export default AnimeCard;
