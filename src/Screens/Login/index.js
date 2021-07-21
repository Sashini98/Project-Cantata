import React, { Component } from "react";
import "./index.css";

class Login extends Component {
	state = {
		//includes any data that the specific component needs
		email: "",
		password: "",
	};

	handleChange = (e) => {
		const { name, value } = e.target; //takes the name and value of target event and stores it
		this.setState({ [name]: value }); //sets the state variables with target values
	};

	handleSubmit = (e) => {
		e.preventDefault(); //prevents refreshing on clicking submit (login)
	};

	render() {
		return (
			<div className="Home">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<h4>Login to Cantata</h4>
					<input
						type="text"
						placeholder="Email"
						name="email"
						className="Form-Input"
						required
						onChange={this.handleChange}
					></input>
					<br></br>

					<input
						type="password"
						placeholder="Enter Password"
						name="password"
						className="Form-Input"
						required
						onChange={this.handleChange}
					></input>
					<br></br>
					<button
						type="submit"
						name="submitLogin"
						id="submit"
						className="form-button"
						onSubmit={this.handleSubmit}
					>
						Sign In
					</button>

					<h6>Don't have an account?</h6>
				</form>
			</div>
		);
	}
}

export default Login;
