import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as mainData from './main/reducer';
import * as coursewareData from './courseware/reducer'
import * as usersData from './sys/user/reducer';
import * as menuData from './sys/menu/reducer';
import * as roleData from './sys/role/reducer';
import * as errorCodeList from './sys/options/reducer';

const store = createStore(
    combineReducers({
        ...mainData,
        ...coursewareData,
        ...usersData,
        ...menuData,
        ...roleData,
        ...errorCodeList
    }),
    applyMiddleware(thunk)
);

export default store;