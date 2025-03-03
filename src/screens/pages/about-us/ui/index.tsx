import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AboutUsPageProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const AboutUsPage = ({ isFallback }: AboutUsPageProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
