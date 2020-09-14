import * as types from '../types'
import {updateEmployee} from "../../services/api";


export const updateEmployeeAction = (name,salary,age,id) => async dispatch =>{
    dispatch({
        type: types.UPDATE_EMPLOYEE_STARTED
    })
    await updateEmployee(name,salary,age,id).then(res=>{
        alert('Employee successfully updated')
        console.log(res)
        dispatch({
            type:types.UPDATE_EMPLOYEE_SUCCESS,
            payload:res
        })
    }).catch((error)=>{
        dispatch({
            type:types.UPDATE_EMPLOYEE_ERROR,
            payload: {
                error
            }
        })
    })

}