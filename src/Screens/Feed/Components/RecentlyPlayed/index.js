import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Components/Post";
import './index.css';

const toggle = {
    margin: "auto"
}


function RecentlyPlayed() {
    let { subpath } = useParams();

    return (
        <div>

            <h1>Watch History</h1>
            <div className="table-container trendingSection">
                <table className="table posts">


                    <tr>
                        <div>
                            <Post />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <Post />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <Post />
                        </div>
                    </tr>

                </table>
            </div>
            


            </div>
        

    )
}

export default RecentlyPlayed;