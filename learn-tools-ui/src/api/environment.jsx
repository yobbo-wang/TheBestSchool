/**
 *
 */
'use strict';
import {getAuthorization} from "../utils/cookieUtil";

const version = "v1";
let baseURL; // sAAs服务地址
let oosUrl; //又拍云对象存储url

if(process.env.NODE_ENV === 'development'){
    baseURL = 'http://127.0.0.1:8888/',
        // baseURL: 'http://rap2api.taobao.org/app/mock/26023',
    oosUrl = 'http://v0.api.upyun.com/learn-files-upyun'
}else{
    baseURL = 'http://rap2api.taobao.org/app/mock/26023/',
    oosUrl = 'http://v0.api.upyun.com/learn-files-upyun'
}

const generateUrl = (baseUrl) => {
    return{
        oosUrl: oosUrl,
        oosAuthorization: "",
        loginUrl: baseURL + 'login',   //登录
        logoutUrl: baseURL + 'logout', //注销
        checkAuth: baseUrl + version + '/auth/check',  //检查authorization可用性
        learn:  baseUrl + version + '/learn/index',
        mainList: baseUrl + version + '/main/list',
        menuList: baseUrl + version + '/menu/list',  //查询菜单列表
        queryMenuByUID: baseUrl + version + '/menu/role/queryMenuByUID', //根据用户id查询用户拥有菜单
        saveMenu: baseUrl + version + '/menu/edit',  //保存或更新菜单
        roleList:  baseUrl + version + '/role/list',  //查询角色列表
        saveRole: baseUrl + version + '/role/edit',  //保存或更新角色
        queryMenuIdSByRoleId: baseUrl + version + '/menu/role/query/menuId',  //根据角色id查询菜单id集合
        changeStatus: baseUrl + version + '/role/change/status', // 更新角色状态
        userList: baseUrl + version + '/user/list', //查询用户列表
        saveUser: baseUrl + version + '/user/save',  //保存或更新角色
        errorInfo: baseUrl + version + '/options/errorInfo/list', //查询错误码列表带分页
        errorCode: baseUrl + version + '/options/errorInfo/code', // 获取错误码不带分页
        coursewareList: baseUrl + version + '/courseware/list',
        sysRoleQuery: baseUrl + version + '/sysLoginInterface/signIn',
    }
}

/**
 * environment config
 * @type {{url: {learnUrl, login, mainList}}}
 */
export const environment = {
    url: generateUrl(baseURL)
}

export const getToken = () => {
    return {
        authorization: getAuthorization()
    }
}