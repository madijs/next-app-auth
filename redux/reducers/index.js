import {combineReducers} from "redux";
import {postReducer} from "./postReducer";
import {loginReducer} from "./loginReducer";
import {employeeReducer} from "./employeeReducer";
import {viewEmployeeReducer} from "./viewEmployeeReducer";


export default combineReducers({
    post:postReducer,
    login:loginReducer,
    employee:employeeReducer,
    viewEmployee:viewEmployeeReducer
})