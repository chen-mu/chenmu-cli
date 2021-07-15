/**
 * 获取链接上的参数,支持特定值得获取,也支持全量获取;建议全量获取
 * @param name 需要获取链接上指定参数的值
 */

const queryCode = (name) => {
	const url = window.location.href
	const theRequest = {}
	if (url.indexOf('?') !== -1) {
		const str = url.substr(url.indexOf('?') + 1)
		const strs = str.split('&')
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
		}
	}
	const isExit = Object.keys(theRequest).findIndex((item) => item === name)
	if (isExit > -1 && name) {
		return theRequest[name]
	}
	return theRequest
}

export default queryCode
