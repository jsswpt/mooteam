import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AboutUsSectionProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const AboutUsSection = ({ isFallback }: AboutUsSectionProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
