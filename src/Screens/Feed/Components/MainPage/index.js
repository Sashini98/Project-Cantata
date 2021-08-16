import React, { useState } from "react";
import Trending from "./Components/Trending";
import Following from "./Components/Following";
import { useParams } from "react-router-dom";
import './index.css';

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
            <div className="columns p-2">

                <div className="column is-12">

                    

                        <div className="columns is-mobile">
                            <div className="column">
                                <button className="button is-medium is-fullwidth" style={toggle} onClick={switchBlock} value="trending">Trending</button>

                            </div>
                            <div className="column">
                                <button className="button is-medium is-fullwidth" style={toggle} onClick={switchBlock} value="following">Following</button>
                            </div>
                        </div>

                        {block === "trending" ? <Trending /> : <Following />}

                    </div>
                </div>
            </div>
        

    )
}

export default MainPage;