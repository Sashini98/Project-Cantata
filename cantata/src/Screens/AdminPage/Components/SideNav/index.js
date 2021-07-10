import React from "react";
import { Link,useParams } from "react-router-dom";
import logo from "../../../../Assets/Admin/logo2.png";

import './index.css';

function SideNav() {
let { subpath }=useParams();


    return (


        <aside className="menu drawer-menu">
            
            <div className="navtop is-centered">
            <img src={logo} ></img>
            

            </div>
            
            <ul className="menu-list">           
                <li><a className={subpath ==="dashboard"?"is-active":""}><Link to="dashboard">Dashboard</Link></a></li>
                <li><a className={subpath ==="reportedposts1"?"is-active":"" || subpath ==="reportedposts2"?"is-active":""}><Link to="reportedposts1">Reported Content</Link></a></li>
                <li><a className={subpath ==="reportedusers1"?"is-active":"" || subpath ==="reportedusers2"?"is-active":""}><Link to="reportedusers1">Reported Users</Link></a></li>
                <li><a className={subpath ===""?"is-active":""}><Link to="">User Management</Link></a></li>
                <li><a className={subpath ===""?"is-active":""}><Link to="">Notifications</Link></a></li>
                <li><a className={subpath ==="accountmanagement"?"is-active":""}><Link to="accountmanagement">Account</Link></a></li>
                <li><a><Link to="\">Logout</Link></a></li>
            </ul>
           
        </aside>
    )
}

export default SideNav;


