import React from "react";  
import user from "../../../../../../../../Assets/Admin/user.png";                      
import './index.css';


const bx = {
    
    //  backgroundColor: "white",
      height: "50vh",
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

  
function Post() {


    return (                       
                        
                <div style={fullpost}>
                            <div >
                                

                                <div class="columns" style={PicName}><img src={user} width="50" height="10"/>
                                <div class="columns"style={postedBy}> Posted By</div>
                                </div>
                                
                            </div>

                    <div class="box" style={bx} >
                    <div class="column">
    
                        <div class="columns is-mobile">
                            <div class="column">
                                Lyrics

                            </div>
                            <div class="column">
                                 Description
                             </div>
                        </div>


                    </div>
                    </div>
                </div>

    )

}

export default Post;