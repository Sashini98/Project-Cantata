import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const history = useHistory();

	const Login = () => {
		axios
			.post(`http://localhost:5000/api/v1/user/checkuser`, {
				email: email,
				password: password,
			})
			.then((data) => {
				console.log(data.data);
				if (data.data.user.length > 0) {
					console.log("success");
					history.push("/Feed/MainPage");
				} else {
					console.log("fail");
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Email or Password is incorrect!",
					});
				}
			});
	};

	return (
		<div className="Home">
			<form className="login-form" onSubmit={(e) => e.preventDefault()}>
				<h4>Login to Cantata</h4>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="Form-Input"
					required
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<br></br>

				<input
					type="password"
					placeholder="Enter Password"
					name="password"
					className="Form-Input"
					required
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br></br>
				<div className="remember-me">
					<span>Remember me</span>
					<input
						type="checkbox"
						name="remember_me"
						className="remember-me-check"
					></input>
				</div>
				<br></br>

				<button
					type="submit"
					name="submitLogin"
					id="submit"
					className="form-button"
					onClick={Login}
					// onSubmit={this.handleSubmit}
				>
					Sign In
				</button>
				<p>or sign in with</p>
				<div className="login-option-container">
					<button className="login-option-btn facebook">Facebook</button>
					<button className="login-option-btn google">Google</button>
				</div>

				<h6>Don't have an account?</h6>
			</form>
		</div>
	);
}

export default Login;

function App() {
	const [errorMessage, setErrorMessage] = React.useState("");
	const handleClick = () => {
		setErrorMessage("Example error message!");
	};
	return (
		<div className="App">
			<button onClick={handleClick}>Show error message</button>
			{errorMessage && <div className="error"> {errorMessage} </div>}
		</div>
	);
}
