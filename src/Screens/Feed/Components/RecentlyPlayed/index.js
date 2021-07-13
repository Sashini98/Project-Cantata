import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const toggle = {
    margin: "auto"
}


function RecentlyPlayed() {
    let { subpath } = useParams();

    return (
        <div>

            List of recently played covers
            


            </div>
        

    )
}

export default RecentlyPlayed;