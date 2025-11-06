import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { TStatusHistory } from "../types/common/TStatusHistory"

export type TFilePayLoad = {
  id: number,
  sortField?: string,
  sortOrder?: "ASC" | "DESC",
  oldStatuses?: string[],
  newStatuses?: string[],
}

export const fetchHistory = (payload: TFilePayLoad) => {
  return httpGet<TStatusHistory>(`${BASE_URL}/messages/history/${payload.id}`,
    {
      sortField: payload.sortField,
      sortOrder: payload.sortOrder,
      oldStatuses: payload.oldStatuses,
      newStatuses: payload.newStatuses,
    }
  )
}