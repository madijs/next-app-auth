import * as types from '../types'

const initialState = {
    employees:[],
    status:'',
    error: null,

};

export const employeeReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.FETCH_EMPLOYEES:
            return{
                ...state,
                status: 'pending'
            };
        case types.FETCH_EMPLOYEES_SUCCESS:
            return{
                ...state,
                status: 'success',
                error: null,
                employees: action.payload
            };
        case types.FETCH_EMPLOYEES_ERROR:
            return{
                ...state,
                status: 'error',
                error: action.payload.error,
            };
        case types.CREATE_EMPLOYEE_STARTED:
            return {
                ...state,
                status: 'pending create...',
            };
        case types.CREATE_EMPLOYEE_SUCCESS:
            return {
              ...state,
              status: 'success',
              employees: [...state.employees,action.payload]
            };
        case types.CREATE_EMPLOYEE_ERROR:
            return {
                ...state,
                status: 'error'
            };
        case types.UPDATE_EMPLOYEE_SUCCESS:
            let copyState = {...state}
            for(let i in copyState.employees){
                console.log(copyState.employees[i])

                if(copyState.employees[i].id === action.payload.id){
                    copyState.employees[i] = action.payload
                    console.log(copyState.employees[i])
                }
            }
            return copyState
        case types.DELETE_EMPLOYEE_SUCCESS:{
            let copyState = {...state}
            let arr = []
            for(let i in copyState.employees){
                if(copyState.employees[i].id != action.payload.data){
                    arr.push(copyState.employees[i])
                }
            }
            copyState.employees = arr
            return copyState
        }
        default:
            return {
                ...state,
            };
    }
}