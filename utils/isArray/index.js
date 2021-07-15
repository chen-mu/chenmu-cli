/**
 * 说明: 
 *
 **/
function isArray (arr, isBlank) {
    return arr && Array.isArray(arr) && (!isBlank || (isBlank && arr.length > 0));
}

export default isArray;