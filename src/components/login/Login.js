import React, { Component } from 'react';
import './Login.scss';
import logo from '../../assets/images/logo.svg';


class Login extends Component {

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        console.log("user loged in");
        this.props.onLogin({'name': 'Mark', 'lastname': 'Muster'});
    }

    render() {
        return (
            <div className="login-container">
                <img src={logo} className="logo" alt="logo" />
                {/* <h2>Get Started</h2> */}
                <div className="button" onClick={this.handleLogin}>Login</div>
            </div>
        );
    }
}

export default Login;
