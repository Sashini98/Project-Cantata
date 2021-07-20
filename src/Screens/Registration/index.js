import React, { Component } from "react";
import "./index.css";


class Registration extends Component {
    state = {
        //includes any data that the specific component needs
        new_email: '',
        new_password: '',
        re_enter_password: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target    //takes the name and value of target event and stores it
        this.setState({[name]:value})       //sets the state variables with target values
    }

    handleSubmit = (e) => {
        e.preventDefault()         //prevents refreshing on clicking submit (login)

    }

    render() {
        return (
            <div className="Home">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <br></br>
                    <h3>Sign Up</h3>
                    <input
                        type="text"
                        placeholder="Email"
                        name="new_email"
                        className="Form-Input"
                        required
                        onChange={this.handleChange}
                    ></input>
                    <br></br>

                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="new_password"
                        className="Form-Input"
                        required
                        onChange={this.handleChange}
                    ></input>
                    <br></br>

                    <input
                        type="password"
                        placeholder="Re-Enter Password"
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
                        Sign Up
                    </button>

                </form>
            </div>
        );
    }
}

export default Registration;
