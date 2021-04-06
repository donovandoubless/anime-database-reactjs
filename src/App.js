import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import SidebarAiring from "./components/SidebarAiring";
import SideFooter from "./components/SideFooter";

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [topAiringAnime, SetTopAiringAnime] = useState([]);
	const [homeList, setHomeList] = useState([]);
	const [search, SetSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 10;

	// Fetch Sidebar results
	const GetTopAnime = async () => {
		const temp = await fetch(
			`https://api.jikan.moe/v3/top/anime/1/bypopularity`
		).then((res) => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	};

	const GetTopAiringAnime = async () => {
		const temp = await fetch(
			`https://api.jikan.moe/v3/top/anime/1/airing`
		).then((res) => res.json());

		SetTopAiringAnime(temp.top.slice(0, 5));
		SetAnimeList(temp.top);
		setHomeList(temp.top);
	};

	//Search Query
	const FetchAnime = async (query) => {
		const temp = await fetch(
			`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`
		).then((res) => res.json());

		SetAnimeList(temp.results);
	};

	const HandleSearch = (e) => {
		e.preventDefault();
		FetchAnime(search);
	};

	useEffect(() => {
		GetTopAnime();
		GetTopAiringAnime();
	}, []);

	//Pagination
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = animeList.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	const loadHome = () => {
		SetAnimeList(homeList);
		setCurrentPage(1);
	};

	return (
		<div className="App">
			<Header loadHome={loadHome} />
			<div className="content-wrap">
				<div className="sidebar">
					<SidebarAiring topAiringAnime={topAiringAnime} />
					<Sidebar topAnime={topAnime} />
				</div>
				<div className="main-content">
					<MainContent
						HandleSearch={HandleSearch}
						search={search}
						animeList={currentPosts}
						SetSearch={SetSearch}
					/>

					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={animeList.length}
						paginate={paginate}
					/>
				</div>
			</div>
			<SideFooter />
		</div>
	);
}

export default App;
