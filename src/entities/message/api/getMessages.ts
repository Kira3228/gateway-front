import { useApi } from "@/shared/api/http"
import { TMessage } from "../model/types"

//TODO: Добавить params для сообщений
export const fetchMessages = async (page: number) => {
  const { get } = useApi()
  const messages = await get<TMessage[]>(`/messages/all`, { page: page })
  return messages
}