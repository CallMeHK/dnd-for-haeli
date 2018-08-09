import { EDIT_ELEMENT, CHANGE_FILTER } from './types';

export const editElement = (elt,val) => dispatch => {
    dispatch({
        type: EDIT_ELEMENT,
        payload: {
            element: elt,
            value:val
        }
    })

}

export const changeFilter = (val) => dispatch => {
    dispatch({
        type: CHANGE_FILTER,
        payload: val
    })
}