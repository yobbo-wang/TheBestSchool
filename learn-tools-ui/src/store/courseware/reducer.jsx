import * as courseware from './type';

const initState = {
    dataList: []
}

export const coursewareData = (state = initState , action = {}) => {
    switch(action.type){
        case courseware.QUERYLIST:
            return {
                ...state,
                ...{[action.datatype]: action.value}
            };
        default:
            return {...state};
    }
}

