import React from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import './index.css';



const fullpost = {
    margin: "3vh"

}

//pixel
const PicName = {
    width: "130vh",
    margin: "auto"
}
const postedBy = {
    width: "130vh",
    margin: "2vh"
}
const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function Post() {


    return (

        <div style={fullpost}>
            <div >


                <div className="columns" style={PicName}><img src={user} width="50" height="10" />
                    <div className="columns" style={postedBy}> Posted By</div>
                </div>

            </div>

            <div className="box bx" >

                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Lyric Title</p>
                                    <p className="subtitle">Half lyrics</p>
                                </article>

                            </div>

                        </div>
                        <div className="tile is-parent">

                            <button className="seeBtn" >See full lyrics</button>

                        </div>
                    </div>
                    <div className="tile is-parent">
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