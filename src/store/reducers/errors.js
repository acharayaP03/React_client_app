import constants from "../actionsTypes";

export default (state={ message=null}, action) =>{
    switch (action.type){
        case constants.ADD_ERROR:
            return { ...state, message: action.error};
        case constants.REMOVE_ERROR:
            return { ...state, message: null};
        default: 
            return state;
    }
};