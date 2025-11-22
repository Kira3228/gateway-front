import { useApi } from "@/shared/api/http"
import { TMessageFile, TQueryParams } from "../model/types"

export const fetchFiles = async (messageId: string, params?: TQueryParams) => {
  const { get } = useApi()
  const files = await get<TMessageFile[]>(`/messages/files/${messageId}`, params)
  return files
}