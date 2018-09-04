import * as types from './type';
import http from '../../api/http'
import {environment, getToken} from '../../api/environment'

const fetchUserList = (currentPage, pageSize) =>{
    let options = {
        params: {
            currentPage: currentPage,
            pageSize: pageSize
        },
        headers: {
            Authorization: getToken().authorization
        }
    }
    return http.post(environment.url.userList, options)
}

export const requestData = (currentPage, pageSize, datatype) => {
    return async dispatch => {
        try {
            let result = await fetchUserList(currentPage, pageSize);
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.REQUESTUSERLIST,
                value: result,
                datatype
            })
        }catch (error){
            console.error(error)
        }
    }
}


