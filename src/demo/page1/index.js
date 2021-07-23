import React from 'react'
import { queryCode } from '@/utils'
import { connect } from 'react-redux'
import { add } from '../action/index'
// import store from '../store'

// console.log('store===>', store)
@connect(
	({ numReducers }) => ({
		numReducers
	}),
	(dispatch) => ({
		add() {
			dispatch(add())
		}
	})
)
export default class Page1 extends React.Component {
	storeChange() {
		this.setState(store.getState())
	}

	render() {
		// const demo = queryCode()
		// console.log(this.state.numReducers)
		const { add, numReducers } = this.props
		return (
			<div>
				<span className='demo'>{numReducers.num}11212</span>
				<button onClick={add}>+</button>
			</div>
		)
	}
}
