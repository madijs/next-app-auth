import {combineReducers} from "redux";
import {postReducer} from "./postReducer";
import {loginReducer} from "./loginReducer";


export default combineReducers({
    post:postReducer,
    login:loginReducer
})