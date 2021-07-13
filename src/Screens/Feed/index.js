//my code goes here
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import MainPage from "./Components/MainPage";
import RecentlyPlayed from "./Components/RecentlyPlayed";
import PlayLists from "./Components/PlayLists";


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
            </div>
        </div>

    </div>
    )
}

export default Feed;