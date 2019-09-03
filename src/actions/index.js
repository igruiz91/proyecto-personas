import http from './http';

//getUsers

const startGetUsers = () => { return { type: 'START_GET_USERS', ready: false } }
const completeGetUsers = (data) => { return { type: 'COMPLETE_GET_USERS', data } }
const errorGetUsers = (err) => { return { type: 'ERROR_GET_USERS', err } }

const startGetUsersById = () => { return { type: 'START_GET_USERS_BY_ID', ready: false } }
const completeGetUsersById = (data) => { return { type: 'COMPLETE_GET_USERS_BY_ID', data } }
const errorGetUsersById = (err) => { return { type: 'ERROR_GET_USERS_BY_ID', err } }

export const getUsers = () => {
    return (dispatch, getState) => {
        dispatch(startGetUsers());
        //TODO request con axios
        http.get('users').then((response) => {
            if (response.data) {
                dispatch(completeGetUsers(response.data));
            }
        }).catch((err) => {
            dispatch(errorGetUsers(err))
        })
    }
}

export const getUsersById = (userId) => {
    return (dispatch, getState) => {
        dispatch(startGetUsersById());
        //TODO request con axios
        http.get('users/' + userId).then((response) => {
            if (response.data) {
                dispatch(completeGetUsersById(response.data));
            }
        }).catch((err) => {
            dispatch(errorGetUsersById(err))
        })
    }
}