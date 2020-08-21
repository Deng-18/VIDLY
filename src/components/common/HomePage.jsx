import React, { Component } from 'react'

class HomePage extends Component {
    render() {
        return (
            <div>
                <nav className="d-flex navbar  bg-dark navbar-expand-sm" >
                    <ul className="navbar-nav ">
                        <li className="nav-item" >
                            <a href="/" className="nav-link">blaanv</a>
                        </li>
                        <li className="nav-item" >
                            <a href="/" className="nav-link">blaanv</a>
                        </li>
                        <li className="nav-item" >
                            <a href="/" className="nav-link text-light">blaanv</a>
                        </li>
                        <li className="nav-item" >
                            <a href="/" className="nav-link">blaanv</a>
                        </li>
                        <li className="nav-item" >
                            <a href="/" className="nav-link">blaanv</a>
                        </li>
                        <li className="nav-link mr-auto">
                            <button className="btn btn-primary" >Login</button>
                        </li>
                        <li className="nav-link ml-auto">
                            <button className="btn btn-primary mr-2">Sign Up</button>
                        </li>
                    </ul>
                </nav> 
            </div>
        )
    }
}

export default HomePage;
