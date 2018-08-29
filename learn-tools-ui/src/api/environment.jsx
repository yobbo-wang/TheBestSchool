/**
 *
 */
'use strict';
import {getAuthorization} from "../utils/cookieUtil";

const URL = () =>{
    if(process.env.NODE_ENV === 'development'){
        return {
            version: "v1",
            baseURL: 'http://127.0.0.1:8888',
            // baseURL: 'http://rap2api.taobao.org/app/mock/26023',
            oosUrl: 'http://v0.api.upyun.com/learn-files-upyun'
        }
    }else{
        return{
            version: "v1",
            baseURL: 'http://rap2api.taobao.org/app/mock/26023',
            oosUrl: 'http://v0.api.upyun.com/learn-files-upyun'
        }
    }
}

const generateUrl = (baseUrl) => {
    return{
        learnUrl: baseUrl + '/learn/index',
        mainList: baseUrl + '/main/list',
        coursewareList: baseUrl + '/courseware/list',
        sysRoleQuery: baseUrl + '/sysLoginInterface/signIn'
    }
}

/**
 * environment config
 * @type {{url: {learnUrl, login, mainList}}}
 */
export const environment = {
    url: generateUrl(URL().baseURL + '/' + URL().version),
    loginUrl: URL().baseURL + '/login',
    logoutUrl: URL().baseURL + '/logout',
    oosUrl: URL().oosUrl,
    oosAuthorization: ""
}

export const getToken = () => {
    return {
        token: getAuthorization()
    }
}