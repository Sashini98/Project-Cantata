import React from "react";
import user from "../../../../Assets/Admin/user.png";
import { FaSearch } from "react-icons/fa";

import "./index.css";
function TopNav() {
	let LastName = sessionStorage.getItem("Last_Name");
	let FirstName = sessionStorage.getItem("First_Name");
	return (
		<nav className="feed-navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-end">
				<div className="navbar-item">
					<div class="wrap">
						<div class="search">
							<input
								type="text"
								class="searchTerm"
								placeholder="What are you looking for?"
							></input>
							<button type="submit" class="searchButton" onClick="">
								<FaSearch />
							</button>
						</div>
					</div>
				</div>
				<div className="navbar-item">
					<p className="navbar-name">
						<strong>
							<h1>
								{FirstName} {LastName}
							</h1>
						</strong>
					</p>

					<div className="topuser">
						<img src={user} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default TopNav;
