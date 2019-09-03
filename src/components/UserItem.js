import React, { Component } from 'react';
import { Redirect } from 'react-router';

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            isRedirected: 'false'
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({
            isRedirected: true
        })
    }
    render() {
        const { name, last_name, id, facebook } = this.props;
        if (this.state.isRedirected) {
            return (<Redirect to={"/detail/" + id} />)
        }
        return (
            <div className="card" onClick={this.onClick}>
                <div className="card-content">
                    <div className="UserItem-leftBox">
                        <img className="UserItem-image" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" alt="profile" />
                    </div>
                    <div className="UserItem-rightBox">
                        <h2 className="UserItem-name">{name + " " + last_name}</h2>
                        <h3 className="UserItem-facebook">{facebook}</h3>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserItem;