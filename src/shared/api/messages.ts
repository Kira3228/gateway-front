import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { IMessageRespone } from "../types/messages/TMessage.response"
import { TMessageHeader } from "../types/messages/TMessagesHeader"

export const fetchMessages = (params: {
  page?: number,

}) => {
  return httpGet<IMessageRespone>(`${BASE_URL}/messages/messages`, params)
}

export const fetchMessageHeaders = (params: { presetName: string }) => {
  return httpGet<TMessageHeader[]>(`${BASE_URL}/messages/headers`, params)
}