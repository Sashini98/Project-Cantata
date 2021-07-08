import React from "react";
import "./index.css";
import user from "../../../../../../Assets/user.png";


function ReportBoxUser() {

    return (
        <div>
            <div class="card is-centered mt-6">
                <header class="card-header">
                    <p class="card-header-title">
                        <div className="topuser mr-3">
                            <img src={user} />
                        </div>  Account Name
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <div class="content">
                        Report Count :
                    </div>
                </div>
                <footer class="card-footer mr-3">


                    <div className="refer"><a href="" className="card-footer-item mb-3">View</a></div>
                </footer>
            </div>
        </div>




    )
}

export default ReportBoxUser;