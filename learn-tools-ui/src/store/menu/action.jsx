import * as types from './type';
import http from '../../api/http'
import {environment, getToken} from '../../api/environment'

const fetchMenuList = () =>{
    let options = {
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.menuList, options)
}

export const requestMenuData = (value, datatype) => {
    return async dispatch => {
        try {
            let result = await fetchMenuList();
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.QUESTMENULIST,
                value: result,
                datatype
            })
        }catch (error){
            console.error(error)
        }
    }
}


