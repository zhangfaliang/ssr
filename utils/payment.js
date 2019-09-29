var md5 = require('md5-node');

/**
 * 获取指定长度字符串
 */
function getRandomCode(len){
    var str = '';
    var strPol = "abcdefghijklmnopqrstuvwxyz0123456789";
    var max = strPol.length - 1;

    for (let i = 0; i < len; i++) {
        str += strPol.charAt(Math.floor(Math.random() * max));
    }
    return str;
}

/**
 * 转换 Array 为 form data
 */
function getFormData(data){
    var formData = [];
    for(var key in data) {
        formData.push(key+'='+data[key]);
    }
    return formData.join('&');
}

/**
 * 获取业务订单信息
 */
function getOrderInfo(payMode, payType, payAmount){
    // 此处填写商户的 uid
    // 必填
    var payMerchId = '123';     

    // 此处填写商户的 token
    // 必填
    var payMerchToken = '321'; 

    // 支付金额
    // 必填
    var payAmount = payAmount;

    // 收款账号
    // 选填
    var payAccount = '';

    // 支付类型，支付宝 = 1，微信 = 2
    // 必填
    var payType = payType;

    // 支付模式，标准模式 = 1，自定义模式 = 2
    // 必填
    var payMode = payMode;

    // 支付成功后异步通知地址，必须是公网地址
    // 必填
    var payNotifyUrl = "http://商户公网域名地址/notify";

    // 支付成功后同步跳转地址，必须是公网地址
    // 该参数仅标准模式需要指定。
    var payReturnUrl = '';
    if(payMode === '1'){
        payReturnUrl = "http://商户公网域名地址/return";
    }

    // 自定义订单号
    // 选填
    var payOrderNum = getRandomCode(12);

    // 自定义用户编号
    // 选填
    var payOrderUid = getRandomCode(12);

    // 商品名称
    // 选填
    var payGoodName = "测试商品名称";

    // 将上述参数进行 md5-32 加密
    var payKey = md5(payGoodName + payType + payAccount + payNotifyUrl + payReturnUrl + payOrderNum + payOrderUid + payAmount + payMode + payMerchToken + payMerchId);

    var payData = {
        "uid": payMerchId,
        "amount": payAmount,
        "account": payAccount,
        "type": payType,
        "mode": payMode,
        "notifyurl": payNotifyUrl,
        "returnurl": payReturnUrl,
        "ordernum": payOrderNum,
        "orderuid": payOrderUid,
        "goodname": payGoodName,
        "key": payKey
    };

    return payData;
}

module.exports = {
    getOrderInfo,
    getFormData
}