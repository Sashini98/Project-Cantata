import React from "react";
import CountBox from "./Components/CountBox";
import TrafficBar from "./Components/TrafficBar";

function Dashboard() {


    return (
        <div>
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <CountBox />
                    </div>
                </div>




            </nav>

            <nav class="level mt-6">
                <div class="level-item has-text-centered">
                    <div>
                       <TrafficBar />
                    </div>
                </div>



            </nav>
        </div>
    )
}

export default Dashboard;