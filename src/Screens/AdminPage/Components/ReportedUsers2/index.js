import React from "react";
import { Link } from "react-router-dom";
import ReportDetails from "./Components/ReportDetails";
import user from "../../../../Assets/Admin/user.png";
import backarrow from "../../../../Assets/Admin/backarrow.png";
import "./index.css";


const bx = {
    backgroundColor: "white",
    height: "20vh",
    width: "110vh",
    borderStyle: "solid",
    borderWidth: "thin",
    margin: "auto"
}

const foot = {

    borderStyle: "solid",
    borderWidth: "thin",
}

function ReportedUsers2() {

    return (
        <div>
            <div><Link to="reportedposts1" ><img src={backarrow} /></Link></div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        <div className="topuser mr-3">
                            <img src={user} />
                        </div>  Account Name
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <div class="content">
                        Joined Date :
                        <br></br><br></br>
                        First Name :
                        <br></br><br></br>
                        Last Name :
                        <br></br><br></br>
                        Email :
                    </div>

                    <ReportDetails />
                    <ReportDetails />
                    <ReportDetails />

                    <ReportDetails />

                </div>
                <footer class="card-footer" style={{ marginRight: "25vh" }}>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} >Ignore</a></div>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} >Delete</a></div>
                </footer>
            </div>
        </div>

    )
}

export default ReportedUsers2;