import {environment, getToken} from "../../api/environment";
import * as types from "../role/type";
import http from "../../api/http";

export const saveRole = (params) => {
    let options = {
        data: params,
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.saveRole, options)
}

/**
 * 查询角色列表
 * @returns {Promise<*>}
 */
const fetchRoleList = () =>{
    let options = {
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.roleList, options)
}

export const requestRoleData = (dataType) => {
    return async dispatch => {
        try {
            let result = await fetchRoleList();
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.QUESTROLELIST,
                value: result,
                dataType
            })
        }catch (error){
            console.error(error)
        }
    }
}