import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as mainData from './main/reducer';
import * as coursewareData from './courseware/reducer'
import * as usersData from './user/reducer';
import * as menuData from './menu/reducer';
import * as roleData from './role/reducer';

const store = createStore(
    combineReducers({
        ...mainData,
        ...coursewareData,
        ...usersData,
        ...menuData,
        ...roleData
    }),
    applyMiddleware(thunk)
);

export default store;