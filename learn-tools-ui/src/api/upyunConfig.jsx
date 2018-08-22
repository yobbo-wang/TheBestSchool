/**
 * up yun sign
 */
'use strict';
const crypto = require('crypto');

const date = new Date().toGMTString();
const secret = 'WG/LDBHO2YM2+0rh9/hmaPELUxk=';
const bucket = 'learn-files-upyun';

export const upyunConfig = (saveKey, expiration) => {
    let policyD = {bucket: bucket, "save-key": saveKey, expiration: expiration, date: date};
    let policy = new Buffer(JSON.stringify(policyD)).toString('base64');
    let signature = MD5(policy + '&' + secret);
    return {
        signature: signature,
        policy: policy
    }
}

const MD5 = (value) =>{
    return crypto.createHash('md5').update(value).digest('hex');
}
