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

            List of recently played covers
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