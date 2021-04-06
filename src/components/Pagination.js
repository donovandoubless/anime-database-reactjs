import React from "react";

function pagination({ postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="pagination">
			{pageNumbers.map((number) => (
				<button
					onClick={() => {
						paginate(number);
						window.scrollTo(0, 0);
					}}
					key={number}
					className="page"
				>
					{number}
				</button>
			))}
		</div>
	);
}

export default pagination;
