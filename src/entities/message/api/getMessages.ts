import { useApi } from "@/shared/api/http"
import { MessageParams, MessageRequest, } from "../model/types"


export const fetchMessages = async (params: MessageParams) => {
  const { get } = useApi()
  const messages = await get<MessageRequest, MessageParams>(`/messages/all`, params)
  return messages
}