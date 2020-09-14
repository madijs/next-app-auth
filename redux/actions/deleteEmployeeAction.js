import * as types from '../types'
import {deleteEmployee} from "../../services/api";



export const deleteEmployeeAction = (id) => async dispatch =>{
    dispatch({
        type:types.DELETE_EMPLOYEE_STARTED
    })
    await deleteEmployee(id).then(res => {
        console.log(res)
        alert(res.message)
        dispatch({
            type:types.DELETE_EMPLOYEE_SUCCESS,
            payload: res
        })
    }).catch((error) => {
        alert(error.message)
        dispatch({
            type:types.DELETE_EMPLOYEE_ERROR,
            payload: {
                error
            }
        })
    })
}