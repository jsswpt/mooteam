import { RouteObject, useRoutes } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <>App</>,
  },
]

export const PagesRouter = () => {
  const { hash, key, pagePath, queryAsString: search, state } = useLocation()

  const routes = useRoutes(routesConfig, {
    hash,
    key,
    pathname: pagePath,
    search,
    state,
  })

  return routes
}
