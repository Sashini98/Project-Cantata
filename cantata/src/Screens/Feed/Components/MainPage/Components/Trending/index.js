import React from "react";
import Post from "./Components/Post";


const bx = {
    
    //  backgroundColor: "white",
      height: "50vh",
      width: "130vh",
   //   borderStyle: "solid",
    //  borderWidth: "0",
      margin: "2vh"
  
  }
  const fullbx = {
      
    //height: "73vh",
     // width: "180vh",
     OverflowY: "scroll",
      borderWidth: "thin",
      margin: "auto"
  }
  

function Trending() {


    return (
        <div class="table-container" style={fullbx} Overflow="auto">
                        <table class="table">
 

                        <tr>
                        <div>
                            <Post/>
                        </div>
                        </tr>
                        <tr>
                        <div>
                            <Post/>
                        </div>
                        </tr>
                        <tr>
                        <div>
                            <Post/>
                        </div>
                        </tr>

                        </table>
                    </div>  
    )
}

export default Trending;