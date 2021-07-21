import React from "react";
import user from "../../../../../../Assets/Admin/user.png";
import './recentlyPlayed.css';


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

                            <button className="seeBtn" >See full lyrics</button>

                        </div>
                    </div>
                    <div className="tile descriptionSection is-parent lyricSection ">
                        <article className="tile is-child is-success">
                            <div className="content">
                                <p className="title">Description</p>
                                <p className="subtitle">Description of lyrics</p>
                            </div>
                        </article>
                    </div>
                </div>



            </div>
        </div>


    )

}

export default Post;