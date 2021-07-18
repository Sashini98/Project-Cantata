import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountBox from "./Components/CountBox";
import NavTab from "./Components/Navtab";
import ActiveUser from "./Components/Navtab/Components/DeactiveUser/ActiveUser";
import DeactiveUser from "./Components/Navtab/Components/DeactiveUser";
import UserDetails from "./Components/UserDetails";

function UserManagement() {

    let { subpath } = useParams();
    return (
        <div>
            <Router>
                <Switch>

                    <Route path="/navtab/:subpath" exact >
                        <NavTab />
                    </Route>
                </Switch>
            </Router>
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
                    {subpath === "userdetails" && <UserDetails />}
                    {subpath === "activeusers" && <ActiveUser />}
                    {subpath === "deactiveusers" && <DeactiveUser />}
                </div>
            </nav>
        </div>
    )
}
export default UserManagement;