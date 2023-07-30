import * as postActionType from './postActions'
import {doUserRegistration,userLogin} from '../Operations'

const initialState = {
    post: [{
        "name": "Samra Delic",
        "language": "Bosnian",
        "id": "BXJWNTJ2TDID61PJ",
        "bio": "Donec pellentesque ultrices mi, non consectetur eros luctus non. Sed nec suscipit ligula.",
        "version": 2.5,
        "comments":[
            {"commentId": 'comment 1',
                "commentMsg":'Demo comments 1'
            },
            {"commentId": 'comment 2',
                "commentMsg":'Demo comments 2'
            },
            {"commentId": 'comment 3',
             "commentMsg":'Demo comments 3'
            },
            {"commentId": 'comment 3',
            "commentMsg":'Demo comments 3'
            },
            {"commentId": 'comment 1',
                "commentMsg":'Demo comments 1'
            },
            {"commentId": 'comment 2',
                "commentMsg":'Demo comments 2'
            },
            {"commentId": 'comment 3',
             "commentMsg":'Demo comments 3'
            },
            {"commentId": 'comment 3',
            "commentMsg":'Demo comments 3'
            }
        ]

      },]
}


const postReducer = (state = initialState,action) =>{
    switch(action.type){
        case postActionType.CREATE_POST:
            console.log('reducer'+action.payload.name)
            return {
                ...state,
                post :[
                    ...state.post,
                    {
                        name:action.payload.name,
                        bio: action.payload.bio,
                        id : action.payload.id,
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
        default :
            return state
    }
}

export default postReducer;