import React, { useState } from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import close from "../../../../../../../../Assets/Admin/close.png";
import './trendingPostindex.css';
import Modal from 'react-modal';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function Post() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }


    return (

        <div className="fullPost">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <article className="tile is-child is-primary">
                    <button className="closeBtn" onClick={closeModal}>Close</button>
                    <div >
                        <div className="tile is-ancestor">
                            <div className="tile  is-vertical is-8">
                                <div className="tile ">
                                    <div className="tile lyricBox is-parent is-vertical">
                                        <article className="tile is-child is-primary">
                                            <div className="columns writer"><img src={user} />
                                                <div className="columns writerName"> ___Bhagya_Gunathilaka___</div>
                                            </div>
                                            <p className="writer">20th July 2021</p>
                                            <p className="title ">No scars to your beautiful</p>

                                            <span className="subtitle halfLyricSection">
                                                She just wants to be, beautiful
                                                She goes, unnoticed she knows, no limits
                                                She craves, attention she praises, an image
                                                She prays to be, sculpted by the sculptor
                                                Oh, she don't see, the light that's shining
                                                Deeper than the eyes can find it
                                                Maybe we have made her blind
                                                So she tries to cover up her pain
                                                And cut her woes away
                                                'Cause covergirls don't cry
                                                After their face is made
                                                But there's a hope that's waiting for you in the dark
                                                You should know you're beautiful just the way you are
                                                And you don't have to change a thing
                                                The world could change its heart
                                                No scars to your beautiful
                                                We're stars and we're beautiful
                                            </span>
                                        </article>

                                    </div>



                                </div>
                                <div className="likeComment">
                                    <div class="columns">
                                        <div class="column">

                                        </div>
                                        <div class="column">
                                            <FaRegThumbsUp />100  Likes
                                        </div>
                                        <div class="column">
                                            <FaCommentAlt />  20 Comments
                                        </div>
                                        <div class="column">
                                            <FaEllipsisV /> Options
                                        </div>
                                    </div>
                                </div>


                                <div className="tile is-parent thumbnails">
                                    <FaLessThan/>
                                    <div>
                                        <button className="coverBtn">Cover 1
                                            <div className="likeComment">
                                                <div class="columns">
                                                    <div class="column">

                                                    </div>
                                                    <div class="column">
                                                        <FaRegThumbsUp /> Likes
                                                    </div>
                                                    <div class="column">
                                                        <FaCommentAlt />Comment
                                                    </div>
                                                    <div class="column">
                                                        <FaEllipsisV /> Options
                                                    </div>
                                                </div>
                                            </div></button>


                                    </div>
                                    <div>
                                        <button className="coverBtn">Cover 2
                                            <div className="likeComment">
                                                <div class="columns">
                                                    <div class="column">

                                                    </div>
                                                    <div class="column">
                                                        <FaRegThumbsUp />Like
                                                    </div>
                                                    <div class="column">
                                                        <FaCommentAlt />Comment
                                                    </div>
                                                    <div class="column">
                                                        <FaEllipsisV />Options
                                                    </div>
                                                </div>
                                            </div></button>


                                    </div>
                                    <div>
                                        <button className="coverBtn">Cover 3
                                            <div className="likeComment">
                                                <div class="columns">
                                                    <div class="column">

                                                    </div>
                                                    <div class="column">
                                                        <FaRegThumbsUp />Like
                                                    </div>
                                                    <div class="column">
                                                        <FaCommentAlt />Comment
                                                    </div>
                                                    <div class="column">
                                                        <FaEllipsisV /> Options
                                                    </div>
                                                </div>
                                            </div></button>


                                    </div>
                                    <div>
                                        <button className="coverBtn">Cover 4
                                            <div className="likeComment">
                                                <div class="columns">
                                                    <div class="column">

                                                    </div>
                                                    <div class="column">
                                                        <FaRegThumbsUp />Like
                                                    </div>
                                                    <div class="column">
                                                        <FaCommentAlt />Comment
                                                    </div>
                                                    <div class="column">
                                                        <FaEllipsisV /> Options
                                                    </div>
                                                </div>
                                            </div></button>


                                    </div>
                                    <div>
                                        
                                            <div className="next">
                                                
                                                   
                                                <FaGreaterThan/>  
                                                    
                                                    
                                                
                                            </div>


                                    </div>
                                   

                                 

                                </div>



                            </div>
                            <div className="descriptionSection is-parent">
                                <article className="tile is-child is-success">
                                    <div className="content">
                                        <p className="title">Description</p>
                                        <p className="subtitle">Basically,
                                            that song is about body image.
                                            It's directed at women, but I think men can relate to it as well.
                                            It's just a song about these things that certain women go through on a daily basis in order to feel loved or in order to love themselves. I think that's such a thing that goes on in today's world. These weird things are instilled in us. You know? That tell us that we’re not good enough or that there's only one kind of beauty. This song basically is contradicting that idea. It's saying, 'Well, if the world doesn't like how you look then they should change.</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                </article></Modal>
            <div className="postedBy">


                <div className="columns writer"><img src={user} />
                
                    <div className="columns writerName"> ___Bhagya_Gunathilaka___<FaStar/> </div>
                    
                </div>

            </div>

            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">
                        <div className="tile ">
                            <div className="tile lyricBox is-parent is-vertical">
                                <article className="tile is-child is-primary">
                                    <p className="title ">Lyric Title</p>
                                    <p className="subtitle halfLyricSection">
                                        You can be the peanut butter to my jelly
                                        You can be the butterflies I feel in my belly
                                        You can be the captain
                                        And I can be your first mate
                                        You can be the chills that I feel on our first date
                                        You can be the hero
                                        And I can be your sidekick
                                        You can be the tear That I cry if we ever split
                                        You can be the rain from the cloud when it's stormin'
                                        Or u can be the sun when it shines in the mornin'
                                        Don't know if I could ever be without you
                                    </p>
                                </article>

                            </div>

                        </div>
                        <div className="tile is-parent">
                            <button className="seeBtn" onClick={openModal}>See full lyrics</button>



                            <button className="seeBtn" ><FaRegThumbsUp/>   Like</button>
                            <button className="seeBtn" ><FaCommentAlt/>   Comment</button>

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