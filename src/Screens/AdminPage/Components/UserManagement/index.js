import React from "react";
import { useParams } from "react-router-dom";
import CountBox from "./Components/CountBox";
import NavTab from "./Components/Navtab";
import ActiveUser from "./Components/ActiveUser";
import DeactiveUser from "./Components/DeactiveUser";
import UserDetails from "./Components/UserDetails";

function UserManagement() {

    let { subpath } = useParams();
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
                    {subpath === "./userdetails" && <UserDetails />}
                    {subpath === "activeusers" && <ActiveUser />}
                    {subpath === "deactiveusers" && <DeactiveUser />}
                </div>
            </nav>
        </div>
    )
}
export default UserManagement;