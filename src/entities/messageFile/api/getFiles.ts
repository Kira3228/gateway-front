import { useApi } from "@/shared/api/http"
import { TMessageFile } from "../model/types"


//TODO: сделать параметры
export const fetchFiles = async (messageId: string, params?: any) => {
  const { get } = useApi()
  const files = await get<TMessageFile[]>(`files/${messageId}`, params)
  return files
}