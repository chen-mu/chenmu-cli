import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Routers from './routes'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/index.js'
import './index.css'
const store = Store()

const Root = () => {
	const pathname = location.pathname
	const currRoute = Routers.filter((item) => item.path === location.pathname)
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter basename='/'>
					<Route component={currRoute[0].component}></Route>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}
ReactDOM.render(<Provider store={store}>{Root()}</Provider>, document.getElementById('root'))
