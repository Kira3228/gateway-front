import { useApi } from "@/shared/api/http"
import { TMessageFile, TMessageFilesResponse, TQueryParams } from "../model/types"

export const fetchFiles = async (messageId: string, params: TQueryParams) => {
  const { get } = useApi()

  const files = await get<TMessageFilesResponse, TQueryParams>(`/messages/files/${messageId}`, params)
  return files
}