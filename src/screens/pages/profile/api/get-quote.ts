import { ApiInstance } from '@/shared/api'
import { getCookie } from '@/shared/utils'

type GetQuoteData = {
  authorId: number
}

type GetQuoteResponse = {
  success: boolean
  data: {
    quoteId: number
    authorId: number
    quote: string
  }
}

type GetQuoteReq = {
  (
    data: GetQuoteData,
    signal: AbortController['signal']
  ): Promise<GetQuoteResponse>
}

export const getQuoteReq: GetQuoteReq = async ({ authorId }, signal) => {
  const token = getCookie('auth_token')

  console.log(
    `Getting quote by token and authorId. Current token is ${token}, authorId is ${authorId}`
  )

  const { data: quoteData } = await ApiInstance.get<GetQuoteResponse>(
    '/quote',
    {
      signal,
    }
  )

  return quoteData
}
