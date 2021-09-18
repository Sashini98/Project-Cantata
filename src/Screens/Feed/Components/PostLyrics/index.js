import React from "react";
import { useParams } from "react-router-dom";
import './index.css';

const toggle = {
    margin: "auto"
}


function PostLyrics() {
    let { subpath } = useParams();

    return (
        <div className="postLyricsSection">

            <p>Post lyrics</p>
        </div>

    )
}

export default PostLyrics;