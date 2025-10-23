import { BASE_URL } from "@/CONSTANTS"
import { TMessageExt } from "../types/message-ext/TMessageExt"
import { httpGet } from "./http"

export const fetchMessageExts = async (params: { messageId: string }) => {
  return httpGet<TMessageExt[]>(`${BASE_URL}/messages/extended/${params.messageId}`)
} 