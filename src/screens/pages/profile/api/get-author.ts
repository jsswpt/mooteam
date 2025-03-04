import { ApiInstance } from '@/shared/api'
import { getCookie } from '@/shared/utils'

type GetAuthorResponse = {
  success: boolean
  data: {
    authorId: number
    name: string
  }
}

type GetAuthorReq = {
  (signal: AbortController['signal']): Promise<GetAuthorResponse>
}

export const getAuthorReq: GetAuthorReq = async (signal) => {
  const token = getCookie('auth_token')

  console.log(`Getting author by token. Current token is ${token}`)

  const { data: authorData } = await ApiInstance.get<GetAuthorResponse>(
    '/author',
    {
      signal,
    }
  )

  return authorData
}
