import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as mainData from './main/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        ...mainData
    }),
    applyMiddleware(thunk)
);

export default store;