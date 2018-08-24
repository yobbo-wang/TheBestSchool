/**
 *
 */

'use strict';
import {getCookie} from "../utils/cookieUtil";

const URL = () =>{
    if(process.env.NODE_ENV === 'development'){
        return {
            baseURL: 'http://127.0.0.1:8888',
            // baseURL: 'http://rap2api.taobao.org/app/mock/26023',
            oosUrl: '//v0.api.upyun.com/learn-files-upyun'
        }
    }else{
        return{
            baseURL: 'http://rap2api.taobao.org/app/mock/26023',
            oosUrl: '//v0.api.upyun.com/learn-files-upyun'
        }
    }
}

const generateUrl = (baseUrl) => {
    return{
        learnUrl: baseUrl + '/learn/index',
        login: baseUrl + '/login',
        mainList: baseUrl + '/main/list',
        sysRoleQuery: baseUrl + '/sysLoginInterface/signIn'
    }
}

/**
 * environment config
 * @type {{url: {learnUrl, login, mainList}}}
 */
export const environment = {
    url: generateUrl(URL().baseURL),
    oosUrl: URL().oosUrl,
    oosAuthorization: ""
}

/**
 * 获取token
 */
export const authorization = {
    Authorization: getCookie('auth') != "" ? 'Bearer ' + getCookie('auth') : ""
}
