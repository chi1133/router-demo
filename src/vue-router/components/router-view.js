export default {
  functional: true, // 函数组件，不具备$children $parent
  render(h, { parent, data }) {
    data.routerView = true
    let route = parent.$route
    console.log(this)
    let depth = 0
    while (parent) {
      // _vnode对应的是组件的渲染函数中的虚拟节点 $vnode是组件本身
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      parent = parent.$parent
    }
    let record = route.matched[depth]
    if (!record) {
      return h()
    }

    return h(record.component, data)
  },
}
