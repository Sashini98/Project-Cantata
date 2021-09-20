import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ReportDetails from "./Components/ReportDetails";
import user from "../../../../Assets/Admin/user.png";
import backarrow from "../../../../Assets/Admin/backarrow.png";
import "./index.css";
import axios from "axios";



const bx = {
    backgroundColor: "white",
    height: "20vh",
    width: "110vh",
    borderStyle: "solid",
    borderWidth: "thin",
    margin: "auto"
}

const cx = {
    backgroundColor: "transparent",
    height: "20vh",
    width: "110vh",
    margin: "auto"
}

const foot = {

    borderStyle: "solid",
    borderWidth: "thin",
}


function ReportedLyrics2(props) {

    const location = useLocation()
    const [record, setRecord] = useState([]);

    const lyricid = location.hasOwnProperty("query") ? location.query.ly_id : null


    const getLyrics = () => {
        axios.get(`http://localhost:5000/api/v1/content/getlyricsbyId/${lyricid}`)
            .then(response => {
                setRecord(response.data);
                console.log(response);
            });
    }

    useEffect(() => {
        getLyrics();
    }, []);


    const Ignore = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changelyricstatus/${lyricid}`)
            .then(response => {
                window.location.href = "/admin/reportedlyrics1";
            });
    }

    const DeletePost = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changelyricstatus/${lyricid}`)
            .then(response => {
                window.location.href = "/admin/reportedlyrics1";
            });
    }


    return (
        <div>

            <div><Link to="reportedlyrics1" ><img src={backarrow} /></Link></div>
            <div class="card is-centered mt-6 ml-6">
                <table>
                    {record.map((lyric) =>
                        <tr>
                            <header class="card-header">
                                <p class="card-header-title">
                                    <div className="topuser mr-3">
                                        <img src={user} />
                                    </div> <td> {lyric.Email}</td>
                                </p>
                                <button class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </header>
                            <div class="card-content">
                                <div class="content" style={bx} >
                                    <p class="rep mt-6" style={{ textAlign: "center" }}>
                                        <td style={cx}> {lyric.Preview}</td>
                                    </p>
                                </div><br></br><br></br>
                                <div class="content">
                                   <td> Title :</td> <td> {lyric.Title}</td>
                                    <br></br><br></br>
                                    <td>Posted Date : </td><td> {lyric.CreatedAt}</td>
                                    <br></br><br></br>
                                    <td>Description :</td>  <td> {lyric.Description}</td>
                                    <br></br><br></br>
                                    {/* Tags : */}
                                </div>

                                <ReportDetails />

                            </div>
                            <footer class="card-footer" style={{ marginRight: "25vh" }}>
                                <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={Ignore} >Ignore</a></div>
                                <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={DeletePost}>Delete</a></div>
                            </footer>
                        </tr>
                    )}
                </table>
            </div>

        </div>

    )
}

export default ReportedLyrics2;