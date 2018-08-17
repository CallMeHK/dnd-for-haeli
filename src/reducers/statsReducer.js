import { EDIT_ELEMENT, CHANGE_FILTER, IMAGE_ANIMATION } from '../actions/types';
import info from '../data/info';
const initialState = {
    show: 'stats',
    character: info,
    animation: ''
}

export default function( state = initialState, action) {
    switch (action.type) {
        case EDIT_ELEMENT:
        let newInfo = state.character;
        if (action.payload.type==='two-elt')
        { 
            let element1 = action.payload.element[0];
            let element2 = action.payload.element[1];
            let value = action.payload.value;
            newInfo[element1][element2] = value;
        }
        if (action.payload.type==='two-elt-index')
        {   
            let element1 = action.payload.element[0];
            let index = action.payload.element[1];
            let element2 = action.payload.element[2];
            let value = action.payload.value;
            newInfo[element1][index][element2] = value;
        }
            return {
                ...state,
                character: newInfo
            };
        case CHANGE_FILTER:
            
            return {
                ...state,
                show: action.payload 
            }
        case IMAGE_ANIMATION:

            return {
                ...state,
                animation: action.payload
            }
        default: 
         return state;
    }
}
