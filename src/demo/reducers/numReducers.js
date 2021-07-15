const defaultState = {
	num: 0
}
export default (state = defaultState, action) => {
	console.log(action)
	switch (action.type) {
		case 'add_num':
			const newState = Object.assign(state)
			newState.num = newState.num + 1
			return newState
	}
	return state
}
