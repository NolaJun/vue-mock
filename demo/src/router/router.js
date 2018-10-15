import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
    	path: '',
    	component: r => require.ensure([], () => r(require('../components/login/login')), 'login')
    }]
}]
