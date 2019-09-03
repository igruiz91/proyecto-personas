import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import { RingLoader } from 'react-spinners';
import './index.css';

import UserItem from '../components/UserItem';

class Home extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    state = {}
    render() {
        const { users } = this.props;
        let usuarios = [];
        if (users.data) {
            usuarios = users.data.map((user, index) => {
                return (
                    <UserItem
                        key={index}
                        id={user.id}
                        name={user.name}
                        last_name={user.last_name}
                        facebook={user.facebook}
                    />
                );
            })
        }
        if (users.type === "START_GET_USERS") {
            return (
                <div className="Home-preLoader">
                    <RingLoader
                        color="#FFF"
                        loading={true} />
                </div>

            )
        }
        return (
            <div className="Home">
                {usuarios}

            </div>
        );
    }
}

//Convierte el valor del store que quiero en propiedades para el componente
function mapStateToProps(state) {
    return {
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsers
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);