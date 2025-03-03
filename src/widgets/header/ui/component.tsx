import { useUnit } from 'effector-react'
import { Link } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'
import { Button } from '@/shared/ui'

import { Template } from './template'
import { $isAuthorized } from '@/entities'

const ProfileItem = () => {
  const isAuthorized = useUnit($isAuthorized)

  return isAuthorized ? (
    <li>
      <Link to="/profile">
        <Button variant="outlined" color="inherit">
          Profile
        </Button>
      </Link>
    </li>
  ) : null
}

const SignInItem = () => {
  const isAuthorized = useUnit($isAuthorized)

  return !isAuthorized ? (
    <li>
      <Link to="/authorization/sign-in">
        <Button variant="outlined" color="inherit">
          Sign in
        </Button>
      </Link>
    </li>
  ) : null
}

const SignOutItem = () => {
  const { pagePath } = useLocation()

  if (pagePath === '/profile') {
    return (
      <li>
        <Button variant="outlined" color="inherit">
          Sign out
        </Button>
      </li>
    )
  }

  return null
}

export const Component = () => (
  <Template
    navigationItems={
      <>
        <li>
          <Link to="/">
            <Button variant="outlined" color="inherit">
              About us
            </Button>
          </Link>
        </li>
        <ProfileItem />
        <SignInItem />
        <SignOutItem />
      </>
    }
  />
)
