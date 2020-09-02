

import constants from '../actionsTypes';
import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';

export function setCurrentUser(user){
    const { SET_CURRENT_USER } = constants;
    return {
        type: SET_CURRENT_USER,
        user
    }
} 

export function authUser(type, userData){
    return dispatch => {
        //here we will wait until the apicall is finished. hench we wrap our thunk in promise
        //since we are not using any lifecycle method, this is the only way we get data.
        return new Promise((resolve, reject) =>{
            return apiCall('post', `/api/auth/${type}`, userData).then(
                ({ token, ...user })=>{
                    localStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    dispatchEvent(removeError()); //remove any errors from previous call
                    resolve();// indicate that api call is suceeded
                }
            ).catch( err =>{
                dispatch(addError(err.message));
                reject();// indicate api call failed.
            })
        })
    }
}