export const VIEW_POST = 'VIEW_POST'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POSTS = 'GET_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'
import { getposts } from '../../contollers/post'

import { createAsyncThunk } from '@reduxjs/toolkit'


export const createPost = (demoData) =>{
    return dispatch =>{
        dispatch({type:CREATE_POST,payload:demoData})
    }
}
export const getpost = (demoData) =>{
    console.log('in action',demoData)
    return dispatch =>{
        getposts(demoData).then((res)=>{
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