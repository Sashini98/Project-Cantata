import React from "react";
import './playlists.css';


//pixel

//rem 

function Post() {


    return (

        <div className="fullPost">
            <div className="postedBy">


                <div className="columns writer">
                    <div className="columns writerName"> Playlist Name</div>
                </div>

            </div>


            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">

                        <div className="tile is-parent">

                            <div class="row">
                                <div class="column">
                                    Cover 1
                                </div>
                                <div class="column">
                                    Cover 2
                                </div>
                                <div class="column">
                                    Cover 3
                                </div>
                                <div class="column">
                                    Cover 4
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </div>


    )

}

export default Post;