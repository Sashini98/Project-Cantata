import React from "react";
import search from "../../../../../../Assets/Admin/search.png";


function UserDetails() {
    const txt = {
        width: "50%"
    }

    const btn = {
        backgroundColor: "white",
        width: "5%",
        height: "5.3vh",
        border: "none",
        borderRadius: "3px",

    }


    return (
        <div>
            

            <nav class="level">
                <div class="level-item  is-centered">
                    <div class="card is-centered mt-6 ml-6">

                        <div class="card-content">
                            <article class="message"> <br></br>
                                <p class="title is-6 ml-4">User Details</p>
                                <div class="message-body">
                                    User Email:<div class="control"></div><input class="input is-hovered" id="emai" type="text" style={txt} />
                                    <button style={btn} ><img src={search} /></button>
                                    <br></br><br></br><br></br>
                                    <div class="table-container">
                                        <table class="table">
                                           
                                        </table>
                                    </div>

                                    User ID:<input class="input is-static" type="email" value="U011" readonly />
                                    <br></br>

                                    First Name:<input class="input is-static" type="email" value="Sashini" readonly />
                                    <br></br>

                                    Last Name:<input class="input is-static" type="email" value="Shihara" readonly />
                                    <br></br>

                                    Joined Date:<input class="input is-static" type="email" value="10/07/2021" readonly />
                                    <br></br>
                                </div>

                            </article>
                            <br></br>
                            <article class="message"> <br></br>
                                <p class="title is-6 ml-4">Manage Users</p>
                                <div class="message-body">
                                    User Email:<div class="control"><input class="input is-hovered" type="password" style={txt} ></input></div>
                                    <br></br>
                                    <button>
                                        Activate
                                    </button>
                                    <button>
                                        Deactivate
                                    </button>

                                </div>
                            </article>


                        </div>

                    </div>
                </div>



            </nav>
        </div>
    )
}
export default UserDetails;