import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

function ActiveUser(props) {
    const tbl = {
        width: "100%"
    };

    const [record, setRecord] = useState([]);


    // On Page load display all records 
    const loadUserDetail = async () => {
        var response = fetch('http://localhost:5000/api/v1/user/active')
            .then(function (response) {
                return response.json();
                window.alert(response);
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadUserDetail();
    }, []);



    return (
        <div>
            <table class="table" style={tbl}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Joined Date</th>
                    </tr>
                </thead>

                <tbody>
                    {record.map((user) =>
                        <tr>
                            <td>{user.UserId}</td>
                            <td>{user.Email}</td>
                            <td>{user.Name}</td>
                            <td>{user.CreatedAt}</td>

                        </tr>
                    )}


                    {/* <tr>
                        <td>U001</td>
                        <td>sashini@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U002</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U003</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U004</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U005</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U006</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr>

                    <tr>
                        <td>U007</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>

                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}

export default ActiveUser;