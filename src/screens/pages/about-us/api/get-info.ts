import { ApiInstance } from '@/shared/api'

export type GetInfoReqResult = {
  success: boolean
  data: {
    info: string
  }
}

export type GetInfoReq = {
  (): Promise<GetInfoReqResult>
}

export const getInfoReq: GetInfoReq = async () => {
  const { data: result } = await ApiInstance.get<GetInfoReqResult>('/info')

  return result
}
