import { Template } from './template'
import { Header } from '@/widgets'

type FallbackProps = {
  children: React.ReactNode
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template children={children} header={<Header isFallback />} />
)
