import {GET_PRODUCTS, INIT_REQUEST, ERROR_PRODUCTS} from '../actions/Types';

const INITIAL_STATE = {
    isLoading: false,
    errorMessage: undefined,
    productsList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCTS:
            return {
                ...state,
                productsList: action.payload,
                isLoading: false
            }
        case ERROR_PRODUCTS:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}