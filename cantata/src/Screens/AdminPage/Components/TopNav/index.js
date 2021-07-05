import React from "react";
import user from "../../../../Assets/user.png";


import './index.css';




function TopNav() {



    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div className="topuser">
                        <p></p>
                        <img src={user} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;


