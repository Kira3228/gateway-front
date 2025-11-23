import { useApi } from "@/shared/api/http"
import { TQueryParams, TStatusHistoryItem } from "../model/types"


// TODO: добавить параметры
export const fetchStatusHistory = async (id: string, params?: TQueryParams) => {
  const { get } = useApi()

  console.log(params?.newStatuses, params?.oldStatuses);
  const history = await get<TStatusHistoryItem[]>(`/messages/history/${id}`, params)
  return history
}