import React from "react";
import CountBox from "./Components/CountBox";
import NavTab from "./Components/Navtab";


function UserManagement() {
   

    return (
        <div>
            <nav class="level">
                <div class="level-item ">
                    <div>
                        <CountBox />
                    </div>
                </div>

            </nav><br></br><br></br><br></br>

            <nav class="level">
                <div class="level-item">
                   <NavTab />
                </div>
            </nav>

            <nav class="level">
                <div class="level-item">
                   <NavTab />
                </div>
            </nav>
        </div>
    )
}
export default UserManagement;