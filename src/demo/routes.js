import { lazy } from 'react'
const Routers = [
	{
		title: 'page1',
		path: '/demo/page1',
		component: lazy(() => import('./page1/index'))
	},
	{
		title: 'page2',
		path: '/demo/page2',
		component: lazy(() => import('./page2/index'))
	}
]

export default Routers
