import * as types from '../types'

const initialState = {
    status:'',
    info: {},
    error:null
};

export const viewEmployeeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case types.VIEW_EMPLOYEE_STARTED:
            return {
                ...state,
                status: 'pending'
            }
        case types.VIEW_EMPLOYEE_SUCCESS:
            return {
                ...state,
                status: 'success',
                info: action.payload,
                error: null
            }
        case types.VIEW_EMPLOYEE_ERROR:
            return {
                ...state,
                status: 'error',
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}