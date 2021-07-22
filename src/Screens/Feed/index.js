//my code goes here
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import MainPage from "./Components/MainPage";
import RecentlyPlayed from "./Components/RecentlyPlayed";
import PlayLists from "./Components/PlayLists";
import Profile from "../UserProfile/Components/EditProfile";


function Feed() {

    let { subpath } = useParams();

    return (
        <div>
        <div class="columns">
            <div class="column is-2">
                <SideNav />
            </div>
            <div class="column is-10">
            <TopNav />
    
            
                {subpath === "MainPage" && <MainPage />}
                {subpath === "RecentlyPlayed" && <RecentlyPlayed />}   
                {subpath === "PlayLists" && <PlayLists />}
                {subpath === "Profile" && <Profile />}
            </div>
        </div>

    </div>
    )
}

export default Feed;