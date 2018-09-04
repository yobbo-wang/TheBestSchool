import {environment, getToken} from "../../api/environment";
import * as types from "../role/type";
import http from "../../api/http";

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