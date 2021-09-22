import React, { useState, useEffect } from "react";
import user from "../../../../../../../Assets/Admin/user.png";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import CommentsBlock from "simple-react-comments";
import axios from "axios";
import CoverPost from "../../CoverPost/index";
import Reports from "../../Reports/index";

import "./index.css";

function LyricsModal(props) {
	let [comments, setComments] = useState([]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modal1IsOpen, setIsOpen1] = useState(false);
	const [selectedLyric, setSelectedLyric] = useState({});
	const [selectedReport, setSelectedReport] = useState({});
	const [reportType, setReportType] = useState({});
	const [covers, setCovers] = useState([]);

	const authorname =
		sessionStorage.getItem("First_Name") +
		" " +
		sessionStorage.getItem("Last_Name");
	const author = sessionStorage.getItem("UserID");

	const AddComment = (text) => {
		console.log(text);
		setComments([
			...comments,
			{
				authorUrl: "#",
				avatarUrl:
					"https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
				createdAt: new Date(),
				fullName: authorname,
				text,
			},
		]);

		axios
			.post(`http://localhost:5000/api/v1/content/comment`, {
				lyric_id: props.selectedRecord.LyricId,
				comment: text,
				user: author,
			})
			.then((data) => {
				// alert(data.data.message);
				// console.log(data.data.message);
				// if (data.data.message === "Report added successfully") {
				//     Swal.fire({
				//         icon: "success",
				//         title: "Sent",
				//         text: "Reported Succesfully!",
				//     });
				// } else {
				//     Swal.fire({
				//         icon: "error",
				//         title: "Oops...",
				//         text: "Reporting Failed!",
				//     });
				// }
			});
	};

	const getComments = () => {
		axios
			.get(
				`http://localhost:5000/api/v1/content/getcomments/${props.selectedRecord.LyricId}`
			)
			.then((response) => {
				// console.log(response.data);
				let i;
				for (i = 0; i < response.data.length; i++) {
					comments[i] = {
						authorUrl: "1",
						avatarUrl: "2",
						createdAt: new Date(),
						fullName: response.data[i].Email,
						text: response.data[i].Comment,
					};
					// comments[i].authorUrl : "1",
					// comments[i].avatarUrl="1";
					// comments[i].createdAt=new Date();
					// comments[i].fullName="12";
					// comments[i].text=response.data[i].text;
				}

				// console.log("lenghddt"+response.data.length);
				// // console.log(response.data);
				// response.data.map((resp) => {
				// 	resp.createdAt = new Date();
				// 	console.log(response.data);
				// });
				// setComments();
				console.log(comments);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getComments();
	}, []);

	const closeModal = () => {
		setIsOpen(false);
	};

	const closeModal1 = () => {
		setIsOpen1(false);
	};
	const openModal = (e) => {
		// console.log(e.target.id);
		setSelectedLyric(e.target.id);
		setIsOpen(true);
		// console.log("sel" + selectedLyric);
	};

	const openModal1 = (e) => {
		// console.log(e.target.id);
		setSelectedReport(e.target.id);
		setReportType("lyric");
		setIsOpen1(true);
		// console.log("sel" + selectedLyric);
	};

	const loadCovers = async () => {
		axios
			.get("http://localhost:5000/api/v1/content/getcovers")
			.then((response) => {
				console.log(response);
				setCovers(response.data);
				//covers os the object
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		loadCovers();
	}, []);

	return (
		<div>
			<Modal
				isOpen={props.isOpen}
				onRequestClose={props.onRequestClose}
				contentLabel="Full Lyrics"
			>
				<section>
					<div className="hero-body pb-4 pt-4 hero-b-o ">
						<div className="columns top-bar">
							<div className="column is-8 is-align-self-center has-text-left">
								<p className="title is-3 mb-0">
									{props.selectedRecord.Title || "Song Title"}
								</p>
								<div className="has-text-left">
									<span className="label is-inline">Created on: </span>
									20th July 2021
								</div>
							</div>
							<div className="column is-4 has-text-centered">
								<img alt="Billing" className="hero-img mb-0" src={user}></img>
								<p>
									Author: {props.selectedRecord.Fname + " " || "User"}
									{props.selectedRecord.Lname || "Not Found"}
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="columns">
					<div className="column is-8">
						<div className="lyric-des">
							{/* <p className="title is-4">Preview:</p> */}
							<p>
								<pre>{props.selectedRecord.Lyrics}</pre>
							</p>
						</div>

						<div className="likeComment">
							<div class="columns">
								<div class="column like-comment">
									<div className="pt-1 pb-1 has-text-centered">
										<button className="likeBtn-inModal">
											<FaHeart className="mr-2" />
										</button>
										100 Likes
									</div>
								</div>
								<div class="column like-comment ">
									<div className="pt-1 pb-1 has-text-centered">
										<FaCommentAlt className="mr-2" />
										20 Comments
									</div>
								</div>
								<div class="column like-comment ">
									<div className="pt-1 pb-1 has-text-centered">
										<button
											className="column options-Btn mr-2"
											id={props.selectedRecord.LyricId}
											onClick={openModal1}
										>
											<FaEllipsisV /> Report
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="video-grid mt-5">
							<div class="card mb-2 card-img add-cover">
								<button
									className="postCoverBtn"
									id={props.selectedRecord.LyricId}
									onClick={openModal}
								>
									<h1>Post Cover</h1>
									<FaPlus className="mr-2" />
								</button>
							</div>
							{covers.map((cover) => (
								<div class="card mb-2 card-img">
									<div class="card-image">
										<iframe
											className="vid-if"
											src={cover.Url}
											allow="autoplay"
										></iframe>
									</div>
									<div className="pl-2 pr-2 pb-2 pt-2">
										<h1 className="title is-5 mb-0">{cover.Title}</h1>
										<p>
											{cover.Fname} {cover.Lname}
										</p>
										<button
											className="report-btn"
											id={props.selectedRecord.LyricId}
											onClick={openModal1}
										>
											Report
										</button>
									</div>
								</div>
							))}
							{/* <div class="card mb-2 card-img">
								<div class="card-image">
									<iframe
										className="vid-if"
										src="https://drive.google.com/file/d/1tvG6-r58dZBLeCzKIHpzypE7o3IbEeEH/preview"
										allow="autoplay"
									></iframe>
								</div>
								<div className="pl-2 pr-2 pb-2 pt-2">
									<h1 className="title is-5 mb-0">Amaya Kinivita</h1>
									<p>26.10.2021</p>
									
								</div>
							</div> */}
						</div>
					</div>

					<div className="column is-4">
						<div className="lyric-des mb-5">
							<p className="title is-4">Description:</p>
							<p>{props.selectedRecord.Description}</p>
						</div>
						<CommentsBlock
							comments={comments}
							isLoggedIn
							onSubmit={(text) => {
								if (text.length > 0) {
									// setComments([
									// 	...comments,
									// 	{
									// 		authorUrl: "#",
									// 		avatarUrl:
									// 			"https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
									// 		createdAt: new Date(),
									// 		fullName: "Bhagya Goonathilaka",
									// 		text,
									// 	},
									// ]);
									AddComment(text);
								}
							}}
							// onSubmit={AddComment(text)}
						/>
					</div>
				</div>
				<CoverPost
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					selectedLyric={selectedLyric}
				></CoverPost>

				<Reports
					isOpen={modal1IsOpen}
					onRequestClose={closeModal1}
					selectedReport={selectedReport}
					reportType={reportType}
				></Reports>
			</Modal>
		</div>
	);
}

export default LyricsModal;
