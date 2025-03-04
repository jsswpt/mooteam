import { ApiInstance } from '@/shared/api'

export type SignOutResponse = {
  success: boolean
}

export type SignOutReq = {
  (): Promise<SignOutResponse>
}

export const signOutReq: SignOutReq = async () => {
  const { data } = await ApiInstance.get<SignOutResponse>('/logout')

  return { success: data.success }
}
