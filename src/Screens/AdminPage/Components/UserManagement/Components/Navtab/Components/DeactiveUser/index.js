import React from "react";

function DeactiveUser() {
    
    const btn = {
        backgroundColor: "rgb(72, 95, 199)",
        color:"white",
        width: "100%",
        height: "5vh",
        borderRadius: "3px",
        border:"thin"

    }

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
                        <th>FirstName</th>
                        <th>Last Nmae</th>
                        <th>Joined Date</th>
                        <th>Deactivated Date</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>U001</td>
                        <td>sashini@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U002</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U003</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U004</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U005</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U006</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U007</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default DeactiveUser;