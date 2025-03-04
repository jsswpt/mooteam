import { useUnit } from 'effector-react'
import { Navigate } from 'react-router-dom'

import {
  $isAuthorized,
  $isAuthorizeRequested,
  authorizeOnLoadFx,
} from '@/entities'

export type AuthGuardProps = {
  reverse?: boolean
  children: React.ReactNode
}

export const AuthGuard = ({
  children,
  reverse,
}: AuthGuardProps): React.ReactNode => {
  const [isAuthorized, isAuthorizeRequested, isLoading] = useUnit([
    $isAuthorized,
    $isAuthorizeRequested,
    authorizeOnLoadFx.pending,
  ])

  if (isAuthorizeRequested && !isLoading) {
    return (reverse ? !isAuthorized : isAuthorized) ? (
      children
    ) : (
      <Navigate to={reverse ? '/' : '/authorization/sign-in'} />
    )
  }

  return <></>
}
