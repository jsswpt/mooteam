import { BrowserRouter } from 'react-router-dom'

import { ModalsRouter } from '@/screens/modals'
import { PagesRouter } from '@/screens/pages'

export const Router = () => (
  <BrowserRouter>
    <ModalsRouter />
    <PagesRouter />
  </BrowserRouter>
)
