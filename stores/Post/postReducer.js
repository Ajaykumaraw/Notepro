import * as postActionType from './postActions'
import {doUserRegistration,userLogin} from '../Operations'

const initialState = {
    post: [
        {    
            _id:'',
            createdBy:'',
            postDesciption:'',
            title:''
        }
    ]
}


const postReducer = (state = initialState,action) =>{
    switch(action.type){
        case postActionType.CREATE_POST:
            console.log('reducer post reducer'+action.payload.createdBy)
            return {
                ...state,
                post :[
                    ...state.post,
                    {
                        createdBy:action.payload.createdBy,
                        postDesciption: action.payload.postDesciption,
                        title : action.payload.title,
                        // comments: action.payload
                    }
                ]
            }

        case postActionType.UPDATE_POST:
            return {
                ...state,
                
            }
        case postActionType.DELETE_POST:
            console.log(action.payload)
            return {
                ...state,
                
            }
        case postActionType.VIEW_POST:
                console.log(action.payload)
            return {
                ...state,
            }
        case postActionType.GET_POSTS:
                console.log('getposts',action.payload)
            return {
                ...state,
                post :[
                    ...action.payload
                        // comments: action.payload
                ]
            }
        case postActionType.ADD_COMMENT:
                console.log('action in reducer',action.payload)
            return {
                ...state,
                
            }
        default :
            return state
    }
}

export default postReducer;