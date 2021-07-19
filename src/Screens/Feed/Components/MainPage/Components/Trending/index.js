import React from "react";
import Post from "./Components/Post";



function Trending() {


    return (
        
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
       
    )
}

export default Trending;