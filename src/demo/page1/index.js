import React from 'react'
import { queryCode } from '@/utils'
import store from '../store'

// console.log('store===>', store)
export default class Page1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		// 组件不能自动更新，需要订阅状态
		this.storeChange = this.storeChange.bind(this) //转变this指向
		store.subscribe(this.storeChange) //订阅Redux的状态，每次state发生改变会触发里面的函数
	}

	storeChange() {
		this.setState(store.getState())
	}

	addNum = () => {
		console.log(111)
		const action = {
			type: 'add_num'
		}
		store.dispatch(action)
	}

	render() {
		// const demo = queryCode()
		console.log(this.state.numReducers)
		console.log('process.env.NODE_ENV143==>', process.env.NODE_ENV)
		return (
			<div>
				<span>{this.state.numReducers.num}</span>
				<button onClick={this.addNum}>+</button>
			</div>
		)
	}
}
