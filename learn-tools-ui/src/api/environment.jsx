/**
 *
 */
import {upyunConfig} from './upyunConfig';
'use strict';
const URL = () =>{
    if(process.env.NODE_ENV === 'development'){
        return {
            baseURL: '//rap2api.taobao.org/app/mock/25977',
            oosUrl: '//v0.api.upyun.com/learn-files-upyun'
        }
    }else{
        return{
            baseURL: '//rap2api.taobao.org/app/mock/25977',
            oosUrl: '//v0.api.upyun.com/learn-files-upyun'
        }
    }
}

const generateUrl = (baseUrl) => {
    return{
        learnUrl: baseUrl + '/learn/index',
        login: baseUrl + '/sys/login',
        mainList: baseUrl + '/lrean/getList'
    }
}

// const s = upyunConfig('/package.json', 1534782600)
// console.log(s.signature)
// console.log(s.policy)

/**
 * environment config
 * @type {{url: {learnUrl, login, mainList}}}
 */
export const environment = {
    url: generateUrl(URL().baseURL),
    oosUrl: URL().oosUrl,
    oosAuthorization: ""
}