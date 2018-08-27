import * as types from './type';
import http from '../../api/http'
import {authorization, environment} from '../../api/environment'

const fetchCoursewareList = (currentPage, pageSize) =>{
    let options = {
        params: {
            currentPage: currentPage,
            pageSize: pageSize
        },
        headers: {
            Authorization: authorization.Authorization
        }
    }
    return http.post(environment.url.coursewareList, options)
}

//初始化获取数据列表，保存至redux
export const queryCourseWareDate = (currentPage, pageSize, datatype) => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await fetchCoursewareList(currentPage, pageSize);
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.QUERYLIST,
                value: result,
                datatype
            })
        }catch (error){
            console.error(error)
        }
    }
}