import React from "react";

function ActiveUser() {
    const tbl = {
        width: "100%"
    }

    
    return (
        <div>
            <table class="table" style={tbl}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Joined Date</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
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
                        
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ActiveUser;