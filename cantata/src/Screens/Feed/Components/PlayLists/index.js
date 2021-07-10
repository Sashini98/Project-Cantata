import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const toggle = {
    margin: "auto"
}


function PlayLists() {
    let { subpath } = useParams();

    return (
        <div>

            Play lists listed here
            


            </div>
        

    )
}

export default PlayLists;