import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import ReportedPosts from "./Components/ReporedPosts";

function AdminPage() {

    let { subpath } = useParams();

    return (
        <div>
            <div class="columns">
                <div class="column is-2">
                   <SideNav />
                </div>
                <div class="column is-10">
                    { subpath ==="dashboard" && <Dashboard />}
                    { subpath ==="reportedposts" && <ReportedPosts />}
                </div>
                
            </div>

        </div>

    )
}

export default AdminPage;