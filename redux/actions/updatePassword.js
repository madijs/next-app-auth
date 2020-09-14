import * as types from '../types'

export const updatePassword = (password) => async dispatch =>{
    dispatch({
        type:types.UPDATE_PASSWORD,
        payload:password
    });

};