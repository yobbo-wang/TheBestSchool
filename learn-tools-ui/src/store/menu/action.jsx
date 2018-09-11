import * as types from './type';
import http from '../../api/http'
import {environment, getToken} from '../../api/environment'


/**
 * 保存菜单
 * @param params
 * @returns {Promise<void>}
 */
export const saveMenu = (params) => {
    let options = {
        data: params,
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.saveMenu, options);
}

/**
 * 根据用户id查询用户拥有菜单权限
 * @returns {result.data}
 */
export const queryMenuByUID = () => {
    let options = {
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.get(environment.url.queryMenuByUID, options);
}

/**
 * 查询菜单列表
 * @returns {Promise<*>}
 */
export const fetchMenuList = () =>{
    let options = {
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.menuList, options)
}

export const requestMenuData = (dataType) => {
    return async dispatch => {
        try {
            let result = await fetchMenuList();
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.QUESTMENULIST,
                value: result,
                dataType
            })
        }catch (error){
            console.error(error)
        }
    }
}


