import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui'

import { Template } from './template'

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
        <li>
          <Link to="/profile">
            <Button variant="outlined" color="inherit">
              Profile
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/sign-in">
            <Button variant="outlined" color="inherit">
              Sign in
            </Button>
          </Link>
        </li>
        <li>
          <Button variant="outlined" color="inherit">
            Sign out
          </Button>
        </li>
      </>
    }
  />
)
