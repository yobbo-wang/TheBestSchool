import * as types from './type';
import http from '../../../api/http'
import {environment, getToken} from '../../../api/environment'

/**
 * 保存用户信息
 * @param params
 * @returns {Promise<*>}
 */
export const saveUser = (params) => {
    let options = {
        data: params,
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.saveUser, options)
}

/**
 * 查询用户列表
 * @param currentPage
 * @param pageSize
 * @returns {Promise<*>}
 */
const fetchUserList = (currentPage, pageSize) =>{
    let options = {
        data: {
            currentPage: currentPage,
            pageSize: pageSize
        },
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.userList, options)
}

export const requestData = (currentPage, pageSize, dataType) => {
    return async dispatch => {
        try {
            let result = await fetchUserList(currentPage, pageSize);
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.REQUESTUSERLIST,
                value: result,
                dataType
            })
        }catch (error){
            console.error(error)
        }
    }
}


