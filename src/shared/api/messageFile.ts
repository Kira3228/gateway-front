import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"

export const fetchMessageFiles = (id: number) => {
  return httpGet(`${BASE_URL}/messages/files/${id}`)
}