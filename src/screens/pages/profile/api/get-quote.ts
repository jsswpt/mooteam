import { ApiInstance } from '@/shared/api'

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
  console.log('Getting quote by authorId. Current authorId is', authorId)

  const { data: quoteData } = await ApiInstance.get<GetQuoteResponse>(
    '/quote',
    {
      signal,
    }
  )

  return quoteData
}
