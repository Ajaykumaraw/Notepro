import * as authActionType from './authAction'
import {doUserRegistration,userLogin} from '../Operations'

const initialState = {
   user:{
    islogin:false,
    username:''
   }
}


const loginReducer = (state = initialState,action) =>{
    switch(action.type){
        case authActionType.LOGIN:
            console.log(' in reducer'+action.payload)
            return {
                ...state,
                user:{
                        islogin:true,
                        username:action.payload
                     }
            }
        default :
            return state
    }
}

export default loginReducer;