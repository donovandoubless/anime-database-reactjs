import React from "react";

function pagination({ postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="pagination">
			{pageNumbers.map((number) => (
				<a onClick={() => paginate(number)} key={number} className="page">
					{number}
				</a>
			))}
		</div>
	);
}

export default pagination;
