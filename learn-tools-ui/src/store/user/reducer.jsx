import * as types from './type';

const initState = {
    userList: []
}

export const usersData = (state = initState , action = {}) => {
    switch(action.type){
        case types.REQUESTUSERLIST:
            return {
                ...state,
                ...{[action.datatype]: action.value}
            };
        default:
            return {...state};
    }
}

