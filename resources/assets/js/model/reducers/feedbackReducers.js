import { LOAD_FEEDBACK_SUCCESS, LOAD_FEEDBACK_DETAIL_SUCCESS, ACCEPT_SUCCESS, DELETE_SUCCESS, INSERT_SUCCESS } from '../type'

const INITIAL_STATE = {
    data: {},
    detail: {},
    status: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_FEEDBACK_SUCCESS:
            return {...state, data: action.payload, status: false}
            break;
        case LOAD_FEEDBACK_DETAIL_SUCCESS :
            return {...state, detail: action.payload, status:false}
            break;
        case ACCEPT_SUCCESS :
            return {...state, status: 1}
            break;
        case DELETE_SUCCESS :
            return {...state, status: 2}
        case INSERT_SUCCESS :
            return {...state, status: action.payload}
            break;
        default:
            return {...state}
            break;
    }
}
