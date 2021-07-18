import React from "react";

function AccountManagement() {
    const txt = {
        width: "70%"
    }

    const bt = {
        width: "10vh",
        marginRight: "auto",
        float: "left",
        position: "absolute",
        display: "block"
    }




    return (
        <div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        Account Settings
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Account Details</p>
                        <div class="message-body">
                            Email:<div class="control"><input class="input is-hovered" type="text" style={txt} value="shihara@gmail.com"></input></div>
                            <br></br>
                            First Name:<div class="control"><input class="input is-hovered" type="text" style={txt} value="Sashini"></input></div>
                            <br></br>
                            Last Name:<div class="control"><input class="input is-hovered" type="text" style={txt} value="Shihara"></input></div>
                            <br></br>
                        </div>

                    </article>
                    <br></br>
                    <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Change Password</p>
                        <div class="message-body">
                            Old Password:<div class="control"><input class="input is-hovered" type="password" style={txt} ></input></div>
                            <br></br>
                            New Password:<div class="control"><input class="input is-hovered" type="password" style={txt} ></input></div>
                            <br></br>
                            Confirm Password:<div class="control"><input class="input is-hovered" type="password" style={txt}></input></div>
                            <br></br>

                        </div>
                    </article>


                </div>

            </div>
            <section> <div class="field is-grouped">
                <p class="control">
                    <button class="button is-link">
                        Save changes
                    </button>
                </p>{"       "}
                <p class="control"style={bt}>
                    <button class="button">
                        Cancel
                    </button>
                </p>
                
            </div></section>
           
        </div>


    );

}
export default AccountManagement;