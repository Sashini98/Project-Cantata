import React from "react";
import user from "../../../../../../Assets/Admin/user.png";
import './recentlyPlayed.css';
import { FaEllipsisV } from "react-icons/fa";


//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function RecentlyPlayedPost() {


    return (

        


            <div className="recent-box" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">
                    
                        <div className="tile is-parent">
                        
                            <div className="columns writer">
                            <div className="column">
                            <div className="artist-pp"> </div>

                                </div>
                                <div className="column">
                                    <div className="songName"> How would you feel </div>

                                </div>
                                <div className="column">

                                    <div className="writerName">How would you feel</div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="tile descriptionSection is-parent lyricSection ">
                        <article className="tile is-child is-success">
                            <div className="content">
                                <button className="seeBtn" >Play</button>
                                <button className="seeBtn" >Add to playlist</button>
                                <FaEllipsisV />
                            </div>
                        </article>
                    </div>
                </div>



            </div>
        


    )

}

export default RecentlyPlayedPost;