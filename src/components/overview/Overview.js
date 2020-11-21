import React, { Component } from 'react';
import './Overview.scss';


class Overview extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.onLogout();
    }

    render() {
        return (

            <div>
                <div className="overview-locations">
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                </div>
                <h2>Welcome to your overview</h2>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Overview;