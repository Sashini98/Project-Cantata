import React from "react";
import './playlists.css';
import { FaPlay } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


//pixel

//rem 

function PlaylistPost() {
    return (

        <div className="full-playlist">
            
            <div className="video-grid mt-5">
							
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
									<button className="RemoveButton"><FaTrash/></button>
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
									<button className="RemoveButton"><FaTrash/></button>
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
									<button className="RemoveButton"><FaTrash/></button>
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
									<button className="RemoveButton"><FaTrash/></button>
								</div>
							</div>


						</div>
        </div>
    )

}

export default PlaylistPost;