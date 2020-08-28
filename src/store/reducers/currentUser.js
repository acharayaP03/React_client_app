import constants from "../actionsTypes";

const DEFAULT_STATE = {
    isAuthenticated: false, // not logged in, will true when logged in
    user: {} // all the user info when logged in 
}

export default (state = DEFAULT_STATE, action) =>{
    switch (action.type){
        case constants.SET_CURRENT_USER :
            return {
                //turn empty object into fale or if there are keys, true
                isAuthenticated: !!Object.keys(action.user).length,
                user:action.user
            }
        default:
            return state;
    }
}