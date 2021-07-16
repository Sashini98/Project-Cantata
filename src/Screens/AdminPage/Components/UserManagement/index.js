import React from "react";
import CountBox from "./Components/CountBox";

function UserManagement() {
    const txt = {
        width: "70%"
    }

    return (
        <div>
            <nav class="level">
                <div class="level-item ">
                    <div>
                        <CountBox />
                    </div>
                </div>

            </nav>

            <nav class="level">
                <div class="level-item  is-centered">
                    <div class="card is-centered mt-6 ml-6">
                        
                        <div class="card-content">
                            <article class="message"> <br></br>
                                <p class="title is-6 ml-4">User Details</p>
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
                                <p class="title is-6 ml-4">Manage Users</p>
                                <div class="message-body">
                                    User Email:<div class="control"><input class="input is-hovered" type="password" style={txt} ></input></div>
                                    <br></br>
                                   

                                </div>
                            </article>


                        </div>

                    </div>
                </div>



            </nav>
        </div>
    )
}
export default UserManagement;