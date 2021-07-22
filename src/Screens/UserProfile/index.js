import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import * as Content from "./Components/Content";
import * as Bio from "./Components/Bio/index";
import TopNav from "./Components/TopNav";
import EditProfile from "./Components/EditProfile";
/* import Followers from "./Components/Followers"; */
/* import Following from "./Components/Following"; */
import * as Header from "./Components/Header";
import Notification from "./Components/Notification";


function UserProfile() {

    let { subpath } = useParams();

    return (
        <div>
            <div class="columns">
                <div class="column is-2">
                    <SideNav />
                </div>
                <div class="column is-10">
                <TopNav />
                   {subpath === "content" && <Content />}
                    {subpath === "bio" && <Bio />}
                    {subpath === "editprofile" && <EditProfile />}
                    {/* {subpath === "followers" && <Followers />} */}
                   {/*  {subpath === "following" && <Following />} */}
                 {subpath === "header" && <Header />}
                    {subpath === "notification" && <Notification />}

                </div>

            </div>

        </div>

    )
}

export default UserProfile;