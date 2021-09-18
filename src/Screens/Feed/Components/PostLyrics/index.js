import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function PostLyrics() {
	const author = sessionStorage.getItem("UserID");
	const [song_title, setTitle] = useState("");
	const [song_lyrics, setLyrics] = useState("");
	const [song_description, setDescription] = useState("");
	const [postData, setPostData] = useState([]);
	const history = useHistory();

	// constructor(props) {
	// 	super(props);
	// 	this.state = ({
	// 		movies: []
	// 	})
	// }

	// e.preventDefault(); //prevents refreshing on clicking submit (login)
	const PostLyrics = () => {
		axios
			.post(`http://localhost:5000/api/v1/user/inputlyrics`, {
				song_title: song_title,
				song_lyrics: song_lyrics,
				song_description: song_description,
				author: author,
			})
			.then(() => {
				// history.push("/login");
				Swal.fire({
					icon: "success",
					title: "Successfully Posted",
					text: "You can find your post in My Posts",
				}).then(() => {
					history.push("/Feed/MainPage");
				});
			});
	};

	// useEffect(() => {
	// 	axios.get(`http://localhost:5000/api/v1/user/getlyrics`).then((data) => {
	// 		// console.log(data.data.lyrics);
	// 		setPostData(data.data.lyrics);
	// 		// this.setState({ movies:data.data})
	// 		// let lyrics = lyricsList;
	// 		// console.log(lyrics[0].title);
	// 	});
	// }, []);

	// console.log("wohooooo", postData);

	// For a lyric post to created, there should be an input form to get details of what must be in the specific post. Let us call this form the “Post Lyrics” form.
	// Data to be inserted by the user to the “post lyrics” form.
	// •	Title of song
	// •	The lyrics
	// •	Special notes by the writer
	// •	Tags to help the song to be found when searches. (up to five tags)
	// •	Theme
	// •	Language
	// Search feature searches by username, song title, tags or theme, genre-input by singer.

	return (
		<div className="post-lyrics-container">
			<form className="post-lyrics-form" onSubmit={(e) => e.preventDefault()}>
				<br></br>
				<input
					type="text"
					placeholder="Title of your song"
					className="input-title"
					name="song_title"
					required
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<br></br>

				<textarea
					className="lyrics-textarea"
					placeholder="Lyrics"
					name="song_lyrics"
					required
					onChange={(e) => setLyrics(e.target.value)}
				></textarea>
				<br></br>

				<textarea
					type="textarea"
					className="lyrics-textarea"
					placeholder="Description: What is meant by the lyrics?"
					name="song_description"
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<br></br>

				<button
					type="submit"
					name="submitLyrics"
					className="lyrics-form-button"
					onClick={PostLyrics}
				>
					Post Lyrics
				</button>
			</form>
			{/* <table>
				<thead>
					<tr>
						<th>LyricId</th>
						<th>Title</th>
						<th>Lyric Content</th>
					</tr>
				</thead> */}

			{/* <tbody>
					{postData.map((val) => (
						<tr>
							<td>{val.LyricId}</td>
							<td>{val.Title}</td>
							<td>
								<pre>{val.Description}</pre>
							</td>
						</tr>
					))} */}

			{/* </tbody>
			</table> */}
		</div>
	);
}

export default PostLyrics;
