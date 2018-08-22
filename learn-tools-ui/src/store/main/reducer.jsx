import * as home from './type';

const initState = {
    dataList: []
}

export const mainData = (state = initState , action = {}) => {
    switch(action.type){
        case home.REQUESTMAINLIST:
            return {
                ...state,
                ...{[action.datatype]: action.value}
            };
        default:
            return {...state};
    }
}

