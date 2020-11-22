import './App.scss';
import { Component } from 'react';
import Overview from './../overview/Overview';
// import Login from './../login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.state = { user: null, space: {total: 1000, used: 420} };
  }

  // handleLogin(user) {
  //   this.setState({ user: user });
  //   var spaceDummy = {total: 1000, used: 420};
  //   this.setState({space: spaceDummy});
  // }

  // handleLogout() {
  //   this.setState({ user: null });
  // }

  render() {
    return (
      <div className="App">
        <div className="content-container">
          {/* {this.state.user ? <Overview onLogout={this.handleLogout} space={this.state.space}/> : <Login onLogin={this.handleLogin} />} */}
          <Overview space={this.state.space}/>
        </div>
      </div>
    );
  }


}

export default App;
