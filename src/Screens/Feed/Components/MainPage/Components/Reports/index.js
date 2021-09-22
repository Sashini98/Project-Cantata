import React, { useState, useEffect } from "react";
// import user from "../../../../../../../Assets/Admin/user.png";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import CommentsBlock from "simple-react-comments";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import Swal from "sweetalert2";




import "./index.css";

function Reports(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const author = sessionStorage.getItem("UserID");
    const lyric = props.selectedLyric;
    const [reason, setReason] = useState("");


    const PostReport = () => {
        // axios.post(`http://localhost:5000/api/v1/content/inputcover`, {
        //     cover_title: cover_title,
        //     cover_description: cover_description,
        //     song_url: url,
        //     author: author,
        //     lyric: lyric
        // })
        //     .then((data) => {
        //         if (data.data.data != null) {
        //             Swal.fire({
        //                 icon: "success",
        //                 title: "Sent",
        //                 text: "Reported Succesfully!",
        //             });

        //         } else {
        //             Swal.fire({
        //                 icon: "error",
        //                 title: "Oops...",
        //                 text: "Reporting Failed!",
        //             });
        //         }
        //     });
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}

        >
            <section>
                <div className="hero-body pb-4 pt-4 hero-b-o ">
                    <div className="columns top-bar">
                        <div className="column is-8 is-align-self-center has-text-left">
                            <p className="title is-3 mb-0">
                                Report         </p>

                        </div>

                    </div>
                </div>
            </section>

            <div className="columns">
                <div className="column is-12">
                    <form className="post-lyrics-form"
                    //  onSubmit={(e) => e.preventDefault()}
                    >
                        <br></br>
                      
                        <textarea
                            type="textarea"
                            className="lyrics-textarea"
                            placeholder="Description about your cover"
                            name="cover_description"
                            // onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <br></br>

                      <button
                            type="submit"
                            name="submitLyrics"
                            className="lyrics-form-button"
                            // onClick={PostCover}
                        >
                            Report
                        </button>
                    </form>



                </div>



            </div>
        </Modal>
    );
}

export default Reports;
