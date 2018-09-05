import * as types from './type';
import http from '../../api/http'
import {environment, getToken} from '../../api/environment'

const fetchMainList = (currentPage) =>{
    let options = {
        data: {
            currentPage: currentPage,
            pageSize: 10
        },
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.mainList, options)
}

//初始化获取数据列表，保存至redux
export const requestData = (value, datatype) => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await fetchMainList(3);
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.REQUESTMAINLIST,
                value: result,
                datatype
            })
        }catch (error){
            console.error(error)
        }
    }
}


