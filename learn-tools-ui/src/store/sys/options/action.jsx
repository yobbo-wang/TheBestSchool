import * as types from "../options/type";
import {environment, getToken} from "../../../api/environment";
import http from "../../../api/http";

/**
 * 查询错误码列表
 * @param currentPage
 * @param pageSize
 * @returns {Promise<*>}
 */
const fetchErrorCodeList = (currentPage, pageSize) =>{
    let options = {
        data: {
            currentPage: currentPage,
            pageSize: pageSize
        },
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.errorInfo, options)
}

export const requestData = (currentPage, pageSize, dataType) => {
    return async dispatch => {
        try {
            let result = await fetchErrorCodeList(currentPage, pageSize);
            dispatch({
                type: types.QUESTERRORCODELIST,
                rows: result.rows,
                page: result.page,
                dataType
            })
        }catch (error){
            console.error(error)
        }
    }
}