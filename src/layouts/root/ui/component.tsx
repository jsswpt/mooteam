import { Template } from './template'
import { Header } from '@/widgets'

type ComponentProps = { children: React.ReactNode }

export const Component = ({ children }: ComponentProps) => (
  <Template children={children} header={<Header />} />
)
