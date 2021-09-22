import React, { useState, useEffect } from "react";
// import user from "../../../../../../../Assets/Admin/user.png";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import CommentsBlock from "simple-react-comments";
import axios from "axios";
import { useHistory, Redirect  } from "react-router-dom";
import Swal from "sweetalert2";




import "./index.css";

function CoverPost(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const author = sessionStorage.getItem("UserID");
    const lyric = props.selectedLyric;
    const [cover_title, setTitle] = useState("");
    const [song_url, setUrl] = useState("");
    const [cover_description, setDescription] = useState("");
    const [keyword, setKeyword] = useState("");
    console.log("lyric valus"+lyric);





    function getVideoId(song_url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = song_url?.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }


    const PostCover = async (e) => {
        e.preventDefault();

        const videoId = getVideoId(song_url);
        const iframeMarkup = '<iframe src="https://www.youtube.com/embed/'
            + videoId + '" frameborder="0" allowfullscreen></iframe>';

        const url = "https://www.youtube.com/embed/" + videoId;
        // alert(url);

        await axios.post(`http://localhost:5000/api/v1/content/inputcover`, {
            cover_title: cover_title,
            cover_description: cover_description,
            song_url: url,
            author: author,
            lyric: lyric
        })
            .then((data) => {
                if (data.data.data != null) {

                    const covid = data.data.data;

                    axios.post(`http://localhost:5000/api/v1/content/inputcovertag`, {
                        cover_id: covid,
                        keyword: keyword

                    });
                    window.location.reload()
                    //             .then((response) => {
                    //                 alert(response);
                    //                 if (data.data.message === "New cover added successfully") {
                    //                     Swal.fire({
                    //                         icon: "success",
                    //                         title: "Sent",
                    //                         text: "Cover posted Succesfully!",
                    //                     });

                    //                 } else {
                    //                     Swal.fire({
                    //                         icon: "error",
                    //                         title: "Oops...",
                    //                         text: "Cover posting Failed!",
                    //                     });
                    //                 }
                    //             });




                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Cover posting Failed!",
                    });
                }
            });
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
                                Post Your Cover
                            </p>

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
                        <input
                            type="text"
                            placeholder="Title of your cover"
                            className="input-title"
                            name="cover_title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                        <br></br>

                        <textarea
                            type="textarea"
                            className="lyrics-textarea"
                            placeholder="Description about your cover"
                            name="cover_description"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <br></br>

                        <input
                            type="text"
                            placeholder="Youtube URL"
                            className="input-title"
                            name="cover_url"
                            required
                            onChange={(e) => setUrl(e.target.value)}
                        ></input>
                        <br></br>

                        <input
                            type="text"
                            placeholder="Enter Keywords seperated by commas"
                            className="input-title"
                            name="keyword"
                            required
                            onChange={(e) => setKeyword(e.target.value)}
                        ></input>

                        <button
                            type="submit"
                            name="submitLyrics"
                            className="lyrics-form-button"
                            onClick={PostCover}
                        >
                            Post Cover
                        </button>
                    </form>



                </div>



            </div>
        </Modal>
    );
}

export default CoverPost;
