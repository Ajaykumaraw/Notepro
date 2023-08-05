export const VIEW_POST = 'VIEW_POST'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POSTS = 'GET_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'
import {getPosts,createPost} from '../../Utils/utils'

import { createAsyncThunk } from '@reduxjs/toolkit'


export const createPostAction = (createPostData) =>{
    return dispatch =>{
        console.log('in action',createPostData)
        createPost(createPostData).then((res)=>{
            console.log('in action response',res.data)
            dispatch({type:CREATE_POST,payload:res.data})
        })
        .catch((err)=>{
            console.log('this is error',err)
        })
       
    }
}
export const getpost = (demoData) =>{
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

export const addComment = (demoData) =>{
    return dispatch =>{
        dispatch({type:ADD_COMMENT,payload:demoData})
    }
}