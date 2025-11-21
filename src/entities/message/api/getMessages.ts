import { useApi } from "@/shared/api/http"
import { TMessage } from "../model/types"

//TODO: Добавить params для сообщений
export const fetchMessages = async () => {
  const { get } = useApi()
  console.log(`Запрос сообщений`);

  const messages = await get<TMessage[]>(`/messages/all`)
  console.log(`messages`, messages);


  return messages
}