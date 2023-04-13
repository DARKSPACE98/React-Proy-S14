import { types } from "../types/types";


const initialState = {
    logged: false,
    name: 'Enrique'
}

export const authReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payLoad
            };
        
        case types.logout:
            return{
                logged: false,
            };

        default:
            return state;
    }
}