import * as types from '../types'

export const logoutAction = () => async dispatch =>{
    dispatch({
        type:types.LOGOUT_STARTED
    });
    localStorage.clear();
    if(!localStorage.getItem('isAuth')){
        dispatch({
            type:types.LOGOUT_SUCCESS,
            payload: false
        })
    }
};