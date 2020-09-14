import * as types from '../types'
import {getEmployees} from "../../services/api";

export const fetchEmployees = () => async dispatch => {
    dispatch({
        type:types.FETCH_EMPLOYEES,
    });
    await getEmployees().then(res => {
        dispatch({
            type: types.FETCH_EMPLOYEES_SUCCESS,
            payload: res
        })
    }).catch((error) => {
        dispatch({
            type: types.FETCH_EMPLOYEES_ERROR,
            payload: {
                error
            }
        })
    })
};