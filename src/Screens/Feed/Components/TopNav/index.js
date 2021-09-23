import React, { useState, useEffect } from "react";
import user from "../../../../Assets/Admin/user.png";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

import { Redirect } from 'react-router-dom';



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
				console.log(response.data[0].UserId);
				window.open(`/UserProfile/${response.data[0].UserId}`); 
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
							
            {/* {record.map((users) => */}
                
							<button type="submit" class="searchButton" onClick={searchRecords}>
								{/* <Link to={{ pathname: "login", query: { user_id: users.UserId } }}> </Link> */}
								<FaSearch />
							</button>
							
            {/* // )} */}
        
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
