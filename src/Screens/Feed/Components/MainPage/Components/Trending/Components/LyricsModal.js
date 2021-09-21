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

import "./index.css";

function LyricsModal(props) {
	const [comments, setComments] = useState([]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedLyric, setSelectedLyric] = useState({});


	const getComments = () => {
		axios
			.get(
				"https://gist.githubusercontent.com/AmayaKinivita/adb4786ed6aa2f21974a8be80406430a/raw/e35937df7a3c0cc602f967a480a9fac026fc1aab/comments.json"
			)
			.then((response) => {
				console.log(response.data);
				response.data.map((resp) => {
					resp.createdAt = new Date();
				});
				setComments(response.data);
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

	const openModal = (e) => {
		// console.log(e.target.id);
		setSelectedLyric(e.target.id);
		setIsOpen(true);
		// console.log("sel" + selectedLyric);
		
	};


	return (
		<div>
		
			<Modal
				isOpen={props.isOpen}
				onRequestClose={props.onRequestClose}
				contentLabel="Full Lyrics"
			>
					

				<section >
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
										<FaEllipsisV className="mr-2" />
										Options
									</div>
								</div>
							</div>
						</div>

						<div className="video-grid mt-5">
							<div class="card mb-2 card-img add-cover">

								<button className="postCoverBtn" id={props.selectedRecord.LyricId} onClick={openModal}><h1>Post Cover</h1>
									<FaPlus className="mr-2" /></button>

							</div>
							<div class="card mb-2 card-img">
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
							</div>
							<div class="card mb-2 card-img">
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
							</div>
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
									setComments([
										...comments,
										{
											authorUrl: "#",
											avatarUrl:
												"https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
											createdAt: new Date(),
											fullName: "Bhagya Goonathilaka",
											text,
										},
									]);
								}
							}}
						/>
					</div>
				</div>
				<CoverPost
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				selectedLyric={selectedLyric}
			>
				</CoverPost>
			</Modal>
			
		</div>
	);
}

export default LyricsModal;
