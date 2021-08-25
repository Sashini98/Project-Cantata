import React from "react";
import user from "../../../../Assets/Admin/user.png";



import './index.css';




function TopNav() {



    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-end">
                <div className="navbar-item">

                    <p className="navbar-name">
                        <strong>Amaya Kinivita</strong>

                    </p>

                    <div className="topuser">
                        <img src={user} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;