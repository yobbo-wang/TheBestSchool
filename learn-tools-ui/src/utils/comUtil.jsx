'use strict';

/**
 * 格式化时间 yyyy-MM-dd HH:mm:ss
 * @param d
 */
export const formarDate = (d) =>{
    const date = new Date(d);
    let _d_ = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
    let _m_ = [date.getHours(), date.getMinutes(), date.getSeconds()].join(":");
    return _d_ + " " + _m_;
}

/**
 * 格式化时间 yyyy-MM-dd
 * @param d
 */
export const formarDateT = (d) =>{
    const date = new Date(d);
    let _d_ = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
    return _d_;
}

export const fromatObjectToformData= (d) =>{
    let data = [];
    for(let key in d){
        data.push(key + "=" + d[key]);
    }
    return data.join('&');
}