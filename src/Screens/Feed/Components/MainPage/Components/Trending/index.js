import React from "react";
import Post from "./Components/Post";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/user/getlyrics`).then((data) => {
			// console.log(data.data.lyrics);
			setPostData(data.data.lyrics);
			// this.setState({ movies:data.data})
			// let lyrics = lyricsList;
			// console.log(lyrics[0].title);
		});
	}, []);

	console.log("wohooooo", postData);

	return (
		<div className="table-container trendingSection">
			<table className="table posts">
				{postData.map((val) => (
					<tr>
						<div>
							<Post key={val.LyricId} title={val.Title} />
						</div>
						{/* <td>{val.LyricId}</td>
							<td>{val.Title}</td>
							<td>
								<pre>{val.Description}</pre>
							</td> */}
					</tr>
				))}
				{/* <tr>
					<div>
						<Post />
					</div>
				</tr> */}
				{/* <tr>
					<div>
						<Post />
					</div>
				</tr>
				<tr>
					<div>
						<Post />
					</div>
				</tr> */}
			</table>
		</div>
	);
}

export default Trending;
