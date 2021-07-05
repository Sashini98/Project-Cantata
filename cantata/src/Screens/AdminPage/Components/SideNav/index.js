import React from "react";
import { Link,useParams } from "react-router-dom";




function SideNav() {
let { subpath }=useParams();


    return (


        <aside className="menu drawer-menu mt-3">
            <p className="menu-label pl-1">
                General
            </p>
            <ul className="menu-list">
           
                <li><a className={subpath ==="dashboard"?"is-active":""}><Link to="dashboard">Dashboard</Link></a></li>
                <li><a className={subpath ==="reportedposts1"?"is-active":""}><Link to="reportedposts1">Reports</Link></a></li>
            </ul>
            <p className="menu-label pl-1">
                Contests
            </p>
            <ul className="menu-list">
                <li><Link className="mb-0">Create Contest</Link></li>
                <li><Link className="mt-0" to="publishResults">Publish Results</Link></li>
            </ul>
            <p className="menu-label pl-1">
                Division A
            </p>
            <ul className="menu-list">
                <li><Link to="leaderboard">Leaderboard</Link></li>
                <li><Link>Add Contest</Link></li>
            </ul>
        </aside>
    )
}

export default SideNav;


