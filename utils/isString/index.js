/**
 * 校验是不是字符串✅
 * @param {string} str
 * @param {boolean} status 是否需要判空
 **/
function isString (str, status) {
  return !!(typeof str === 'string' && (!status || str.length > 0));
}

export default isString;