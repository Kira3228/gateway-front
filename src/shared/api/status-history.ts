import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"
import { TStatusHistory } from "../types/common/TStatusHistory"
import { TOption } from "../UI/SelectInput/TOptions"

export type TFilePayLoad = {
  id: number,
  sortField?: string,
  sortOrder?: "ASC" | "DESC",
  newStatuses?: string[],
  oldStatuses?: string[],
  userTypes?: string[]
}

export const fetchHistory = (payload: TFilePayLoad) => {

  return httpGet<TStatusHistory>(`${BASE_URL}/messages/history/${payload.id}`,
    {
      sortField: payload.sortField,
      sortOrder: payload.sortOrder,
      oldStatuses: payload.oldStatuses,
      newStatuses: payload.newStatuses,
      userTypes: payload.userTypes
    }
  )
}