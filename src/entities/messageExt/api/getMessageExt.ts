import { useApi } from "@/shared/api/http"
import { TMessageExt } from "../model/types"

export const fetchMessageExts = (id: string) => {
  const { get } = useApi()
  const messageExts = get<TMessageExt, {}>(`/messages/extended/${id}`)
  return messageExts
}