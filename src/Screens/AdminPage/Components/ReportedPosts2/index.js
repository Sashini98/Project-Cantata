import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ReportDetails from "./Components/ReportDetails";
import user from "../../../../Assets/Admin/user.png";
import backarrow from "../../../../Assets/Admin/backarrow.png";
import "./index.css";


const bx = {
    backgroundColor: "white",
    height: "50vh",
    width: "110vh",
    borderStyle: "solid",
    borderWidth: "thin",
    margin: "auto"
}

const foot = {

    borderStyle: "solid",
    borderWidth: "thin",
}

function ReportedPosts2() {

    const location = useLocation()
    const [cover, setCover] = useState([]);


    const coverid = location.hasOwnProperty("query") ? location.query.cover_id : null
    // console.log("user id is" + userid)


    // const reports = () => {
    //     axios.get(`http://localhost:5000/api/v1/admin/getrepcover/${coverid}`)
    //         .then(response => {
    //             setRecord(response.data);
    //         });
    // }

    const Ignore = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changecoverstatus/${coverid}`)
            .then(response => {
                window.location.href = "/admin/reportedposts1";
            });
    }

    const DeletePost = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changecoverstatus/${coverid}`)
            .then(response => {
                window.location.href = "/admin/reportedposts1";
            });
    }

    const getCover = () => {
        axios.get(`http://localhost:5000/api/v1/content/getcoverbyId/${coverid}`)
            .then(response => {
                setCover(response.data);
                console.log(response);
            });
    }

    useEffect(() => {
        getCover();
    }, []);



    return (
        <div>
            <div><Link to="reportedposts1" ><img src={backarrow} /></Link></div>
            <div class="card is-centered mt-6 ml-6">
                <table>
                    {cover.map((covers) =>
                        <tr>
                            <header class="card-header">
                                <p class="card-header-title">
                                    <div className="topuser mr-3">
                                        <img src={user} />
                                    </div>
                                    {covers.Email}
                                </p>
                                <button class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </header>
                        </tr>
                    )}
                </table>
                <div class="card-content">
                    <table>
                        {cover.map((covers) =>
                            <tr>
                                <div class="content" style={bx} >
                                    {/* <p class="rep mt-6" style={{ textAlign: "center" }}> */}
                                    <div class="card-image">
									<iframe style={bx} 
										className="vid-if"
										src={covers.Url}
										allow="autoplay"
									></iframe>
								</div>

                                    {/* </p> */}
                                </div><br></br><br></br>
                                <div class="content">


                                    <td> Title :</td> <td>
                                        {covers.Title}
                                    </td>
                                    <br></br><br></br>
                                    <td>Posted Date : </td><td>
                                        {covers.CreatedAt}
                                    </td>
                                    <br></br><br></br>
                                    <td>Description :</td>  <td>
                                        {covers.Description}
                                    </td>
                                    <br></br><br></br>
                                </div>
                            </tr>
                        )}
                    </table>

                    <ReportDetails />

                </div>
                <footer class="card-footer" style={{ marginRight: "25vh" }}>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={Ignore} >Ignore</a></div>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={DeletePost}>Delete</a></div>
                </footer>


            </div>
        </div>

    )
}

export default ReportedPosts2;