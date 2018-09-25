import * as menu from './type';

const initState = {
    menuList: [],
}

export const menuData = (state = initState , action = {}) => {
    switch(action.type){
        case menu.QUESTMENULIST:
            return {
                ...state,
                ...{[action.dataType]: action.value}
            };
        default:
            return {...state};
    }
}