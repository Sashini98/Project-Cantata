import React from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import './trendingPostindex.css';


//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function Post() {


    return (

        <div className="fullPost">
            <div className="postedBy">


                <div className="columns writer"><img src={user}/>
                    <div className="columns writerName"> Posted By Amaya</div>
                </div>

            </div>

            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">
                        <div className="tile ">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title ">Lyric Title</p>
                                    <p className="subtitle">Half of the lyrics displayed here</p>
                                </article>

                            </div>

                        </div>
                        <div className="tile is-parent">

                            <button className="seeBtn" >See full lyrics</button>

                        </div>
                    </div>
                    <div className="tile is-parent lyricSection ">
                        <article className="tile is-child notification is-success">
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