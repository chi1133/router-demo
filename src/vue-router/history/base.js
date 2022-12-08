function createRoute(record, location) {
  let matched = []
  if (record) {
    while (record) {
      matched.unshift(record)
      record = record.parent
    }
  }
  return {
    ...location,
    matched,
  }
}
function runQueue(queue, to, from, cb) {
  function next(index) {
    if (index >= queue.length) return cb()
    let hook = queue[index]
    hook(to, from, () => next(index + 1))
  }
  next(0)
}
export class Base {
  constructor(router) {
    this.router = router
    this.current = createRoute(null, {
      path: '/',
    })
  }
  transitionTo(location, listener) {
    let record = this.router.match(location)
    let route = createRoute(record, { path: location })
    if (location === this.current.path && route.matched.length == this.current.matched.length) {
      return
    }
    let queue = [].concat(this.router.beforeEachHooks)
    runQueue(queue, route, this.current, () => {
      this.current = route
      /**
       * path '/' ,matched []
       * path '/about/a, matched [a, b]
       * * */
      console.log(this.current)

      // 路由切换调用

      listener && listener()
      this.cb && this.cb(route)
    })
  }
  listen(cb) {
    this.cb = cb
  }
}
