import { Outlet, RouteObject, useRoutes } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'

import { SignInPage } from './sign-in'
import { AuthGuard } from '@/entities'
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
  {
    path: '/authorization',
    element: (
      <AuthGuard reverse>
        <RootLayout>
          <Outlet />
        </RootLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: 'sign-in',
        element: <SignInPage />,
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
