import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import ReportedPosts1 from "./Components/ReporedPosts1";
import TopNav from "./Components/TopNav";
import ReportedPosts2 from "./Components/ReportedPosts2";
import UserManagement1 from "./Components/UserManagement1";

function AdminPage() {

    let { subpath } = useParams();

    return (
        <div>
            <div class="columns">
                <div class="column is-2">
                    <SideNav />
                </div>
                <div class="column is-10">
                <TopNav />
                    {subpath === "dashboard" && <Dashboard />}
                    {subpath === "reportedposts1" && <ReportedPosts1 />}
                    {subpath === "reportedposts2" && <ReportedPosts2 />}
                    {subpath === "usermanagement1" && <UserManagement1 />}
                </div>

            </div>

        </div>

    )
}

export default AdminPage;