import React from "react";

function CountBox() {
    const bx={
        backgroundColor:"rgb(204, 197, 197)",
             height: "90%",
        width: "80%"
    }

    return (
        <div>
            <nav class="level mt-6">
                <div className="level-item has-text-centered" >
                    <div>
                        <div className="box mx-6"style={bx}>
                            <div class="content">
                                <p>
                                    <h1>Users</h1>
                                    7820
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
                                    <h1>Active</h1>
                                    7820
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
                                    <h1>Deactive</h1>
                                    7820
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div>




    )
}

export default CountBox;