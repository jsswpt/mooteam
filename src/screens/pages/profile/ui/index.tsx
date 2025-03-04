import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfilePageProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfilePage = ({ isFallback }: ProfilePageProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
