//my code goes here
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import MainPage from "./Components/MainPage";




const toggle = {
    margin: "auto"
}



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

            </div>
        </div>

    </div>
    )
}

export default Feed;