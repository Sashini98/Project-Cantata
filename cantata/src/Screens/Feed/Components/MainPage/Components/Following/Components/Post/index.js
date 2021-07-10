import React from "react";                        
 


const bx = {
    
    //  backgroundColor: "white",
      height: "50vh",
      width: "130vh",
   //   borderStyle: "solid",
    //  borderWidth: "0",
      margin: "2vh"
  
  }

  
function Post() {


    return (                       
                        
                        <div>
                            <h1> Post </h1>
                            <div class="box" style={bx} >
                                Following Post
                            </div>
                        </div>

    )

}

export default Post;