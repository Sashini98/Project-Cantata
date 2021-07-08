import React from "react";
import CountBox from "./Components/CountBox";
import ReportBox from "./Components/ReportBox";

function ReportedPosts1() {

    return (
        <div>
        <nav class="level">
            <div class="level-item ">
                <div>
                    <CountBox />
                </div>
            </div>

        </nav>

        <nav class="level-left ml-6">
            <div class="level-item ml-6">
                <div>
                  <ReportBox />
                  <ReportBox />
                  <ReportBox />
                  <ReportBox />


                </div>
            </div>



        </nav>
    </div>
    )
}

export default ReportedPosts1;