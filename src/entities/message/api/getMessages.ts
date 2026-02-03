import { useApi } from "@/shared/api/http"
import { MessageRequest, } from "../model/types"


export const fetchMessages = async (page: number, limit: number, presetName?: string) => {
  const { get } = useApi()
  const messages = await get<MessageRequest>(`/messages/all`, { page: page, limit: limit, presetName: presetName })
  return messages
}