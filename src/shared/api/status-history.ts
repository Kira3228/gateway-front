import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { TStatusHistory } from "../types/common/TStatusHistory"

export const fetchHistory = (id: number) => {
  return httpGet<TStatusHistory>(`${BASE_URL}/messages/history/${id}`)
}