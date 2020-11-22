import React, { Component } from 'react';
import './Overview.scss';
import logo from '../../assets/images/logo.svg';
import FolderIcon from '@material-ui/icons/Folder';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ProgressBar from './../progressbar/ProgressBar';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
// import CloudDoneIcon from '@material-ui/icons/CloudDone';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import { IconButton } from '@material-ui/core';
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
                <div className="overview-align-container">
                    <div className="overview-locations">
                        <div className="overview-locations-header">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="locations-container">
                            <div className="location-item">
                                <InsertDriveFileIcon className="icon" />
                            </div>
                            <div className="location-item">
                                <FolderIcon className="icon" />
                            </div>
                            <div className="location-item">
                                <CloudUploadIcon className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="overview-space">
                        <div className="overview-space-box desktop">
                            <span className="overview-space-box-big-text">{remainingSpace}</span>
                            <span className="overview-space-box-text">GB Left</span>
                        </div>
                        <div className="overview-main-box">
                            <span className="overview-space-text">You've used <b>{usedSpace} GB</b> of your storage</span>
                            <ProgressBar total={totalSpace} used={usedSpace} />
                        </div>
                        <div className="overview-space-box mobile">
                            <span className="overview-space-box-big-text">{remainingSpace}</span>
                            <span className="overview-space-box-text">GB Left</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;