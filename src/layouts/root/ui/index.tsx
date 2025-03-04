import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {
  children: React.ReactNode
}

type RootLayoutProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const RootLayout = ({ isFallback, ...rest }: RootLayoutProps) =>
  isFallback ? (
    <Fallback {...(rest as Props)} />
  ) : (
    <Suspense fallback={<Fallback {...(rest as Props)} />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
