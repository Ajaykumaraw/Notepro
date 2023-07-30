import {doUserRegistration,userLogin} from '../Operations'
export const SET_SELECTED_TAB = 'SET_SELETED_TAB'
export const USER_REG = 'USER_REG'
export const USER_LOGIN = 'USER_LOGIN'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const setseletedTabSuccess = (selectedTab) =>({
    type: SET_SELECTED_TAB,
    payload: selectedTab
})
 

export function setseletedTab(selectedTab){
    console.log(selectedTab+'in actions')
    return dispatch =>{
        dispatch(setseletedTabSuccess(selectedTab))
    }
}




/* user registeration action */
export function RegisterAction(userReg){
    return dispatch =>{
        doUserRegistration(userReg).then((res)=>{
            dispatch({type : USER_REG,payload:res})
        })
        .catch(err=> {console.log(err)})
                                    
      
    }
}


/* user login action */
export function LoginAction(userReg){
    return dispatch =>{
        userLogin(userReg).then((res)=>{
            dispatch({type : USER_LOGIN,payload:res.name})
        })
        .catch(err=> {console.log(err)})
    }
}