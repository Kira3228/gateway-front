import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"

export const fetchMessageFiles = (payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }) => {
  return httpGet(`${BASE_URL}/messages/files/${payload.id}`, {
    sortField: payload.sortField,
    sortOrder: payload.sortOrder
  })
}