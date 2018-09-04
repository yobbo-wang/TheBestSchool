import * as role from './type';

const initState = {
    roleList: [],
}

export const roleData = (state = initState , action = {}) => {
    switch(action.type){
        case role.QUESTROLELIST:
            return {
                ...state,
                ...{[action.dataType]: action.value}
            };
        default:
            return {...state};
    }
}