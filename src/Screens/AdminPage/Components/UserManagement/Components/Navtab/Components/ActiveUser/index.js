import React, { useState, useEffect} from "react";
import axios from "axios";
import { render } from "@testing-library/react";

function ActiveUser(props){
    const tbl = {
        width: "100%"
    };

    const [search,setSearch] =useState('');
    const [record,setRecord] = useState([]);

    const searchRecords = () =>
    {
        console.log("workin");
        axios.get(`http://localhost:5000/api/admin/1`)
        .then(response => {
            console.log(response.data)
          setRecord(response.data);
        });
         
    }
 
    return (
        <div>
              <select id="sel" onChange={searchRecords}>
                            <option value="all">All Users</option>
                            <option value="specify">Selected Users</option>
                        </select>
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