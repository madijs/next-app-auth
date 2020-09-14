import * as types from "../types";
import {getEmployee} from "../../services/api";

export const viewEmployeeAction = (id) => async dispatch =>{
    console.log("zzz")
    dispatch({
        type: types.VIEW_EMPLOYEE_STARTED,
    });
    await getEmployee(id).then(res=>{
        console.log("SSS")
        dispatch({
            type: types.VIEW_EMPLOYEE_SUCCESS,
            payload: res
        })
    }).catch((error) => {
        dispatch({
            type: types.VIEW_EMPLOYEE_ERROR,
            payload: {
                error
            }
        })
    })
}