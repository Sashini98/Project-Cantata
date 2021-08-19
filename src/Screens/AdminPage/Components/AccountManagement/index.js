import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountManagement() {
    const txt = {
        width: "100%"
    }

    const bt = {
        width: "10vh",
        marginRight: "auto",
        float: "left",
        position: "absolute",
        display: "block"
    }

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);


    const getAdmin = () => {
        axios.get(`http://localhost:5000/api/v1/admin/getadmin`)
            .then(response => {
                setRecord(response.data);
            });
    }
    useEffect(() => {
        getAdmin();
    }, []);



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
                    {/* <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Account Details</p>
                        <div class="message-body">
                            <table class="table">
                                <tr>
                                    <td>Admin Id</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.Email}</td>

                                    )}
                                </tr>

                                <tr>
                                    <td>First Name</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.Fname}</td>

                                    )}
                                </tr>

                                <tr>
                                    <td>Last Name</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.LName}</td>

                                    )}
                                </tr>

                            </table>
                        </div>

                    </article>
                     */}
                        <article class="message"> <br></br>
                            <p class="title is-6 ml-4">Account Details</p>
                            <div class="message-body">
                            <table>{record.map((admin) =><tr>
                                <td>Email:<div class="control"><input class="input is-hovered" type="text" style={txt} value={admin.Email}></input></div>
                                </td></tr> )} </table>
                                <br></br>
                                <table>{record.map((admin) =><tr>
                                <td>First Name:<div class="control"><input class="input is-hovered" type="text" style={txt} value={admin.Fname}></input></div>
                                </td></tr> )} </table>
                                <br></br>
                                <table>{record.map((admin) =><tr>
                                <td>Last Name:<div class="control"><input class="input is-hovered" type="text" style={txt} value={admin.Email}></input></div>
                                </td>
                                </tr> )} </table>
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
                <p class="control" style={bt}>
                    <button class="button">
                        Cancel
                    </button>
                </p>

            </div></section>

        </div>


    );

}
export default AccountManagement;