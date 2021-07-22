import React from "react";
// import ReportBox from "Components/ReportBox";
import "./index.css";

function ContentPost() {

    return (
        <div class="box">
            <div class="box" >

                <div class="box">
                    Description
                    <textarea class="textarea" placeholder="What is the song about"></textarea>

                    Lyrics
                    <textarea class="textarea" placeholder=""></textarea>

                    Interpretation (Optional)
                    <textarea class="textarea" placeholder="What does these lyrics mean?"></textarea>

                    Tags
                    <textarea class="textarea" placeholder="Add up to 5 tags to help search this song"></textarea>
                </div>
                
                <div class="box">
                    Background
                    <div class="box">
                        Upload Content 
                    </div>
                    <div class="control">
                        <div class="select is-rounded">
                            <select>
                            <option>Select Language</option>
                            <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <button class="button is-light">Discard</button>
                    <button class="button is-dark">Save</button>
                </div>
        </div>
        
    )
}

export default ContentPost;