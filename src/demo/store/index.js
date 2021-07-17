// import { createStore } from 'redux'
// import todoApp from '../reducers'

// let store = createStore(todoApp)

// export default store

// applyMiddleware 作用是将所有中间件组成一个数组，依次执行
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const middlewares = [thunkMiddleware, createLogger()]

export default function configStore() {
	const store = createStore(rootReducer, applyMiddleware(...middlewares))
	return store
}
