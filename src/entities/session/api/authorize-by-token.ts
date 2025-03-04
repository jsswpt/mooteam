import { ApiInstance } from '@/shared/api'
import { getCookie } from '@/shared/utils'

export type AuthorizeByTokenResponse = {
  success: boolean
  token: string
  data: {
    fullname: string
    email: string
    password: string
  }
}

export type AuthorizeByTokenReq = {
  (): Promise<AuthorizeByTokenResponse | null>
}

export const authorizeByTokenReq: AuthorizeByTokenReq = async () => {
  const token = getCookie('auth_token')

  const { data } = await ApiInstance.get<AuthorizeByTokenResponse>(
    `/profile?token=${token}`
  )

  if (token !== data.token) {
    return null
  }
  return data
}
