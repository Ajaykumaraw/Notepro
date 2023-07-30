import * as tabActionType from './tabAction'
import {doUserRegistration,userLogin} from '../Operations'

const initialState = {
    selectedTab: '',
    isRegister : '',
    IsLogin : false,
    user : {}
}


const tabReducer = (state = initialState,action) =>{
    switch(action.type){
        case tabActionType.SET_SELECTED_TAB:
            console.log('reducer'+action.payload)
            return {
                ...state,
                selectedTab: action.payload
            }
        case tabActionType.USER_REG:
            return {
                ...state,
                isRegister : action.payload
            }
        case tabActionType.USER_LOGIN:
            console.log(action.payload)
            return {
                IsLogin : true,
                user : action.payload
            }
        default :
            return state
    }
}

export default tabReducer;