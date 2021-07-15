import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Routers from './routes'
import Demo from './page1/index'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

console.log('Routers===>', Routers)

// const element =
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
ReactDOM.render(Root(), document.getElementById('root'))
