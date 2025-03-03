import { Outlet, RouteObject, useRoutes } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'

import { RootLayout } from '@/layouts'
import { AboutUsPage } from '@/screens/pages/about-us'

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <AboutUsPage />,
      },
    ],
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
