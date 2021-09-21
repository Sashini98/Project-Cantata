import React, { useState, useEffect } from "react";
// import React from "react";
import user from "../../../../../../Assets/Admin/user.png";
import './recentlyPlayed.css';
import { FaEllipsisV, FaPlay, FaPlus } from "react-icons/fa";
import Modal from "react-modal";

//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function RecentlyPlayedPost() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <div className="recent-box" >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <article>
                    <button className="closeBtn" onClick={closeModal}>
                        Close
                    </button>
                    <div className="recentCoverInModal">
                        <iframe
                            src="https://drive.google.com/file/d/1tvG6-r58dZBLeCzKIHpzypE7o3IbEeEH/preview"
                            allow="autoplay"
                            width="1000"
                            height="600"
                        ></iframe>
                    </div>

                </article>
            </Modal>

            <div className="tile is-ancestor">
                <div className="tile  is-vertical is-8">
                    <div className="tile is-parent">
                        <div className="columns writer">
                            <div className="column">
                                <div className="artist-pp"> </div>
                            </div>
                            <div className="songName">
                                <p>How would you feel</p>
                            </div>
                            <div className="writerName-recent">
                                <p>Ed Sheeran</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child is-success">
                        <div className="content">
                            <button className="playBtn" onClick={openModal} > <FaPlay /> Play</button>
                            <button className="addtoPlaylistBtn" ><FaPlus /> Add to playlist</button>
                            <button className="optionsBtn" ><FaEllipsisV /></button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )

}

export default RecentlyPlayedPost;