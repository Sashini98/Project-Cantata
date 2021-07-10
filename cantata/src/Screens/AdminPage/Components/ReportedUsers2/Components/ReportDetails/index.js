import React from "react";


const bx = {
    backgroundColor: "rgb(211, 211, 211)",
  height: "200%"
  

 }


function ReportDetails() {


    return (

        <div>
            <div class="card is-centered mt-6">
              
                <div class="card-content" style={bx}>
                    <div class="content">
                        Reported By :
                        <br></br><br></br>
                        Reason :
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default ReportDetails;