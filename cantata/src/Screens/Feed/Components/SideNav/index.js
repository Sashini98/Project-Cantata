import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../../../Assets/Admin/logo2.png";
import notify from "../../../../Assets/Admin/notify.png";
import edit from "../../../../Assets/Admin/account.png";
import lgout from "../../../../Assets/Admin/logout.png";
import home from "../../../../Assets/Admin/home.png";
import './index.css';
import MainPage from "../MainPage";


const imgstyle = {
    paddingRight: "3vh"
}

function SideNav() {
    let { subpath } = useParams();


    return (


        <aside className="menu drawer-menu">

            <div className="navtop is-centered">
                <img src={logo} ></img>


            </div>

            <ul className="menu-list">
                <li><a className={subpath === "MainPage" ? "is-active" : ""}><Link to="MainPage"><img src={home} style={imgstyle} />Home</Link></a></li>
                <li><a className={subpath === "RecentlyPlayed" ? "is-active" : ""}><Link to="RecentlyPlayed"><img src={home} style={imgstyle} />Recently Played</Link></a></li>
                <li><a className={subpath === "" ? "is-active" : ""}><Link to=""><img src={notify} style={imgstyle} />Notifications</Link></a></li>
                <li><a className={subpath === "accountmanagement" ? "is-active" : ""}><Link to="accountmanagement"><img src={edit} style={imgstyle} />Account</Link></a></li>
                <li><a><Link to="\"><img src={lgout} style={imgstyle} />Logout</Link></a></li>
            </ul>

        </aside>
    )
}

export default SideNav;