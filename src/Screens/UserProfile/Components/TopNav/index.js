import React from "react";
import user from "../../../../Assets/Admin/random.jpg";



import './index.css';




function TopNav() {



    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            
            <div class="navbar-end">
                <div class="navbar-item">
                    
                        <p class="btn mr-3">
                            <strong>Person 1
                            </strong>
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


