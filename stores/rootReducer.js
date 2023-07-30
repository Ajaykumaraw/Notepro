import { combineReducers } from "redux"; 
import tabReducer from "./tab/tabReducer";
import postReducer from './Post/postReducer'

export default combineReducers({
    tabReducer,postReducer
})