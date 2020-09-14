import * as types from '../types'
import {createEmployee} from "../../services/api";

export const createNewEmployee = (name,salary,age) => async dispatch => {
    dispatch({
        type:types.CREATE_EMPLOYEE_STARTED,
    });
    await createEmployee(name,salary,age).then(res => {
        alert("The employee was added!")
        console.log(res)
        dispatch({
            type: types.CREATE_EMPLOYEE_SUCCESS,
            payload: res
        })
    }).catch((error) => {
        alert("Походу апишка гонит "+error.message)
        dispatch({
            type: types.CREATE_EMPLOYEE_ERROR,
            payload: {
                error
            }
        })
    })
};