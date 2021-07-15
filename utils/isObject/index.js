
/**
 * 校验是不是对象✅
 * @param {Object} str
 * @param {boolean} status 是否需要判对象
 **/
function isObject (obj, status) {
    return !!(obj && Object.prototype.toString.call(obj) === '[object Object]' && (!status || Object.keys(obj).length));
}

export default isObject;