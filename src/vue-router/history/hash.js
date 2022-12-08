import { Base } from './base'

function ensureSlash() {
  if (window.location.hash) {
    return
  }
  window.location.hash = '/'
}
function getHash() {
  return window.location.hash.slice(1)
}
export class HashHistory extends Base {
  constructor(router) {
    super(router)

    // 初始化给默认/
    ensureSlash()
  }
  setupListener() {
    // window.addEventListener('popstate',()=>{}) 方法一样
    window.addEventListener('hashchange', () => {
      // console.log(getHash())
      this.transitionTo(getHash()) // 监听hash值变化
    })
  }
  getCurrentLocation() {
    return getHash()
  }
  push(location) {
    this.transitionTo(location, () => {
      window.location.hash = location
    })
  }
}
