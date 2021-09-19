import React, { useState, useEffect } from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import close from "../../../../../../../../Assets/Admin/close.png";
import "./trendingPostindex.css";
import Modal from "react-modal";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

//pixel

const seeBtn = {
	width: "20vh",
	height: "5vh",
};
//rem

function Post() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const closeModal = () => {
		setIsOpen(false);
	};
	const openModal = () => {
		setIsOpen(true);
	};

	const [record, setRecord] = useState([]);
	const loadLyrics = async () => {
		var response = fetch("http://localhost:5000/api/v1/content/getlyrics")
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setRecord(myJson);
			});
	};

	useEffect(() => {
		loadLyrics();
	}, []);

	console.log(record);

	return (
		<div className="fullPost">
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<table>
					{record.map((lyrics) => (
						<article className="tile is-child is-primary">
							<button className="closeBtn" onClick={closeModal}>
								Close
							</button>
							<div>
								<div className="tile is-ancestor">
									<div className="tile  is-vertical is-8">
										<div className="tile ">
											<div className="tile lyricBox is-parent is-vertical">
												<article className="tile is-child is-primary">
													<div className="columns writer">
														<img src={user} />
														<div className="columns writerName-popup">
															{" "}
															{lyrics.UserId}{" "}
														</div>
													</div>
													<p className="writer">20th July 2021</p>
													<p className="title ">{lyrics.Title} </p>

													<span className="subtitle halfLyricSection">
														<pre>{lyrics.Preview}</pre>
													</span>
												</article>
											</div>
										</div>
										<div className="likeComment">
											<div class="columns">
												<div class="column"></div>
												<div class="column">
													<FaRegThumbsUp />
													100 Likes
												</div>
												<div class="column">
													<FaCommentAlt /> 20 Comments
												</div>
												<div class="column">
													<FaEllipsisV /> Options
												</div>
											</div>
										</div>

										<div className="tile is-parent thumbnails-section">
											<div className="thumbnail">
												<iframe
													src="https://drive.google.com/file/d/1tvG6-r58dZBLeCzKIHpzypE7o3IbEeEH/preview"
													allow="autoplay"
													width="400"
													height="240"
												></iframe>
												<div className="singer-name">
													<h1>Amaya Kinivita</h1>
													<p>26.10.2021</p>
												</div>
											</div>
											<div className="thumbnail">
												<iframe
													src="https://drive.google.com/file/d/1tvG6-r58dZBLeCzKIHpzypE7o3IbEeEH/preview"
													allow="autoplay"
													width="400"
													height="240"
												></iframe>
												<div className="singer-name">
													<h1>Amaya Kinivita</h1>
													<p>26.10.2021</p>
												</div>
											</div>
										</div>
									</div>
									<div className="descriptionSection is-parent">
										<article className="tile is-child is-success">
											<div className="content">
												<p className="title">Description</p>
												<p className="subtitle">{lyrics.Description} </p>
											</div>
										</article>
										{/* comment section */}
										<div className="commentsSection">
											<div class="comment-thread">
												{/* <!-- Comment 1 start --> */}
												<details open class="comment" id="comment-1">
													<a href="#comment-1" class="comment-border-link">
														<span class="sr-only">Jump to comment-1</span>
													</a>
													<summary>
														<div class="comment-heading">
															<div class="comment-voting">
																<button type="button">
																	<span aria-hidden="true">&#9650;</span>
																	<span class="sr-only">Vote up</span>
																</button>
																<button type="button">
																	<span aria-hidden="true">&#9660;</span>
																	<span class="sr-only">Vote down</span>
																</button>
															</div>
															<div class="comment-info">
																<a href="#" class="comment-author">
																	someguy14
																</a>
																<p class="m-0">22 points &bull; 4 days ago</p>
															</div>
														</div>
													</summary>

													<div class="comment-body">
														<p>
															This is really great! I fully agree with what you
															wrote, and this is sure to help me out in the
															future. Thank you for posting this.
														</p>
														<button type="button">Reply</button>
														<button type="button">Flag</button>
													</div>

													<div class="replies">
														{/* <!-- Comment 2 start --> */}
														<details open class="comment" id="comment-2">
															<a href="#comment-2" class="comment-border-link">
																<span class="sr-only">Jump to comment-2</span>
															</a>
															<summary>
																<div class="comment-heading">
																	<div class="comment-voting">
																		<button type="button">
																			<span aria-hidden="true">&#9650;</span>
																			<span class="sr-only">Vote up</span>
																		</button>
																		<button type="button">
																			<span aria-hidden="true">&#9660;</span>
																			<span class="sr-only">Vote down</span>
																		</button>
																	</div>
																	<div class="comment-info">
																		<a href="#" class="comment-author">
																			randomperson81
																		</a>
																		<p class="m-0">
																			4 points &bull; 3 days ago
																		</p>
																	</div>
																</div>
															</summary>

															<div class="comment-body">
																<p>Took the words right out of my mouth!</p>
																<button type="button">Reply</button>
																<button type="button">Flag</button>
															</div>
														</details>
														{/* <!-- Comment 2 end -->

            <!-- Comment 3 start --> */}
														<details open class="comment" id="comment-3">
															<a href="#comment-3" class="comment-border-link">
																<span class="sr-only">Jump to comment-3</span>
															</a>
															<summary>
																<div class="comment-heading">
																	<div class="comment-voting">
																		<button type="button">
																			<span aria-hidden="true">&#9650;</span>
																			<span class="sr-only">Vote up</span>
																		</button>
																		<button type="button">
																			<span aria-hidden="true">&#9660;</span>
																			<span class="sr-only">Vote down</span>
																		</button>
																	</div>
																	<div class="comment-info">
																		<a href="#" class="comment-author">
																			2edgy4u
																		</a>
																		<p class="m-0">
																			-19 points &bull; 3 days ago
																		</p>
																	</div>
																</div>
															</summary>

															<div class="comment-body">
																<p>
																	Wow, are you serious? You have some pretty low
																	standards to be able to enjoy this. Good for
																	you I guess, but you should honestly stop
																	making these embarrassing comments.
																</p>
																<button type="button">Reply</button>
																<button type="button">Flag</button>
															</div>

															<div class="replies">
																{/* <!-- Comment 4 start --> */}
																<details open class="comment" id="comment-4">
																	<a
																		href="#comment-4"
																		class="comment-border-link"
																	>
																		<span class="sr-only">
																			Jump to comment-4
																		</span>
																	</a>
																	<summary>
																		<div class="comment-heading">
																			<div class="comment-voting">
																				<button type="button">
																					<span aria-hidden="true">
																						&#9650;
																					</span>
																					<span class="sr-only">Vote up</span>
																				</button>
																				<button type="button">
																					<span aria-hidden="true">
																						&#9660;
																					</span>
																					<span class="sr-only">Vote down</span>
																				</button>
																			</div>
																			<div class="comment-info">
																				<a href="#" class="comment-author">
																					modpowertrip
																				</a>
																				<p class="m-0">
																					9 points &bull; 2 days ago
																				</p>
																			</div>
																		</div>
																	</summary>

																	<div class="comment-body">
																		<p>
																			You are breaking{" "}
																			<a href="#rule-687">Rule #687</a> with
																			that comment. Please avoid posting like
																			this in the future, or I will ban you.
																		</p>
																		<button type="button">Reply</button>
																		<button type="button">Flag</button>
																	</div>
																</details>
																{/* <!-- Comment 4 end -->

                    <!-- Comment 5 start --> */}
																<details open class="comment" id="comment-5">
																	<a
																		href="#comment-5"
																		class="comment-border-link"
																	>
																		<span class="sr-only">
																			Jump to comment-5
																		</span>
																	</a>
																	<summary>
																		<div class="comment-heading">
																			<div class="comment-voting">
																				<button type="button">
																					<span aria-hidden="true">
																						&#9650;
																					</span>
																					<span class="sr-only">Vote up</span>
																				</button>
																				<button type="button">
																					<span aria-hidden="true">
																						&#9660;
																					</span>
																					<span class="sr-only">Vote down</span>
																				</button>
																			</div>
																			<div class="comment-info">
																				<a href="#" class="comment-author">
																					imemespam
																				</a>
																				<p class="m-0">
																					3 points &bull; 2 days ago
																				</p>
																			</div>
																		</div>
																	</summary>

																	<div class="comment-body">
																		<p>
																			Well, that's just like your opinion man.
																		</p>
																		<button type="button">Reply</button>
																		<button type="button">Flag</button>
																	</div>
																</details>
																{/* <!-- Comment 5 end -->

                    <!-- Comment 6 start --> */}
																<details open class="comment" id="comment-6">
																	<a
																		href="#comment-6"
																		class="comment-border-link"
																	>
																		<span class="sr-only">
																			Jump to comment-6
																		</span>
																	</a>
																	<summary>
																		<div class="comment-heading">
																			<div class="comment-voting">
																				<button type="button">
																					<span aria-hidden="true">
																						&#9650;
																					</span>
																					<span class="sr-only">Vote up</span>
																				</button>
																				<button type="button">
																					<span aria-hidden="true">
																						&#9660;
																					</span>
																					<span class="sr-only">Vote down</span>
																				</button>
																			</div>
																			<div class="comment-info">
																				<a href="#" class="comment-author">
																					lukerbro57
																				</a>
																				<p class="m-0">
																					0 points &bull; 2 days ago
																				</p>
																			</div>
																		</div>
																	</summary>

																	<div class="comment-body">
																		<p>Lol I agree with you.</p>
																		<button type="button">Reply</button>
																		<button type="button">Flag</button>
																	</div>
																</details>
																{/* <!-- Comment 6 end --> */}

																<a href="#load-more">Load more replies</a>
															</div>
														</details>
														{/* <!-- Comment 3 end --> */}
													</div>
												</details>
												{/* <!-- Comment 1 end --> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
					))}{" "}
				</table>
			</Modal>
			<table>
				{" "}
				{record.map((lyrics) => (
					<div>
						<div className="postedBy">
							<div className="columns writer">
								<img src={user} />
								<div className="columns writerName-feed"> {lyrics.UserId}</div>
							</div>
						</div>

						<div className="box postContent">
							<div className="tile is-ancestor">
								<div className="tile  is-vertical is-8">
									<div className="tile ">
										<div className="tile lyricBox is-parent is-vertical">
											<article className="tile is-child is-primary">
												<p className="title ">{lyrics.Title}</p>
												<p className="subtitle halfLyricSection">
													{lyrics.Preview}
												</p>
											</article>
										</div>
									</div>
									<div className="tile is-parent">
										<button className="seeBtn" onClick={openModal}>
											See full lyrics
										</button>
										<button className="seeBtn">
											<FaRegThumbsUp /> Like
										</button>
										<button className="seeBtn">
											<FaCommentAlt /> Comment
										</button>
									</div>
								</div>
								<div className="tile descriptionSection is-parent lyricSection ">
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
