import React, { useState, useEffect } from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import close from "../../../../../../../../Assets/Admin/close.png";
import "./trendingPostindex.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import axios from "axios";
import LyricsModal from "../LyricsModal";

//pixel

const seeBtn = {
	width: "20vh",
	height: "5vh",
};
//rem

function Post() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [record, setRecord] = useState([]);
	const [selectedRecord, setSelectedRecord] = useState({});
	const user_id = sessionStorage.getItem("UserID");
	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = (e) => {
		console.log(e.target.id);
		record.forEach((rec) => {
			console.log(rec.LyricId + " --" + e.target.id);
			if (rec.LyricId.toString() === e.target.id.toString()) {
				console.log(rec);
				setSelectedRecord(rec);
				setIsOpen(true);
				return;
			}
		});
	};

	const likeFunction = (e) => {
		axios
			.post(`http://localhost:5000/api/v1/content/like`, {
				liked_post_id: e.target.id,
				number_of_likes: record[e.target.id - 1].likes + 1,
				// user_id: user,
			})
			.then(() => {
				loadLyrics();
			});
	};

	// var likebtnvar = document.getElementById("likebtn");
	// function Toggle() {
	// 	if (likebtnvar.style.color == "red") {
	// 		likebtnvar.style.color = "grey";
	// 	} else {
	// 		likebtnvar.style.color = "red";
	// 	}
	// }

	const loadLyrics = async () => {
		axios
			.get("http://localhost:5000/api/v1/content/getlyrics")
			.then((response) => {
				console.log(response);
				setRecord(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		loadLyrics();
	}, []);

	console.log(record);

	return (
		<div className="fullPost">
			<LyricsModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				selectedRecord={selectedRecord}
			/>
			<table>
				{record.map((lyrics) => (
					<div>
						<div className="postedBy">
							<div className="columns writer">
								<img src={user} />
								<div className="columns writerName-feed">
									{lyrics.Fname} {lyrics.Lname}
								</div>
							</div>
						</div>

						<div className="box postContent">
							<div className="tile is-ancestor">
								<div className="tile  is-vertical is-5">
									<div className="tile ">
										<div className="tile lyricBox is-parent is-vertical">
											<article className="tile is-child is-primary">
												<p className="title ">{lyrics.Title}</p>
												<p className="halfLyricSection">
													<FaQuoteLeft />
													{"  "}
													{lyrics.Preview}
													{"  "}
													<FaQuoteRight />
												</p>
											</article>
										</div>
									</div>
									<div className="tile is-parent column ">
										<div className="columns">
											<div className="column">
												<button
													className="seeBtn"
													id={lyrics.LyricId}
													onClick={openModal}
												>
													See lyrics
												</button>
											</div>

											<div className="column">
												<button
													className="column likeBtn"
													id={lyrics.LyricId}
													onClick={likeFunction}
												>
													{lyrics.likes} Likes <FaThumbsUp />
												</button>
											</div>
											{/* <div className="column likesCount">
												{lyrics.likes} Likes
											</div> */}
											<div className="column">
												<button className="column options-Btn">
													{/* <MdReport /> */}
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="tile is-parent">
									<article className="tile is-child is-success">
										<div className="content">
											<p className="title">Description</p>
											<p className="subtitle">{lyrics.Description}</p>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				))}
			</table>
		</div>
	);
}

export default Post;
