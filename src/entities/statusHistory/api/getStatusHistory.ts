import { useApi } from "@/shared/api/http"
import { TStatusHistoryItem } from "../model/types"


// TODO: добавить параметры
export const fetchStatusHistory = async (id: string, params?: any) => {
  const { get } = useApi()
  const history = await get<TStatusHistoryItem[]>(`/messages/history/${id}`, params)
  return history
}