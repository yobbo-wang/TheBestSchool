import * as types from './type';

const initState = {
    errorCodeList: {
        rows: [],
        page: {
            totalRecords: 0
        }
    }
}

export const errorCodeData = (state = initState , action = {}) => {
    switch(action.type){
        case types.QUESTERRORCODELIST:
            return {
                ...state,
                ...{[action.dataType]: {rows: action.rows, page: action.page}}
            };
        default:
            return {...state};
    }
}

