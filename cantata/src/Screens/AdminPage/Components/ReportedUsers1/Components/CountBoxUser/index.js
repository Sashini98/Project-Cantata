import React from "react";

function CountBoxUser(){
    const bx={
        backgroundColor:"rgb(204, 197, 197)",
             height: "90%",
        width: "80%"
    }
    return(
        <div>
            <nav class="level mt-6">
                <div className="level-item has-text-centered">
                    <div>
                        <div className="box mx-6"style={bx}>
                            <div class="content">
                                <p>
                                    <h1>9864</h1>
                                    Reports
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <div class="box mx-6"style={bx}>
                            <div class="content">
                                <p>
                                    <h1>4125</h1>
                                    Resolved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <div class="box mx-6"style={bx}>
                            <div class="content">
                                <p>
                                    <h1>5245</h1>
                                    Unread
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default CountBoxUser;