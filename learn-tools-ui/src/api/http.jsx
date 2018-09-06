/**
 * 定义api返回格式, 所有请求均符合这个规范. 如果是调用restful api响应格式不符合，则用自定义
 *  { "data": {}, "success": true , "errorCode": 0," errorMsg" : ""}
 *  {"data": [], "success": true, "errorCode": 0, "errorMsg": ""}
 */


'use strict';
import $axios from './axiosConfig'
import {Message} from "element-react";
import {fromatObjectToformData} from "../utils/comUtil";

export default class http {
    /**
    * ajax get
     * @param url
     * @param params
     * @returns result.data
     */
    static async get(url, options){
        try{
            let result = await new $axios('get', url, options );
            if(result.success){
                return result.data;
            }else{
                throw {errorCode: result.errorCode, errorMsg: result.errorMsg};
            }
        }catch(error){
            throw error
        }
    }

    /**
     * ajax post 主要用于form表单式提交
     * @param url
     * @param params
     * @returns {Promise<*>}
     */
    static async post(url, options){
        try{
            if(options.data &&  typeof options == 'object'){
                options.data = fromatObjectToformData(options.data);
            }
            let result = await new $axios('post',url, options );
            if(result.success){
                return result.data;
            }else{
                throw {errorCode: result.errorCode, errorMsg: result.errorMsg};
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
    static async patch(url, options){
        try {
            let result = await new $axios('patch',url, options );
            if(result.success){
                return result.data;
            }else{
                Message({ showClose: true, message:  result.errorMsg ?  result.errorMsg : '系统异常', type: 'error'  });
                throw {errorCode: result.errorCode, errorMsg: result.errorMsg};
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
    static async put(url, options){
        try{
            let result = await new $axios('put',url, options );
            if(result.success){
                return result.data;
            }else{
                throw {errorCode: result.errorCode, errorMsg: result.errorMsg};
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
    static async delete(url, options){
        try{
            let result = await new $axios('delete',url, options );
            if(result.success){
                return result.data;
            }else{
                throw {errorCode: result.errorCode, errorMsg: result.errorMsg};
            }
        }catch (error){
            throw error;
        }
    }

    /**
     *
     * @param url
     * @param options
     * @returns {Promise<void>}
     */
    static async head(url, options){
        try{
            return await new $axios('head',url, options );
        }catch (error){
            throw error;
        }
    }
}