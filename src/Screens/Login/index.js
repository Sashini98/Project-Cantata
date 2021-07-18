import React, { Component } from "react";
import "./index.css";

// function LoginPage(){

//     return(
//         <h1>Login</h1>
//     )
// }

// export default LoginPage;




class Login extends Component {
    state = {
        //includes any data that the specific component needs
        count: 0,
    };
    render() {
        return (
            <div className="Home">
                <form className="login-form">
                    <h3>Cantata</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        name="uname"
                        className="Form-Input"
                        required
                    ></input>
                    <br></br>

                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="Form-Input"
                        required
                    ></input>
                    <br></br>
                    <button
                        type="submit"
                        name="submitLogin"
                        id="submit"
                        className="form-button"
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
