import React from "react";
import './index.css';

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
  

function Trending() {


    return (
        <div class="table-container" style={fullbx} Overflow="auto">
                        <table class="table">
 

                        <tr>
                        <div>
                            <h1> Post 1 </h1>
                            <div class="box" style={bx} >
                                Trending Post 1
                            </div>
                        </div>
                        </tr>
                        <tr>
                        <div>
                            <h1> Post 2</h1>
                            <div class="box" style={bx} >
                                Trending Post 2
                            </div>
                        </div>
                        </tr>
                        <tr>
                        <div>
                            <h1> Post 3</h1>
                            <div class="box" style={bx} >
                                Trending Post 3
                            </div>
                        </div>
                        </tr>

                        </table>
                    </div>  
    )
}

export default Trending;