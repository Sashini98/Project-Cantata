import React, { useState, useEffect } from "react";
// import user from "../../../../../../../Assets/Admin/user.png";
import Modal1 from "react-modal";
import { FaExclamation } from "react-icons/fa";
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

    const type = props.reportType;
    const author = sessionStorage.getItem("UserID");
    const lyric = props.selectedReport;
    const [reason, setReason] = useState("");


    const PostReport = () => {
        if (type === "lyric") {
            axios.post(`http://localhost:5000/api/v1/admin/inputreplyric`, {
                lyric_id: lyric,
                reason: reason,
                user: author
            })
                .then((data) => {
                    alert(data.data.message);
                    console.log(data.data.message);
                    if (data.data.message === "Report added successfully") {
                        Swal.fire({
                            icon: "success",
                            title: "Sent",
                            text: "Reported Succesfully!",
                        });

                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Reporting Failed!",
                        });
                    }
                });
                
                }

                if (type === "cover") {
                    axios.post(`http://localhost:5000/api/v1/admin/inputrepcover`, {
                        cover_id: lyric,
                        reason: reason,
                        user: author
                    })
                        .then((data) => {
                            alert(data.data.message);
                            console.log(data.data.message);
                            if (data.data.message === "Report added successfully") {
                                Swal.fire({
                                    icon: "success",
                                    title: "Sent",
                                    text: "Reported Succesfully!",
                                });
        
                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Reporting Failed!",
                                });
                            }
                        });
                        
                        }

                        if (type === "user") {
                            axios.post(`http://localhost:5000/api/v1/admin/inputrepuser`, {
                                user_id: lyric,
                                reason: reason,
                                user: author
                            })
                                .then((data) => {
                                    alert(data.data.message);
                                    console.log(data.data.message);
                                    if (data.data.message === "Report added successfully") {
                                        Swal.fire({
                                            icon: "success",
                                            title: "Sent",
                                            text: "Reported Succesfully!",
                                        });
                
                                    } else {
                                        Swal.fire({
                                            icon: "error",
                                            title: "Oops...",
                                            text: "Reporting Failed!",
                                        });
                                    }
                                });
                                
                                }

    };

    return (
        <Modal1 
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}

        >
            <section>
                <div className="hero-body pb-4 pt-4 report-top-area">
                    <div className="columns top-bar-reports">
                        <div className="column is-8 is-align-self-center has-text-left">
                            <p className="title is-3 mb-0 report-title">
                                <FaExclamation/> Report Content        </p>

                        </div>

                    </div>
                </div>
            </section>

            <div className="columns">
                <div className="column is-12">
                    <form className="report-form"
                    //  onSubmit={(e) => e.preventDefault()}
                    >
                        <br></br>

                        <textarea
                            type="textarea"
                            className="report-textarea"
                            placeholder="Reason for the report"
                            name="cover_description"
                            onChange={(e) => setReason(e.target.value)}
                        ></textarea>
                        <br></br>

                        <button
                            type="submit"
                            name="submitLyrics"
                            className="lyrics-form-button"
                            onClick={PostReport}
                        >
                            Report
                        </button>
                    </form>



                </div>



            </div>
        </Modal1>
    );
}

export default Reports;
