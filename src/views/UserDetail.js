import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsersById } from '../actions';
import UserDetailCover from '../components/UserDetailCover';

class UserDetail extends Component {

    componentWillMount() {
        this.props.getUsersById(this.props.match.params.userId);
    }

    render() {
        return (
            <div>
                <UserDetailCover />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userDetail: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsersById
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);