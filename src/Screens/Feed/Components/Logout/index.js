import React from "react";
// import "./index.css";
import { useHistory } from "react-router-dom";

function Logout() {
	const history = useHistory();
	sessionStorage.setItem("loggedIn", "false");
	sessionStorage.removeItem("UserID");
	sessionStorage.removeItem("Email");
	sessionStorage.removeItem("First_Name");
	sessionStorage.removeItem("Last_Name");

	history.push("/login");
}
export default Logout;
