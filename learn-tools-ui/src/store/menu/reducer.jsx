import * as menu from './type';

const initState = {
    menuList: []
}

export const menuData = (state = initState , action = {}) => {
    switch(action.type){
        case menu.QUESTMENULIST:
            return {
                ...state,
                ...{[action.datatype]: action.value}
            };
        default:
            return {...state};
    }
}