import { ApiInstance } from '@/shared/api'

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
  const { data: authorData } = await ApiInstance.get<GetAuthorResponse>(
    '/author',
    {
      signal,
    }
  )

  return authorData
}
