import React from 'react';
// import { hashHistory } from 'react-router'
import {environment ,getToken} from "../api/environment";
import http from '../api/http';

/**
 * 每次进去项目之前校验token可用性
 */
export const checkToken = () => {
    const authorization =  getToken().authorization;
    if(authorization == "") {
        // hashHistory.replace( '/login' )
    }
    let options = {
        headers: {
            Authorization: authorization
        }
    }
    http.head(environment.url.checkAuth, options).then((r) => {
        // 说明校验成功，获取错误码放到全局中 //
        inputErrorMsg();
    }).catch(() => {
        console.log('Authorization校验失败，跳转登录！！！')
        // hashHistory.replace( '/login' )
    })
}

/**
 * 表单异常错误码转换
 * <p>
 *     此错误码可以跟后端共用
 * @param code
 * @returns {string}
 */
const inputErrorMsg = () => {
    var options = {
        headers: {
            Authorization: getToken().authorization
        }
    }
    http.get(environment.url.errorCode, options).then(result => {
        window.constants = {
            errorCode: result
        }
    }).catch(e=>{});
}