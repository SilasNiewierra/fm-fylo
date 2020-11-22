import React, { Component } from 'react';
import './ProgressBar.scss';

class ProgressBar extends Component {
    render() {
        const usedPercent = parseInt((this.props.used/this.props.total)*100);
        return (
            <div className="progressbar-container">
                <div className="container-background">
                    <div className="container-progress" style={{ width: usedPercent + '%' }}>
                        <div className="container-indicator">
                        </div>
                    </div>
                </div>
                <div className="container-labels">
                    <span><b>0 GB</b></span>
                    <span><b>{this.props.total} GB</b></span>
                </div>
            </div>
        );
    }
}

export default ProgressBar;