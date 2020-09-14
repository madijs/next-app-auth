import * as types from '../types'
import {logIn} from "../../services/api";

export const loginAction = (username,password) => async dispatch =>{
    dispatch({
        type:types.LOGIN_STARTED
    });
    const bool =  await logIn(username,password)
    if(bool){
        dispatch({
            type:types.LOGIN_SUCCESS,
            payload: bool
        })
        localStorage.setItem('isAuth',bool)
    }else{
        dispatch({
            type:types.LOGIN_FAILURE,
            payload: {
                bool,
                error:'The user name or password was entered incorrectly!'
            }
        })
    }
};