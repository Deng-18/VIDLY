import React, { Component } from 'react'

class LoginForm extends Component {

    state = {
        password: '',
        email: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password, this.state.email)
        this.setState({ password: '' });
        this.setState({ email:'' })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: [e.target.value]})
    }

    render() {

        const { password, email } = this.state;
        return (
            <div className="login-form" >
                <h1>Login</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="useremail">Enter Email:</label>
                        <input type="email" 
                        className="form-control" 
                        name="email"
                        value={email}
                        onChange={this.onChange}  
                        />
                        <label htmlFor="password">Enter Password: </label>
                        <input type="password" 
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        />
                        <button className="btn btn-primary mt-2 btn-block"> Login</button> <br />
                    </form>
                </div>
                
                <a href="/">Forgetten Password</a>
                <p>Don't have an account, <a href="/movies">Create One</a></p>

                
            </div>
        )
    }
}

export default LoginForm;
