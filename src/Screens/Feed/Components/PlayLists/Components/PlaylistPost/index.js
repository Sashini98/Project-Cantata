import React from "react";
import './playlists.css';
import { FaPlay } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";


//pixel

//rem 

function PlaylistPost() {
    return (

        <div className="full-playlist">
            <div className="playlist-name">Study Time</div>
            <div className="tile is-parent playlist-box">

                <div>
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

                <div>
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

                <div>
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

                <div>
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
        </div>
    )

}

export default PlaylistPost;