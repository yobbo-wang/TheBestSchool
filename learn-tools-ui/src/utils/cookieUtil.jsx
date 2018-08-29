'use strict';
/**
 * 设置cookie
 * @param key
 * @param value
 * @param expire 时间戳
 */
export const setCookie = (key, value, expire) => {
    var date = new Date();
    date.setTime(expire);
    window.document.cookie = key+ "=" + escape(value)+ ((expire == null) ? "" : ";expires=" + date.toGMTString());
}

export const getCookie = (key) => {
    if (window.document.cookie.length>0)
    {
        let c_start = document.cookie.indexOf(key + "=")
        let c_end;
        if (c_start != -1)
        {
            c_start = c_start + key.length+1
            c_end=window.document.cookie.indexOf(";",c_start)
            if (c_end == -1) c_end=window.document.cookie.length
            return unescape(window.document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

export const deleteCookie = (key) => {
    let date = new Date();
    date.setTime(date.getTime() - 1);
    let value = getCookie(key);
    if(value && value != ""){
        window.document.cookie= name + "="+ value +";expires=" + date.toGMTString();
    }
}

export const checkCookie = (key) => {
    let value  = getCookie(key)
    if (value != null && value != "")
    {
        return true;
    }
    else
    {
        return false;
    }
}

export const getAuthorization = () => {
    const token = getCookie('auth');
    if(token){
        return 'Bearer ' + token
    }
    return "";
}