import React from "react";
import { Link, useParams } from "react-router-dom";

function NavTab(){
    let { subpath } = useParams();
    return(
        <div class="tabs is-fullwidth is-boxed"><br></br>
        <ul>
        <li><a className={subpath === "./userdetails" ? "is-active" : ""}><Link to="userdetails">Manage Users</Link></a></li>
            <li>
                <a>                                   
                    <span>Manage Users</span>
                </a>
            </li>
            <li>
                <a>                                   
                    <span>Active Users</span>
                </a>
            </li>
            <li>
                <a>                                    
                    <span>Deactive Users</span>
                </a>
            </li>
            
        </ul>
    </div>
    )
}

export default NavTab;
                   