import { Template } from './template'
import { SignIn } from '@/features'

export const Fallback = () => <Template signInForm={<SignIn isFallback />} />
