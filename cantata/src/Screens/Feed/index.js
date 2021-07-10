//my code goes here
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import Trending from "./Components/Trending";
import { Link } from "react-router-dom";
import Following from "./Components/Following";

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

                <h1> Hello Amaya! Happy Coding! </h1>
                <div class="tabs is-centered">
                    <ul>
                        <li class="is-active"><a><Link to="./Trending"> Trending </Link></a></li>
                        <li><a><Link to="./Following"> Following </Link></a></li>
                        
                        
                    </ul>
                </div>
                    <Trending/>
                
                </div>

            


            </div>
        </div>

    )
}

export default Feed;