import * as authActionType from './authAction'
import {doUserRegistration,userLogin} from '../Operations'

const initialState = {
   registrationStatus : false
}


const authRegister = (state = initialState,action) =>{
    switch(action.type){
        case authActionType.REGISTER:
            console.log('reducer'+action.payload)
            return {
                ...state,
                registrationStatus:action.payload
            }

        default :
            return state
    }
}

export default authRegister;