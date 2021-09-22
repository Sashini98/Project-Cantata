import React, { useState, useEffect } from "react";
import user from "../../../../Assets/Admin/user.png";
import { FaSearch } from "react-icons/fa";
import axios from "axios";


import "./index.css";
function TopNav() {
	let LastName = sessionStorage.getItem("Last_Name");
	let FirstName = sessionStorage.getItem("First_Name");

	const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);


	const searchRecords = () => {
        axios.get(`http://localhost:5000/api/v1/user/searchUser/${search}`)
            .then(response => {
                setRecord(response.data);
				console.log(response);
            });
    }
	return (
		<nav className="feed-navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-end">
				<div className="navbar-item">
					<div class="wrap">
						<div class="search">
							<input
							 id="emai" 
								type="text"
								class="searchTerm"
								placeholder="Who are you looking for?"
								onChange={(e) => setSearch(e.target.value)}
							></input>
							<button type="submit" class="searchButton" onClick={searchRecords}>
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
