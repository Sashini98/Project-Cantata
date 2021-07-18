import React, { useState } from "react";
import Trending from "./Components/Trending";
import Following from "./Components/Following";
import { useParams } from "react-router-dom";

const toggle = {
    margin: "auto"
}


function MainPage() {
    let { subpath } = useParams();
    const [block, setBlock] = useState("")
    //setBlock: setter, block: variable, &empty string  

    const switchBlock = (e) => {
        setBlock(e.target.value)
    }

    return (
        <div>
            <div class="columns">

                <div class="column is-10">

                    <h1> Hello Amaya! Happy Coding! </h1>
                    <div class="column">

                        <div class="columns is-mobile">
                            <div class="column">
                                <button class="button is-medium is-fullwidth" style={toggle} onClick={switchBlock} value="trending">Trending</button>

                            </div>
                            <div class="column">
                                <button class="button is-medium is-fullwidth" style={toggle} onClick={switchBlock} value="following">Following</button>
                            </div>
                        </div>

                        {block === "trending" ? <Trending /> : <Following />}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPage;