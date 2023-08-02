export const REGISTER = 'REGISTER'
export const LOGIN = 'CREATE_POST'
import {register,Login} from '../../Utils/utils'

import { createAsyncThunk } from '@reduxjs/toolkit'


export const authRegister = (usrRegData) =>{
        return dispatch =>{
            register(usrRegData).then((res)=>{
                console.log('in authRegister',res)
                dispatch({type:REGISTER,payload:res})
            })
            .catch((err)=>{console.log(err) })
        } 
}

export const authLogin = (userLoginData) =>{
    return dispatch =>{
        Login(userLoginData).then((res)=>{
            console.log('in LoginAction',res)
            dispatch({type:LOGIN,payload:res})
        })
        .catch((err)=>{console.log(err) })
      
    }
}


