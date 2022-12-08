import createRouteMap from './create-router-map'
export default function createMatcher(routes) {
  let { pathMap } = createRouteMap(routes)
  function addRoutes(routes) {
    createRouteMap(routes, pathMap)
  }
  function addRoute(route) {
    createRouteMap(route)
  }
  function match(location) {
    return pathMap[location]
  }
  return {
    addRoutes,
    addRoute,
    match,
  }
}
