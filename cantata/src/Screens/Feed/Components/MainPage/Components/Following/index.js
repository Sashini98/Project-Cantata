import React from "react";
import './index.css';
import Post from "./Components/Post";

const bx = {
    
    //  backgroundColor: "white",
      height: "50vh",
      width: "150vh",
   //   borderStyle: "solid",
    //  borderWidth: "0",
      margin: "2vh"
  
  }
  const fullbx = {
      
    //  height: "73vh",
      width: "165vh",
      Overflow: "auto",
      borderWidth: "thin",
      margin: "auto"
  }
  

function Following() {


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

export default Following;