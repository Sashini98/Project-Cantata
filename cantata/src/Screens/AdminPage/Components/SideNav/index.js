import React from "react";
import { Link,useParams } from "react-router-dom";
import '../../../../Assets/sidenav.png';
import './index.css';



const snv = require('../../../../Assets/sidenav.png');
function SideNav() {
let { subpath }=useParams();


    return (


        <aside className="menu drawer-menu mt-3">
            
            <img src={snv} width="100" height="100"/>
            
            <ul className="menu-list">           
                <li><a className={subpath ==="dashboard"?"is-active":""}><Link to="dashboard">Dashboard</Link></a></li>
                <li><a className={subpath ==="reportedposts1"?"is-active":""}><Link to="reportedposts1">Reports</Link></a></li>
                <li><a className={subpath ==="usermanagement1"?"is-active":""}><Link to="usermanagement1">User Management</Link></a></li>
                <li><a className={subpath ==="accountmanagement"?"is-active":""}><Link to="accountmanagement">Account</Link></a></li>
                <li><a><Link to="\">Logout</Link></a></li>
            </ul>
           
        </aside>
    )
}

export default SideNav;


