import React, { useState, useEffect } from "react";
import './playlists.css';
import { FaPlay } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import axios from "axios";



//pixel

//rem 

function PlaylistPost() {
	const user_id = sessionStorage.getItem("UserID");
	const [covers, setCovers] = useState([]);


	useEffect(() => {
		getfavs();
	}, []);

	const getfavs = () => {
		axios.get(`http://localhost:5000/api/v1/content/getfav/${user_id}`)
			.then(response => {
				// console.log(response.data);
				setCovers(response.data);
			});
	}

	const remove = (e) => {
		var fav_id=e.target.id;
		axios
			.post(`http://localhost:5000/api/v1/content/removefav`, {
				fav_id:fav_id
			})
			.then((data) => {
				window.location.reload();

				// // alert(data.data.message);			
				// if (data.data.message === "Added to favourites") {
				//     Swal.fire({
				//         icon: "success",
				//         title: "Sent",
				//         text: "Added to favouries!",
				//     });
				// } else {
				//     Swal.fire({
				//         icon: "error",
				//         title: "Oops...",
				//         text: "Failed! Plaese try again.",
				//     });
				// }
			});
	};


	// console.log(covers);






	return (

		<div className="full-playlist">

			<div className="video-grid mt-5">
				<table>
					{covers.map((cover) =>
						<tr>
							<td>

							<div class="card mb-2 card-img">
								<div class="card-image">
									<iframe
										className="vid-if"
										src={cover.Url}
										allow="autoplay"
									></iframe>
								</div>
								<div className="pl-2 pr-2 pb-2 pt-2">
									<h1 className="title is-5 mb-0">{}</h1>
									<p>{cover.CreatedAt}</p>
									<button className="RemoveButton" id={cover.FavouritesId} onClick={remove}><FaTrash /></button>
								</div>
							</div>
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
									<button className="RemoveButton"><FaTrash /></button>
								</div>
							</div> */}
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
									<button className="RemoveButton"><FaTrash /></button>
								</div>
							</div> */}
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
									<button className="RemoveButton"><FaTrash /></button>
								</div>
							</div> */}

							</td>
						</tr>
					)}
				</table>

			</div>
		</div>
	)

}

export default PlaylistPost;