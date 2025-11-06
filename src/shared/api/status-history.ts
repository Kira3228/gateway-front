import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { TStatusHistory } from "../types/common/TStatusHistory"

export const fetchHistory = (payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }) => {
  return httpGet<TStatusHistory>(`${BASE_URL}/messages/history/${payload.id}`,
    {
      sortField: payload.sortField,
      sortOrder: payload.sortOrder
    }
  )
}