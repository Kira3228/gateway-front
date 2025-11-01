import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { TMessageFile } from "../types/common/TMessageFile"

export const fetchMessageFiles = async (payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }): Promise<TMessageFile[]> => {
  return httpGet<TMessageFile[]>(`${BASE_URL}/messages/files/${payload.id}`, {
    sortField: payload.sortField,
    sortOrder: payload.sortOrder
  })
}