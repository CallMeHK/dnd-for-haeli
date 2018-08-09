import { EDIT_ELEMENT, CHANGE_FILTER } from '../actions/types';
import info from '../data/info';
const initialState = {
    show: 'stats',
    character: info
}

export default function( state = initialState, action) {
    switch (action.type) {
        case EDIT_ELEMENT:

            return {
                ...state,
                character: action.payload
            };
        case CHANGE_FILTER:
            
            return {
                ...state,
                show: action.payload 
            }
        default: 
         return state;
    }
}
