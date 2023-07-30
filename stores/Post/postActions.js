export const VIEW_POST = 'VIEW_POST'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'

import { createAsyncThunk } from '@reduxjs/toolkit'


export const createPost = (demoData) =>{
    return dispatch =>{
        dispatch({type:CREATE_POST,payload:demoData})
    }
}