import * as userActionType from './userActions'

const initialState = {
    user: [
       
    ]
}


const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case userActionType.GET_ALL_USERS:
            console.log('reducer'+action.payload)
            return {
                ...state,
                user:[
                    ...action.payload
                ]
            }

        case userActionType.GET_ALL_USERS_BY_NAME:
            return {
                ...state,
                
            }
        case userActionType.ADD_TO_FOLLOWING:
            console.log('add to following '+action.payload)
            return {
                 ...state,
               
                    
            }
          
        default :
            return state
    }
}

export default userReducer;

// {
//     following : []
// }

// user: [
//     {
//         following : [
//             ...following,
//             action.payload
//         ]
//     }
// ]