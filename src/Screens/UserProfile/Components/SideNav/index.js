import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../../../Assets/Admin/logo2.png";
import usermgt from "../../../../Assets/Admin/usermgt.png";
import notify from "../../../../Assets/Admin/notify.png";
import lgout from "../../../../Assets/Admin/logout.png";

import './index.css';

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
                <li><a className={subpath === "../EditProfile/index.js" ? "is-active" : ""}><Link to="editprofile"><img src={usermgt} style={imgstyle} />EditProfile</Link></a></li>
                <li><a className={subpath === "../Notification" ? "is-active" : ""}><Link to="notification"><img src={notify} style={imgstyle} />Notification</Link></a></li>
                <li><a><Link to="\"><img src={lgout} style={imgstyle} />Logout</Link></a></li>
            </ul>

        </aside>
    )
}

export default SideNav;


