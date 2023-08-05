export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_USERS_BY_NAME = 'GET_ALL_USERS_BY_NAME'

import {getAll_Users} from '../../Utils/utils'

import { createAsyncThunk } from '@reduxjs/toolkit'


export const getAllUser = () =>{
    return dispatch =>{
        getAll_Users().then((res)=>{
            console.log('in action',res)
            dispatch({type:GET_ALL_USERS,payload:res})
        })
     
    }
}
export const getAllUserByName = (demoData) =>{
    return dispatch =>{
        console.log('in action',demoData)
        getPosts(demoData).then((res)=>{
            console.log('in action',res)
            dispatch({type:GET_POSTS,payload:res})
        })
        .catch((err)=>{
            console.log('this is error',err)
        })
    }
}
