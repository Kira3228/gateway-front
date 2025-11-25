import { useApi } from "@/shared/api/http"
import { MessageRequest, } from "../model/types"


export const fetchMessages = async (page: number) => {
  const { get } = useApi()
  const messages = await get<MessageRequest>(`/messages/all`, { page: page, limit: 10 })
  return messages
}