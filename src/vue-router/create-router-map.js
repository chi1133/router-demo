export default function createRouteMap(routes, pathMap) {
  pathMap = pathMap || {}
  routes.forEach((route) => {
    addRouteRecord(route, pathMap)
  })
  console.log('pathMap: ', pathMap)
  return {
    pathMap,
  }
}
function addRouteRecord(route, pathMap, parentRecord) {
  let path = parentRecord
    ? `${parentRecord.path === '/' ? '/' : `${parentRecord.path}/`}${route.path}`
    : route.path

  let record = {
    path,
    component: route.component,
    props: route.props,
    mate: route.mate,
    parent: parentRecord,
  }
  if (!pathMap[path]) {
    pathMap[path] = record
  }
  route.children &&
    route.children.forEach((child) => {
      addRouteRecord(child, pathMap, record)
    })
}
