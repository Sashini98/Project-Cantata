import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../../Assets/Admin/Icon.png";
import notify from "../../../../Assets/Admin/notify.png";
import edit from "../../../../Assets/Admin/account.png";
import lgout from "../../../../Assets/Admin/logout.png";
import home from "../../../../Assets/Admin/home.png";
import './index.css';
import MainPage from "../MainPage";


const imgstyle = {
    paddingRight: "3vh",
    verticalAlign: "middle"
}

const sideNavLetters = {
    color: "#ffdd57",
    "&:hover": { color: "#0000" }
}

function SideNav() {
    let { subpath } = useParams();


    return (


        <aside className="menu drawer-menu">


            <div className="nav-top is-centered">
                <img src={Icon} ></img>

            </div>

            <ul className="menu-list side">
                <li><p className={subpath === "MainPage" ? "is-active" : ""}><Link to="MainPage"><img src={home} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Home</span></Link></p></li>
                <li><p className={subpath === "RecentlyPlayed" ? "is-active" : ""}><Link to="RecentlyPlayed"><img src={home} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Recently Played</span></Link></p></li>
                <li><p className={subpath === "PlayLists" ? "is-active" : ""}><Link to="PlayLists"><img src={home} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Playlists</span></Link></p></li>
                <li><p className={subpath === "" ? "is-active" : ""}><Link to=""><img src={notify} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Notifications</span></Link></p></li>
                <li><p className={subpath === "UserProfile" ? "is-active" : ""}><Link to="UserProfile"><img src={edit} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Account</span></Link></p></li>
                <li><p><Link to="\"><img src={lgout} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Logout</span></Link></p></li>
            </ul>

        </aside>
    )
}

export default SideNav;