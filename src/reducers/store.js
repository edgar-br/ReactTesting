import { createStore, combineReducers, applyMiddleware } from 'redux'
import ProductsReducer from './ProductsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    products: ProductsReducer
});

export default createStore(reducers, applyMiddleware(thunk));