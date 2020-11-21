const { Component } = require("react");

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
            <div>
                <h1>Login Now</h1>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;
