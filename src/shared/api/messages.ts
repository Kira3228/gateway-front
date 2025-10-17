import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { IMessageRespone } from "@/store/messageList/types/TMessage.response"


export const fetchMessages = () => {
  return httpGet<IMessageRespone>(`${BASE_URL}/messages/messages`)
}