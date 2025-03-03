import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignInPageProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignInPage = ({ isFallback }: SignInPageProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
