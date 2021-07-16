const defaultState = {
	num: 0
}
export default (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD':
			const newState = Object.assign([], state) //改变state的引用
			newState.num = newState.num + 1
			return newState
	}
	return state
}
