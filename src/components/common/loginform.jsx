import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form" >
                <h1>Login </h1>
                <i className="fa fa-user avatar " ></i>
                <form className="form" >
                    Enter Email:
                    <input type="text" name="email"
                    className="form-control m-2"
                    placeholder="Enter email"
                    />
                    Enter Password:
                    <input type="password" name="password" 
                    className="form-control m-2"
                    placeholder="Enter password"
                    />
                    <button className="btn btn-primary m-2 btn-block " >Login</button>
                </form>
                <a href="#">Forgetten Password</a>
                <p>Don't have an account, <a href="#">Create One</a></p>
                
            </div>
        )
    }
}

export default LoginForm;
