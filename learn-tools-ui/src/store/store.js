import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as mainData from './main/reducer';
import * as coursewareData from './courseware/reducer'

const store = createStore(
    combineReducers({
        ...mainData,
        ...coursewareData
    }),
    applyMiddleware(thunk)
);

export default store;