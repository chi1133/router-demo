import createMatcher from './create-matcher'
import { HashHistory } from './history/hash'
import { BrowserHistory } from './history/history'
import install, { Vue } from './install'
console.log('Vue: ', Vue)
class VueRouter {
  constructor(options) {
    let routes = options.routes || []
    // console.log('routers: ', routes)
    // debugger
    this.beforeEachHooks = []
    this.matcher = createMatcher(routes)
    console.log('this.matcher: ', this.matcher)
    let mode = options.mode || 'hash'
    if (mode === 'hash') {
      this.history = new HashHistory(this)
    } else if (mode === 'history') {
      this.history = new BrowserHistory(this)
    }
  }
  match(location) {
    return this.matcher.match(location)
  }
  listen(cb) {
    this.cb = cb
  }
  push(location) {
    return this.history.push(location)
    // this.history.transitionTo(location, () => {
    //   window.location.hash = location
    // })
  }
  // 路由钩子
  beforeEach(cb) {
    this.beforeEachHooks.push(cb)
  }
  init(app) {
    let history = this.history
    history.transitionTo(history.getCurrentLocation(), () => {
      history.setupListener()
    })
    history.listen((newRoute) => {
      app._route = newRoute
    })
  }
}
VueRouter.install = install
export default VueRouter
