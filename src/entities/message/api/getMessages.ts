import { useApi } from "@/shared/api/http"
import { TMessage } from "../model/types"

//TODO: Добавить params для сообщений
export const fetchMessages = async () => {
  const { get } = useApi()
  const messages = await get<TMessage[]>(`/messages/all`)
  return messages
}