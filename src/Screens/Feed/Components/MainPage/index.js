import React from "react";
import Trending from "./Components/Trending";
import Following from "./Components/Following";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const toggle = {
    margin: "auto"
}


function MainPage() {
    let { subpath } = useParams();

    return (
        <div>
             <div class="columns">

                <div class="column is-10">  

                <h1> Hello Amaya! Happy Coding! </h1>
                <div class="column">
    
                <div class="columns is-mobile">
                  <div class="column">
                      <button class="button is-medium is-fullwidth" style={toggle}>Trending</button>
            
                    </div>
                 <div class="column">
                        <button class="button is-medium is-fullwidth" style={toggle}>Following</button>
                    </div>
                 </div>

                <div ><Trending/> </div>
                {subpath === "Following" && <Following />}  

                </div>
                
                </div>

            


            </div>
        </div>

    )
}

export default MainPage;