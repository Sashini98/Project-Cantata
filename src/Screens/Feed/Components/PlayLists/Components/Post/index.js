import React from "react";
import './playlists.css';
import { FaPlay } from "react-icons/fa";


//pixel

//rem 

function Post() {


    return (

        <div className="fullPost">
            <div className="postedBy">


                <div className="columns writer">
                    <div className="columns writerName">Study Time</div>
                </div>

            </div>


            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">

                        <div className="tile is-parent">

                            <div class="row">
                                <div class="column">
                                    <FaPlay/> Supermarket Flowers
                                </div>
                                <div class="column">
                                <FaPlay/> Brother
                                </div>
                                <div class="column">
                                <FaPlay/>  Lego House
                                </div>
                                <div class="column">
                                <FaPlay/> Wanna Grow Old With You
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