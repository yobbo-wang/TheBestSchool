import * as types from './type';
import http from '../../api/http'
import {environment, getToken} from '../../api/environment'

const fetchCoursewareList = (currentPage, pageSize) =>{
    let options = {
        params: {
            currentPage: currentPage,
            pageSize: pageSize
        },
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.coursewareList, options)
}

//初始化获取数据列表，保存至redux
export const queryCourseWareDate = (currentPage, pageSize, dataType) => {
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
                dataType
            })
        }catch (error){
            console.error(error)
        }
    }
}