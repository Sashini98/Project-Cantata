import React from "react";  
import user from "../../../../../../../../Assets/Admin/user.png";                      
import './index.css';


const bx = {
    
    //  backgroundColor: "white",
      height: "37vh",
      width: "130vh",
   //   borderStyle: "solid",
    //  borderWidth: "0",
      margin: "2vh"
  }

  const fullpost = {
      margin: "3vh"
  
  }
  
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

  
function Post() {


    return (                       
                        
                <div style={fullpost}>
                            <div >
                                

                                <div class="columns" style={PicName}><img src={user} width="50" height="10"/>
                                <div class="columns"style={postedBy}> Posted By</div>
                                </div>
                                
                            </div>

                    <div class="box" style={bx} >
                        
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Lyric Title</p>
                                <p class="subtitle">Half lyrics</p>
                            </article>

                        </div>

                    </div>
                    <div class="tile is-parent">
                                  
                         <button class="seeBtn" >See full lyrics</button>
                            
                    </div>
                        </div>
                    <div class="tile is-parent">
                            <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Description</p>
                                <p class="subtitle">Description of lyrics</p>
                            </div>
                            </article>
                    </div>
                        </div>
                    
                        

                    </div>
                    </div>
                

    )

}

export default Post;