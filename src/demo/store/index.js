// import { createStore } from 'redux'
// import todoApp from '../reducers'

// let store = createStore(todoApp)

// export default store

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const middlewares = [thunkMiddleware, createLogger()]

export default function configStore() {
	const store = createStore(rootReducer, applyMiddleware(...middlewares))
	return store
}
