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

function Post() {


    return (

        <div className="fullPost">
           

            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">
                        
                        <div className="tile is-parent">

                        <div className="columns writer"><img src={user} />
                                                <div className="columns writerName"> Perfect Two </div>
                                            </div>

                        </div>
                    </div>
                    <div className="tile descriptionSection is-parent lyricSection ">
                        <article className="tile is-child is-success">
                            <div className="content">
                            <button className="seeBtn" >Play</button>
                            <button className="seeBtn" >Add to playlist</button>
                            <FaEllipsisV/>
                            </div>
                        </article>
                    </div>
                </div>



            </div>
        </div>


    )

}

export default Post;