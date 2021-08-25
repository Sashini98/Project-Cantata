
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link} from 'react-router-dom';



function Notification() {

    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const changemail = () => {
        const em = email + "   " + inputValue;
        setEmail(em);
        resetInputField();
    };

    const resetInputField = () => {
        setInputValue("");
    };
    const receiver = () => {
        if (document.getElementById("sel").value === "all") {
            document.getElementById("emai").disabled = 'true';
        }
       
    };




    const txt = {
        width: "70%"
    }

    const btn = {
        width: "10%",
        height: "5.3vh",
        borderRadius: "3px"
    }

    const txta = {
        border: "none",
        overflow: "auto",
        outline: "none",
        resize: "none"

    }

    const foot = {

        borderStyle: "solid",
        borderWidth: "thin",
    }


    const [notification, setNotification] = useState({
        adminId: "",
        message: ""
    });

    const { adminId, message } = notification;
    const onInputChange = e => {
        setNotification({ ...notification, [e.target.name]: e.target.value });
    };


    const submitNotification= async (e) => {
        e.preventDefault();
        // e.target.reset();
        await axios.post("http://localhost:5000/api/v1/admin/addnotification", notification);
        alert('Data Inserted');

    };


    return (
        <div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        Send Notification
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    Message:<textarea class="textarea" name="message" onChange={e => onInputChange(e)}></textarea> <br></br>
                    Send to:<br></br><div class="select is-info" >
                        <select id="sel" onChange={receiver}>
                            <option value="all">All Users</option>
                            <option value="specify">Selected Users</option>
                        </select>
                    </div>
                    <br></br><br></br><br></br>
                    User Email:<div class="control"></div><input class="input is-hovered" id="emai" type="text" value={inputValue} style={txt} onChange={handleUserInput} />

                    <button style={btn} onClick={changemail}>Add</button>
                    <br></br>
                    <div class="control"></div><textarea class="textarea has-fixed-size" type="text" value={email} style={txta} onChange={handleEmail} />

                    <input class="input is-hovered" id="adminId" name="adminId" type="text" style={txt} onChange={e => onInputChange(e)} />

                    <br></br>
                    <footer class="card-footer">
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={submitNotification} >Send</a></div>
                </footer>
                </div>

            </div>
        </div>
    );
}
export default Notification;
