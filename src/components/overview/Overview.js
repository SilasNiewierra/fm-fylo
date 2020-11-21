import React, { Component } from 'react';
import './Overview.scss';
import logo from '../../assets/images/logo.svg';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
class Overview extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.onLogout();
    }

    render() {
        const totalSpace = this.props.space['total'];
        const usedSpace = this.props.space['used'];
        const remainingSpace = totalSpace - usedSpace;
        return (

            <div className="overview-container">
                <div className="overview-locations">
                    <div className="overview-locations-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <IconButton onClick={this.handleLogout}>
                            <ExitToAppIcon style={{ color: "white"}} />
                        </IconButton>
                    </div>
                    <div className="locations-container">
                        <div className="location-item"></div>
                        <div className="location-item"></div>
                        <div className="location-item"></div>
                    </div>
                </div>
                <div className="overview-space">
                    <span>You've used <b>{usedSpace} GB</b> of your storage</span>
                    <span>You have {remainingSpace} left of your total {totalSpace}</span>

                </div>
            </div>
        );
    }
}

export default Overview;