import React from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import close from "../../../../../../../../Assets/Admin/close.png";
import './trendingPostindex.css';


//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function Post() {
    const btn = document.getElementById('btn');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');

    btn.addEventListener('click', () => {
        popup.classList.add('show');
    });

    close.addEventListener('click', () => {
        popup.classList.remove('show');
    })



    return (

        <div className="fullPost">
            <div className="postedBy">


                <div className="columns writer"><img src={user} />
                    <div className="columns writerName"> Posted By Amaya (Trending)</div>
                </div>

            </div>

            <div className="box postContent" >

                <div className="tile is-ancestor">
                    <div className="tile  is-vertical is-8">
                        <div className="tile ">
                            <div className="tile lyricBox is-parent is-vertical">
                                <article className="tile is-child is-primary">
                                    <p className="title ">Lyric Title</p>
                                    <p className="subtitle halfLyricSection">Half of the lyrics displayed here
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
                            <button className="seeBtn" id="btn">See full lyrics</button>

                            <div class="modal" id="popup">
                                <div class="modal-background"></div>
                                <div class="modal-card">
                                    <header class="modal-card-head">
                                        <p class="modal-card-title">Modal title</p>
                                        <button class="delete" aria-label="close"></button>
                                    </header>
                                    <section class="modal-card-body">

                                    </section>
                                    <footer class="modal-card-foot">
                                        <button class="button is-success">Save changes</button>
                                        <button class="button">Cancel</button>
                                    </footer>
                                </div>
                            </div>

                            <button className="seeBtn" >Like</button>
                            <button className="seeBtn" >Comment</button>

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

            {/*             
<div  className="popup" id="popup">
<div className="popUpContent">
    //popup box content
    Hello I'm the modal
    <img src={close} className="close" alt="Close"/>
</div>

</div> */}
        </div>







    )

}

export default Post;