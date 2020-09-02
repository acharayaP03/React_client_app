import constants from '../actionsTypes';


const {ADD_ERROR, REMOVE_ERROR } = constants;

export const addError = error =>({
    type: ADD_ERROR,
    error
})
export const removeError = () =>({
    type: REMOVE_ERROR
})
