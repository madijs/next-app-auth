import * as types from '../types'

export const updateUsername = (username) => async dispatch =>{
    dispatch({
        type:types.UPDATE_USERNAME,
        payload:username
    });
};