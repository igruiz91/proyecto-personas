import React, { Component } from 'react';
import './index.css';

class UserDetailCover extends Component {
    constructor() {
        super();
        this.state = {
            cover: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F147%2F147140.png&f=1'
        }
    }
    render() {
        return (
            <div className="UserDetailCover">
                <img src={this.state.cover} alt="avatar usuario" className="UserDetailCover-img" />
            </div>
        );
    }
}

export default UserDetailCover;