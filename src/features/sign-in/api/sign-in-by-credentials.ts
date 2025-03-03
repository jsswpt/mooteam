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

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data.email === email && data.password === password) {
        document.cookie = `auth_token=${token}`
        res({ data, success, token })
      } else {
        rej(new Error('Invalid email or password'))
      }
    }, 3000)
  })
}
