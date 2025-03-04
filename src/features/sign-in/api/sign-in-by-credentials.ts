import { ApiInstance } from '@/shared/api'

import { AuthorizeByTokenResponse } from '@/entities'

export type SignInByCredentialsData = {
  email: string
  password: string
}

export type SignInByCredentialsResponse = AuthorizeByTokenResponse

export type SignInByCredentialsReq = {
  (data: SignInByCredentialsData): Promise<SignInByCredentialsResponse>
}

export const signInByCredentialsReq: SignInByCredentialsReq = async ({
  email,
  password,
}) => {
  const {
    data: { data, success, token },
  } = await ApiInstance.get<SignInByCredentialsResponse>('/profile')

  if (data.email === email && data.password === password) {
    document.cookie = `auth_token=${token}`
    return { data, success, token }
  } else {
    throw new Error('Invalid email or password')
  }
}
