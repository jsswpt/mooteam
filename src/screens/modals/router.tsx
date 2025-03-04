import { useLocation } from '@/shared/lib/router'

export const ModalsRouter = () => {
  const { modalPath } = useLocation()

  return <>{modalPath}</>
}
