import { combineReducers } from "redux"; 
import tabReducer from "./tab/tabReducer";
import postReducer from './Post/postReducer'
import authRegister from "./Auth/authRegister";
import loginReducer from "./Auth/loginReducer";

export default combineReducers({
    tabReducer,postReducer,authRegister,
    loginReducer
})