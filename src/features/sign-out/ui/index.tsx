import { Button } from '@/shared/ui'

import { handleSignOut } from '@/features'

export const SignOut = () => (
  <Button variant="outlined" color="inherit" onClick={() => handleSignOut()}>
    Sign out
  </Button>
)
