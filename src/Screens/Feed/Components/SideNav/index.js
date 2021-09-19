import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../../Assets/Admin/Icon.png";
import notify from "../../../../Assets/Admin/notify.png";
import edit from "../../../../Assets/Admin/account.png";
import lgout from "../../../../Assets/Admin/logout.png";
import home from "../../../../Assets/Admin/home.png";
import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import "./index.css";
import MainPage from "../MainPage";

const imgstyle = {
	paddingRight: "3vh",
	verticalAlign: "middle",
};

const sideNavLetters = {
	color: "#ffdd57",
	"&:hover": { color: "#0000" },
};

function SideNav() {
	let { subpath } = useParams();

	return (
		<aside className="menu drawer-menu">
			<div className="nav-top is-centered">
				<img src={Icon}></img>
			</div>

			<ul className="menu-list side">
				<li>
					<p className={subpath === "MainPage" ? "is-active" : ""}>
						<Link to="MainPage">
							<span className="side-letters" style={sideNavLetters}>
								<FaHome /> Home
							</span>
						</Link>
					</p>
				</li>
				<li>
					<p className={subpath === "RecentlyPlayed" ? "is-active" : ""}>
						<Link to="RecentlyPlayed">
							<span className="side-letters" style={sideNavLetters}>
								<FaPlay /> Recently Played
							</span>
						</Link>
					</p>
				</li>
				<li>
					<p className={subpath === "PlayLists" ? "is-active" : ""}>
						<Link to="PlayLists">
							{" "}
							<span className="side-letters" style={sideNavLetters}>
								<FaAlignLeft /> Playlists
							</span>
						</Link>
					</p>
				</li>
				<li>
					<p className={subpath === "PostLyrics" ? "is-active" : ""}>
						<Link to="PostLyrics">
							<span className="side-letters" style={sideNavLetters}>
								<FaUpload /> Post Lyrics
							</span>
						</Link>
					</p>
				</li>
				<li>
					<p className={subpath === "UserProfile" ? "is-active" : ""}>
						<Link to="UserProfile">
							<span className="side-letters" style={sideNavLetters}>
								<FaUserAlt /> Account
							</span>
						</Link>
					</p>
				</li>
				<li>
					<p>
						<Link to="Logout">
							<span className="side-letters" style={sideNavLetters}>
								<FaSignOutAlt /> Logout
							</span>
						</Link>
					</p>
				</li>
			</ul>
		</aside>
	);
}

export default SideNav;
