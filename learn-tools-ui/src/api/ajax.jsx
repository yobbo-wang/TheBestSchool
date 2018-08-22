/**
 * 定义api返回格式, 所有请求均符合这个规范. 如果是调用restful api响应格式不符合，则用自定义
 *  { "data": {}, "isSuccess": true , "errorCode": 0," errorMsg" : ""}
 *  {"data": [], "isSuccess": true, "errorCode": 0, "errorMsg": ""}
 */
'use strict';
import $axios from './axiosConfig'

export default class http {
    /**
     * ajax get
     * @param url
     * @param params
     * @returns
     */
    static async get(url, params){
        try{
            let result = await new $axios('get', url, params );
            if(result.isSuccess || result.isSuccess == "true"){
                return result.data;
            }else{
                throw result.errorMsg;
            }
        }catch(error){
            throw error
        }
    }

    /**
     * ajax post
     * @param url
     * @param params
     * @returns {Promise<*>}
     */
    static async post(url, params){
        try{
            let result = await new $axios('post',url, params );
            if(result.isSuccess || result.isSuccess == "true"){
                return result.data;
            }else{
                throw result.errorMsg;
            }
        }catch(error){
            throw error;
        }
    }

    /**
     * ajax pathch
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async patch(url, params){
        try {
            let result = await new $axios('patch',url, params );
            if(result.isSuccess || result.isSuccess == "true"){
                return result.data;
            }else{
                throw result.errorMsg;
            }
        }catch (error){
            throw error;
        }
    }

    /**
     * ajax put
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async put(url, params){
        try{
            let result = await new $axios('put',url, params );
            if(result.isSuccess || result.isSuccess == "true"){
                return result.data;
            }else{
                throw result.errorMsg;
            }
        }catch (error){
            throw error;
        }
    }

    /**
     * ajax delete
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async delete(url, params){
        try{
            let result = await new $axios('delete',url, params );
            if(result.isSuccess || result.isSuccess == "true"){
                return result.data;
            }else{
                throw result.errorMsg;
            }
        }catch (error){
            throw error;
        }
    }

    /**
     * ajax 自定义
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async custom(url, method, params){
        try{
            let result = await new $axios(method, url, params );
            return result;
        }catch (error){
            throw error;
        }
    }
}