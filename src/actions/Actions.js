import { EDIT_ELEMENT, CHANGE_FILTER, IMAGE_ANIMATION } from './types';

export const editElement = (elt,val,type) => dispatch => {
    dispatch({
        type: EDIT_ELEMENT,
        payload: {
            element: elt,
            value:val,
            type:type
        }
    })

}

export const changeFilter = (val) => dispatch => {
    dispatch({
        type: CHANGE_FILTER,
        payload: val
    })
}

export const changeImage = (val) => dispatch => {
    dispatch({
        type: IMAGE_ANIMATION,
        payload: val
    })
}